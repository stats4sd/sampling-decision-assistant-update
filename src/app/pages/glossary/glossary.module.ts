import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { GlossaryPageRoutingModule } from "./glossary-routing.module";

import { GlossaryPage } from "./glossary.page";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlossaryPageRoutingModule,
    GeneralComponentsModule
  ],
  declarations: [GlossaryPage]
})
export class GlossaryPageModule {}
