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

  async startNew() {
    const modal = await this.modalCtrl.create({
      component: "SavedInfoPage",
      componentProps: { view: "save" },
      cssClass: "full-screen"
    });
    await modal.present();
    const dismiss = await modal.onDidDismiss();
    const data = dismiss.data;
    if (data) {
      this.events.publish("project:loaded", data);
    }
  }
  async load() {
    const modal = await this.modalCtrl.create({
      component: "SavedInfoPage",
      componentProps: { view: "load" },
      cssClass: "full-screen"
    });
    await modal.present();
    const dismiss = await modal.onDidDismiss();
    const data = dismiss.data;
    if (data) {
      this.events.publish("project:loaded", data);
    }
  }
  async showIntroText() {
    let modal = await this.modalCtrl.create({
      component: "IntroductionTextPage",
      cssClass: "full-screen"
    });
    await modal.present();
  }
}
