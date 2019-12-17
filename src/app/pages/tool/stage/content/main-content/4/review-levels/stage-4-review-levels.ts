import { Component } from "@angular/core";
import { Stage4Component } from "../stage-4";
import { select } from "@angular-redux/store";
import { Observable, Subject } from "rxjs";
import { ReportingLevel } from "../../../../../../../models/models";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "stage-4-review-levels",
  templateUrl: "stage-4-review-levels.html",
  styleUrls: ["stage-4-review-levels.scss"]
})
export class Stage4_ReviewLevelsComponent extends Stage4Component {
  removeSubscriptions$ = new Subject();
  levelCombinations: any[] = [];
  reportingLevels: ReportingLevel[] = [];

  @select(["view", "params", "stagePart"])
  readonly slideSection$: Observable<string>;

  ngOnInit() {
    // bind to slide section to call init every time slide focused. use slice to avoid additional unwanted bindings
    this.slideSection$
      .pipe(takeUntil(this.removeSubscriptions$))
      .subscribe(section => {
        if (
          section == "2" &&
          this.form.value &&
          this.form.value.reportingLevels
        ) {
          // *** slightly untidy code due to data vis provider refactor, could be tidies
          const disaggregationMeta = this.dataVisPrvdr.getReportingLevels();
          this.levelCombinations = disaggregationMeta.levelCombinations;
          this.reportingLevels = disaggregationMeta.reportingLevels;
        }
      });
  }
  ngOnDestroy(): void {
    this.removeSubscriptions$.next();
    this.removeSubscriptions$.complete();
  }
}
