import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TutorialPageRoutingModule } from "./tutorial-routing.module";

import { TutorialPage } from "./tutorial.page";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule,
    GeneralComponentsModule
  ],
  declarations: [TutorialPage],
  entryComponents: []
})
export class TutorialPageModule {}
