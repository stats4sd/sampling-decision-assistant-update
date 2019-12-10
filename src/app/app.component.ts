import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SentryErrorHandler } from "./services/error-handler/error-handler";
import { ProjectActions } from "./actions/actions";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public errorHandler: SentryErrorHandler,
    private projectActions: ProjectActions
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.projectActions.setMeta({ _platforms: this.platform.platforms() });
    });
  }
}
