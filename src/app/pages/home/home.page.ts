import { Component } from "@angular/core";
import { APP_VERSION } from "src/environments/version";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  sections: any = [];
  altSections: any = [];
  version = APP_VERSION;
  imageSrc = "assets/img/feature-image-1.jpg";

  constructor() {
    this.sections = [
      {
        name: "Use the Tool",
        page: "StepByStepPage",
        icon: "arrow-round-forward"
      },
      {
        name: "Tutorial and Examples",
        page: "TutorialPage"
      }
    ];

    this.altSections = [
      { name: "Glossary of technical terms", page: "GlossaryPage" }
    ];
    throw new Error("test error");
  }

  //
  goToSection(section) {
    if (section.class !== "disabled") {
      // this.navCtrl.push(section.page, section.params);
    }
  }

  showChangelog() {
    // this.navCtrl.push("ChangelogPage");
  }

  goToAdmin() {
    // this.navCtrl.push("AdminPage");
  }
}
