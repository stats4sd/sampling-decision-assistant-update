import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "help-icon",
  template: `
    <div class="help-container">
      <ion-button
        fill="clear"
        style="color:rgba(0,0,0,0.9); margin:0"
        (click)="helpClicked()"
      >
        <span>{{ text }}</span>
        <ion-icon
          slot="icon-only"
          style="padding:0 8px"
          ios="ios-help-circle-outline"
          md="ios-help-circle-outline"
        ></ion-icon>
      </ion-button>
    </div>
  `
})
export class HelpIconComponent {
  @Input("relevant")
  relevant: string;

  // optional additional text to display next to button
  @Input("text")
  text: string;

  constructor(private router: Router) {}

  helpClicked() {
    this.router.navigate(["resources"], {
      queryParams: { relevant: this.relevant }
    });
  }
}
