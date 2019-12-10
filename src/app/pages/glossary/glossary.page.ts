import { Component, OnInit } from "@angular/core";
import { IGlossaryTerm } from "src/app/models/models";

@Component({
  selector: "app-glossary",
  templateUrl: "./glossary.page.html",
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Glossary</ion-title>
        <ion-buttons slot="primary" *ngIf="modalMode">
          <button ion-buttonicon-right (click)="dismiss()">
            Close
            <ion-icon name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
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
