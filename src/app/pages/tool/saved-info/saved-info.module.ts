import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SavedInfoPageRoutingModule } from "./saved-info-routing.module";
import { FileDropModule } from "ngx-file-drop";
import { SavedInfoPage } from "./saved-info.page";
import { GeneralComponentsModule } from "src/app/components/general/generalComponents.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedInfoPageRoutingModule,
    FileDropModule,
    GeneralComponentsModule
  ],
  declarations: [SavedInfoPage]
})
export class SavedInfoPageModule {}
