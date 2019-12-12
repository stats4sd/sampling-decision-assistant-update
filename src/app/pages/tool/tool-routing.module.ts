import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ToolPage } from "./tool.page";

const routes: Routes = [
  {
    path: "",
    component: ToolPage
  },
  {
    path: "stage",
    redirectTo: "stage/1"
  },
  {
    path: "stage/:stageNumber",
    loadChildren: () =>
      import("./stage/stage.module").then(m => m.StagePageModule)
  },
  {
    path: "frame-builder",
    loadChildren: () =>
      import("./frame-builder/frame-builder.module").then(
        m => m.FrameBuilderPageModule
      )
  },
  {
    path: "review",
    loadChildren: () =>
      import("./review/review.module").then(m => m.ReviewPageModule)
  },
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
