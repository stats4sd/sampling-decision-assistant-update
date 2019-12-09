import { Component, Input } from "@angular/core";
import { GlossaryListComponent } from "../glossary-list";
import { IGlossaryTerm } from "../../../../models/models";

@Component({
  selector: "glossary-detail",
  templateUrl: "glossary-detail.html",
  styleUrls: ["glossary-detail.scss"]
})
export class GlossaryDetailComponent extends GlossaryListComponent {
  @Input()
  set term(term: IGlossaryTerm) {
    if (term && term.term) {
      this._term = term;
    }
  }
  _term: any;

  _renderHtml(definition) {
    if (definition == "") {
      definition = "term definition to go here";
    }
    let content = document.getElementById("definition");
    content.innerHTML = definition;
    let links = Array.prototype.slice.call(content.querySelectorAll("a"));
    for (let link of links) {
      link.onclick = function(e) {
        this._linkClick(link.href, link.text, e);
      }.bind(this);
    }
  }

  _linkClick(href) {
    // if(href.indexOf('#/glossary/')>-1){
    //   // internal links
    //   let arr = href.split('/')
    //   this.activeTerm=this._getTerm(arr[arr.length-1])
    // }
  }
}
