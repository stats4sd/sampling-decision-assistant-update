import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IntroductionPage } from "./introduction/introduction.page";
import { StepByStepPage } from "./step-by-step/step-by-step.page";

const routes: Routes = [
  {
    path: "",
    component: StepByStepPage
  },
  {
    path: "frame-builder",
    loadChildren: () =>
      import("./frame-builder/frame-builder.module").then(
        m => m.FrameBuilderPageModule
      )
  },
  {
    path: "introduction",
    loadChildren: () =>
      import("./introduction/introduction.module").then(
        m => m.IntroductionPageModule
      )
  },
  {
    path: "review",
    loadChildren: () =>
      import("./review/review.module").then(m => m.ReviewPageModule)
  },
  {
    path: "saved-info",
    loadChildren: () =>
      import("./saved-info/saved-info.module").then(m => m.SavedInfoPageModule)
  },
  // {
  //   path: "step-by-step",
  //   loadChildren: () =>
  //     import("./step-by-step/step-by-step.module").then(
  //       m => m.StepByStepPageModule
  //     )
  // },
  {
    path: "summary",
    loadChildren: () =>
      import("./summary/summary.module").then(m => m.SummaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolPageRoutingModule {}
