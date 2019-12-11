import { Component, OnInit } from "@angular/core";
import { IStageMeta, IStageResources } from "src/app/models/models";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.page.html",
  styleUrls: ["./resources.page.scss"]
})
export class ResourcesPage implements OnInit {
  stage: IStageMeta;
  resources: IStageResources;
  relevant: string;
  constructor() {
    alert("todo");
    // this.stage = navParams.data.stage;
    // this.resources = navParams.data.resources;
    // this.relevant = navParams.data.relevant;
  }

  // whilst in modal clicking help icon will still push the resources page which will by default
  // appear behind the current view; need to change this display to 'none' to view and bring back when closed
  // can use init/destroy to check for such modals and hide appropriately
  ngOnInit() {
    const modalEl = document.querySelector("ion-modal");
    if (modalEl) {
      modalEl.classList.add("no-display");
    }
  }

  ngOnDestroy() {
    const modalEl = document.querySelector("ion-modal");
    if (modalEl) {
      try {
        modalEl.classList.remove("no-display");
      } catch (error) {}
    }
  }

  /*
    Currently this just passes resources from navParams into resource list
    In future may want to link to resources provider to also alternate between different resource
    types and sections
  */
}
