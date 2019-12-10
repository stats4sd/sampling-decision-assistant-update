import { Component, Input } from "@angular/core";
import { IGlossaryTerm } from "../../../models/models";
import { ALL_GLOSSARY } from "src/app/data";

@Component({
  selector: "glossary-list",
  templateUrl: "glossary-list.html",
  styleUrls: ["glossary-list.scss"]
})
export class GlossaryListComponent {
  allGlossaryTerms: IGlossaryTerm[] = [];
  allGlossaryJson: any;
  @Input("activeTerm")
  activeTerm: IGlossaryTerm;

  constructor() {}

  // on init get glossary from provider and convert to array for display
  ngOnInit() {
    const terms = ALL_GLOSSARY;
    this.allGlossaryJson = terms;
    // convert json to array (would simply use object.values but not supported)
    this.allGlossaryTerms = Object.keys(terms).map(key => {
      return terms[key];
    });
  }

  setActiveTerm(term: IGlossaryTerm) {
    this.activeTerm = term;
  }

  _renderHtml(definition) {
    let content = document.getElementById("definition");
    content.innerHTML = this.activeTerm.definition;
    let links = Array.prototype.slice.call(content.querySelectorAll("a"));
    for (let link of links) {
      link.onclick = function(e) {
        this._linkClick(link.href, link.text, e);
      }.bind(this);
    }
  }
}
