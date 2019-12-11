import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { TreeDiagramComponent } from "./tree-diagram/tree-diagram";
import { TreeDiagramKeyComponent } from "./tree-diagram/tree-diagram-key/tree-diagram-key";
import { TreeNodeInfoComponent } from "./tree-diagram/tree-node-info/tree-node-info";
import { TreeNodeAllocationComponent } from "./tree-diagram/tree-node-allocation/tree-node-allocation";
import { TreeTableComponent } from "./tree-diagram/tree-table/tree-table";
import { SampleSizeCalculatorComponent } from "./sample-size-calculator/sample-size-calculator";
import { GeneralComponentsModule } from "../general/generalComponents.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TreeDiagramComponent,
    TreeDiagramKeyComponent,
    TreeNodeInfoComponent,
    TreeNodeAllocationComponent,
    TreeTableComponent,
    SampleSizeCalculatorComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    GeneralComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TreeDiagramComponent,
    TreeDiagramKeyComponent,
    TreeNodeInfoComponent,
    TreeNodeAllocationComponent,
    TreeTableComponent,
    SampleSizeCalculatorComponent
  ]
})
export class DataVisComponentsModule {}
