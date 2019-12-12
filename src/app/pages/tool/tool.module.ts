import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ToolPageRoutingModule } from "./tool-routing.module";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";
import { ToolPage } from "./tool.page";
import { ModalComponentsModule } from "src/app/components/modals/modalComponents.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ToolPageRoutingModule,
    GeneralComponentsModule,
    ModalComponentsModule
  ],
  declarations: [ToolPage]
})
export class ToolPageModule {}
