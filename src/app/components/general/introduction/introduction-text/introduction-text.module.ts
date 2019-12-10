import { NgModule } from "@angular/core";
import { IntroductionTextPage } from "./introduction-text";
import { GeneralComponentsModule } from "../../generalComponents.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [IntroductionTextPage],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: IntroductionTextPage
      }
    ]),
    GeneralComponentsModule
  ]
})
export class IntroductionTextPageModule {}
