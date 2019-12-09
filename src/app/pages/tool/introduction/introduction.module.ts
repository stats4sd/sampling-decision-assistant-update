import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { IntroductionPageRoutingModule } from "./introduction-routing.module";

import { IntroductionPage } from "./introduction.page";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionPageRoutingModule,
    GeneralComponentsModule
  ],
  declarations: [IntroductionPage]
})
export class IntroductionPageModule {}
