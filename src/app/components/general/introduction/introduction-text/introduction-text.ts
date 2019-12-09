import { Component } from "@angular/core";
import { IonicPage, ViewController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-introduction-text",
  templateUrl: "introduction-text.html",
  styleUrls: ["introduction-text.scss"]
})
export class IntroductionTextPage {
  constructor(public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
