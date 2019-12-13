import { Component, AfterViewInit } from "@angular/core";
import { Project } from "src/app/models/models";
import { AlertController, Events, ModalController } from "@ionic/angular";
import { DataProvider } from "src/app/services/data/data";
import { Observable } from "rxjs";
import { select } from "@angular-redux/store";
import { NgxFileDropEntry } from "ngx-file-drop";
import { ALL_EXAMPLES } from "src/app/data";

@Component({
  selector: "app-saved-info",
  templateUrl: "./saved-info.component.html",
  styleUrls: ["./saved-info.component.scss"]
})
export class SavedInfoComponent implements AfterViewInit {
  @select("savedProjects")
  savedProjects$: Observable<Project[]>;
  @select("activeProject")
  activeProject$: Observable<Project>;
  savedProjects: Project[] = [];
  projectTemplates: Project[] = ALL_EXAMPLES;
  activeProject: Project;
  saveName: string;
  savedSurveys: any;
  errorMsg: string;
  _dbVersion: number;

  constructor(
    public dataPrvdr: DataProvider,
    public events: Events,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {
    this._dbVersion = this.dataPrvdr.dbVersion;
    this.savedProjects$.subscribe(projects => {
      if (projects) {
        this.savedProjects = projects.filter(
          p => p.dbVersion == this._dbVersion
        );
      }
    });
    this.activeProject$.subscribe(p => (this.activeProject = p));
  }
  // when saved projects loaded want to refresh projects list from db
  ngAfterViewInit() {
    this.dataPrvdr.loadSavedProjects(false);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
  loadProject(project: Project) {
    this.dataPrvdr.loadProject(project);
    this.modalCtrl.dismiss();
  }
  deleteProject(project: Project) {
    this.dataPrvdr.deleteProject(project);
  }
  async loadTemplate(project: Project) {
    const d: number = Date.now();
    const newProject = { ...project, created: d, edited: d };
    delete newProject.title;
    this.loadProject(newProject);
  }

  // file drop
  dropped(files: NgxFileDropEntry[]) {
    // handle file drop
    console.log("dropped", files);
    this.events.subscribe("import:duplicate", project => {
      console.log("duplicate file", project);
      this.promptRename(project);
    });
    this.events.subscribe("import:complete", _ => {
      this.dismiss();
    });
    this.dataPrvdr.import(files);
  }

  async promptRename(project) {
    let prompt = await this.alertCtrl.create({
      header: "Notification",
      message: "A project with this name already exists. Please rename.",
      backdropDismiss: false,
      inputs: [
        {
          name: "title",
          placeholder: "title",
          value: project.title
        }
      ],
      buttons: [
        {
          text: "Save",
          handler: data => {
            prompt.dismiss({
              project: project,
              newTitle: data.title
            });
            // return false to not manually dismiss
            return false;
          }
        }
      ]
    });
    await prompt.present();
    const dismiss = await prompt.onDidDismiss();
    const data = dismiss.data;
    if (data.newTitle != data.project.title) {
      project.title = data.newTitle;
      console.log("project", project);
      this.dataPrvdr.loadProject(data.project);
      this.dataPrvdr.backgroundSave();
      this.dismiss();
    } else {
      this.errorMsg = "A project with that name already exists";
      this.events.unsubscribe("import:duplicate");
      this.events.unsubscribe("import:complete");
    }
  }
}
