import { Component, Input } from "@angular/core";
import { select } from "@angular-redux/store";
import { Observable } from "rxjs";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "stage-5-frame-builder-overview",
  templateUrl: "stage-5-frame-builder-overview.html",
  styleUrls: ["stage-5-frame-builder-overview.scss"]
})
export class Stage5_FrameBuilderOverviewComponent {
  @Input("reviewMode")
  reviewMode: boolean;
  @select(["activeProject", "values", "samplingStages"])
  readonly samplingStages$: Observable<any[]>;
  samplingStages: any[] = [];
  constructor(private modalCtrl: ModalController) {}
  ngOnInit() {
    // lock params are used to bypass case where url hash loses navparams on action sheet open (when clicking a select question)
    // this is likely to be fixed via router upgrade
    this.samplingStages$.subscribe(stages => {
      if (stages) {
        this.samplingStages = stages;
      }
    });
  }
  async buildStage(stage, stageIndex) {
    // get formgroup matching stage name to parentID
    let params = { stageFormGroup: stage, stageIndex: stageIndex };
    const modal = await this.modalCtrl.create({
      component: "FrameBuilderPage",
      componentProps: params,
      cssClass: "full-screen"
    });
    await modal.present();
  }
}
