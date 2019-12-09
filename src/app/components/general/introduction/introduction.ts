import { Component } from "@angular/core";
import { ModalController, Events } from "@ionic/angular";

@Component({
  selector: "introduction",
  templateUrl: "introduction.html",
  styleUrls: ["introduction.scss"]
})
export class IntroductionComponent {
  showIntro: boolean;
  constructor(public modalCtrl: ModalController, public events: Events) {}

  startNew() {
    let modal = this.modalCtrl.create(
      "SavedInfoPage",
      { view: "save" },
      { cssClass: "full-screen" }
    );
    modal.onDidDismiss(data => {
      if (data) {
        this.events.publish("project:loaded", data);
      }
    });
    modal.present();
  }
  load() {
    let modal = this.modalCtrl.create(
      "SavedInfoPage",
      { view: "load" },
      { cssClass: "full-screen" }
    );
    modal.onDidDismiss(data => {
      console.log("survey loaded", data);
      if (data) {
        this.events.publish("project:loaded", data);
      }
    });
    modal.present();
  }
  showIntroText() {
    let modal = this.modalCtrl.create("IntroductionTextPage", null, {
      cssClass: "full-screen"
    });
    modal.present();
  }
}
