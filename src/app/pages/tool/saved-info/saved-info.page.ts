import { Component, AfterViewInit } from "@angular/core";
import { Project } from "src/app/models/models";
import { AlertController, Events, NavParams } from "@ionic/angular";
import { DataProvider } from "src/app/services/data/data";
import { ViewController } from "@ionic/core";
import { Observable } from "rxjs";
import { select } from "@angular-redux/store";
import {} from "ngx-file-drop";

@Component({
  selector: "app-saved-info",
  templateUrl: "./saved-info.page.html",
  styleUrls: ["./saved-info.page.scss"]
})
export class SavedInfoPage implements AfterViewInit {
  @select("savedProjects")
  savedProjects$: Observable<Project[]>;
  @select("activeProject")
  activeProject$: Observable<Project>;
  savedProjects: Project[] = [];
  activeProject: Project;
  saveName: string;
  view: string;
  savedSurveys: any;
  errorMsg: string;
  _dbVersion: number;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public dataPrvdr: DataProvider,
    public events: Events,
    public alertCtrl: AlertController
  ) {
    this.view = this.navParams.data.view;
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

  createNew() {
    if (this.dataPrvdr.checkProjectTitleUnique(this.saveName) == -1) {
      this.dataPrvdr.createNewProject(this.saveName);
      // this.viewCtrl.dismiss({ title: this.saveName });
    } else {
      this.errorMsg = "A project with that name already exists";
    }
  }

  setView(view) {
    this.view = view;
  }
  dismiss() {
    // this.viewCtrl.dismiss();
  }
  loadProject(project: Project) {
    console.log("loading project", project);
    this.dataPrvdr.loadProject(project);
    // this.viewCtrl.dismiss();
  }
  deleteProject(project: Project) {
    this.dataPrvdr.deleteProject(project);
  }

  // file drop
  dropped(e) {
    // handle file drop
    let files = e.files;
    this.events.subscribe("import:duplicate", project => {
      console.log("duplicate file", project);
      this.promptRename(project);
    });
    this.events.subscribe("import:complete", _ => {
      this.dismiss();
    });
    this.dataPrvdr.import(files);
  }

  fileOver(e) {}
  fileLeave(e) {}

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
