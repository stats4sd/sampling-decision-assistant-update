import { Component, OnInit } from "@angular/core";
import { IGlossaryTerm } from "src/app/models/models";

@Component({
  selector: "app-glossary",
  templateUrl: "./glossary.page.html",
  template: `
    <ion-header>
      <ion-navbar color="primary">
        <ion-title>Glossary</ion-title>
        <ion-buttons end *ngIf="modalMode">
          <button ion-button icon-right (click)="dismiss()">
            Close
            <ion-icon name="close"></ion-icon>
          </button>
        </ion-buttons>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
      <glossary-list
        displayMode="page"
        [activeTerm]="activeTerm"
      ></glossary-list>
    </ion-content>
  `
})
export class GlossaryPage {
  activeTerm: IGlossaryTerm;
  constructor(p) {
    // if (navParams.data.slug) {
    //   this.activeTerm = navParams.data;
    // }
  }
}
