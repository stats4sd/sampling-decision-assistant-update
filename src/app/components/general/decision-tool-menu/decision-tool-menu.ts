import { Component } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { DataProvider } from "src/app/services/data/data";

@Component({
  selector: "decision-tool-menu",
  templateUrl: "decision-tool-menu.html",
  styleUrls: ["decision-tool-menu.scss"]
})
export class DecisionToolMenuComponent {
  constructor(
    private alertCtrl: AlertController,
    private dataPrvdr: DataProvider,
    private modalCtrl: ModalController
  ) {}
  dismiss(param) {
    this.modalCtrl.dismiss(param);
  }

  async saveAs() {
    const alert = await this.alertCtrl.create({
      header: "Save project as",
      inputs: [
        {
          name: "title",
          placeholder: "Title"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {}
        },
        {
          text: "Save",
          handler: data => {
            if (data.title) {
              this.dataPrvdr.saveProjectAs(data.title);
            }
            this.modalCtrl.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }
}
