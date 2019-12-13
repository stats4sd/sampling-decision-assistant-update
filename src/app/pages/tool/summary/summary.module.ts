import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SummaryPageRoutingModule } from "./summary-routing.module";

import { SummaryPage } from "./summary.page";
import { PageComponentsModule } from "src/app/components/page/pageComponentsModule";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageComponentsModule,
    SummaryPageRoutingModule
  ],
  declarations: [SummaryPage]
})
export class SummaryPageModule {}
