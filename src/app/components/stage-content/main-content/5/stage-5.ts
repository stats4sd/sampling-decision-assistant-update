import { Component } from "@angular/core";
import { StagePage } from "src/app/pages/tool/stage/stage.page";

@Component({
  selector: "stage-5",
  templateUrl: "stage-5.html",
  styleUrls: ["stage-5.scss"]
})
export class Stage5Component extends StagePage {
  builderStages: any = [];
  stageBuilt: any = {};
  showStrataDefineSlide: boolean = false;

  // @ViewChild('stageSlides') stageSlides: Slides;

  goBack() {
    this.navCtrl.pop();
  }
  nextStage() {
    // this.navCtrl.push("StagePage", { stageID: "stage-6" }).then(_ => {
    //   this.navCtrl.remove(this.navCtrl.length() - 2);
    // });
  }
}
