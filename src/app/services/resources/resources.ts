import { Injectable } from "@angular/core";
import { ALL_RESOURCES } from "src/app/data";

@Injectable({
  providedIn: "root"
})
export class ResourcesProvider {
  initComplete = false;
  allResourcesByStage = ALL_RESOURCES;

  constructor() {}

  getStageResources(stage: number) {
    console.log(`getting stage-${stage}Resources`);
    return this.allResourcesByStage[`stage${stage}Resources`];
  }
}
