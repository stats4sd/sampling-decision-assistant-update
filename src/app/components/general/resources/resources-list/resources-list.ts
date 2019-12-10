import { Component, Input } from "@angular/core";
// dev
import { IResourceQuestion } from "../../../../models/models";
import { ALL_RESOURCES } from "src/app/data";

@Component({
  selector: "resources-list",
  templateUrl: "resources-list.html",
  styleUrls: ["resources-list.scss"]
})
export class ResourcesListComponent {
  @Input()
  set stage(stage: number) {
    this.setResources(this.allResources[stage]);
    this._stage = stage;
  }
  @Input()
  relevant: string;
  _stage: number;
  allResources = ALL_RESOURCES;
  questions: IResourceQuestion[] = [];
  relevantQuestions: IResourceQuestion[];

  constructor() {
    this.allResources = ALL_RESOURCES;
    this.setResources(this.allResources[this._stage]);
  }

  // extract questions from stage resources, convert to array and subset to relevant/non if relevant control specified
  setResources(stageResources: any) {
    if (stageResources) {
      let questions = [];
      Object.keys(stageResources.questions).forEach(k => {
        questions.push(stageResources.questions[k]);
      });
      this.questions = this._sortQuestions(questions);
      this.setRelevantQuestions(questions);
    }
  }
  // resources are populated Q1, Q2 etc. need to add better sort so that Q10 does not follow Q1
  _sortQuestions(questions: IResourceQuestion[]) {
    questions = questions.sort((a, b) => {
      const indexA: number = Number(a._key.substring(1));
      const indexB: number = Number(b._key.substring(1));
      return indexA - indexB;
    });
    return questions;
  }
  // if relevant question specified push those matching to a new array and remove from full questions list
  setRelevantQuestions(questions: IResourceQuestion[]) {
    if (this.relevant) {
      this.relevantQuestions = [];
      this.questions = questions.filter(q => {
        if (
          q.relevant &&
          this.relevant &&
          q.relevant.indexOf(this.relevant) > -1
        ) {
          this.relevantQuestions.push(q);
          return false;
        } else {
          return true;
        }
      });
    }
  }
}
