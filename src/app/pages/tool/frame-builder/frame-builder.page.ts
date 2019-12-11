import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { select } from "@angular-redux/store";
import { NavParams, ModalController } from "@ionic/angular";
import { DataProvider } from "src/app/services/data/data";
import { FormProvider } from "src/app/services/form/form";

@Component({
  selector: "app-frame-builder",
  templateUrl: "./frame-builder.page.html",
  styleUrls: ["./frame-builder.page.scss"]
})
export class FrameBuilderPage implements OnInit {
  stageFormGroup: FormGroup;
  stageName: string;
  parentStageName: string;
  stageRepeatIndex: number;
  reportingLevels: any;
  @select(["activeProject", "values", "reportingLevels"])
  reportingLevels$: Observable<any>;

  constructor(
    private dataPrvdr: DataProvider,
    private formPrvdr: FormProvider,
    private modalCtrl: ModalController
  ) {
    alert("todo");
    // this.stageRepeatIndex = navParams.data.stageIndex;
    // this.stageName = navParams.data.stageFormGroup.name;
    // this.parentStageName = this.getParentStageName(navParams.data.stageIndex);
    console.log("parent stage name:", this.parentStageName);
    this._buildFormGroup();
  }

  ngOnInit() {
    this._preloadValues();
    this._addValueSubscribers();
  }

  // quick method to get name of parent stage for use in intro text
  getParentStageName(stageIndex: number) {
    console.log("get parent stage name", stageIndex);
    if (stageIndex && stageIndex > 0) {
      try {
        console.log("stages", this.formPrvdr.formGroup.value.samplingStages);
        return this.formPrvdr.formGroup.value.samplingStages[stageIndex - 1]
          .name;
      } catch (error) {
        console.error(error);
      }
    }
  }

  _buildFormGroup() {
    // generate a new formgroup which will be used to hold information saved in these questions

    let builderQuestions: any = this.formPrvdr.allQuestions;
    builderQuestions = builderQuestions.filter(q => {
      return q.repeatGroup == "q5.3";
    });
    let builderForm = this.formPrvdr._generateQuestionForm(builderQuestions);
    this.stageFormGroup = builderForm;
  }

  _preloadValues() {
    let currentValue = this.formPrvdr.formGroup.value.samplingStages[
      this.stageRepeatIndex
    ];
    Object.keys(currentValue).forEach(k => {
      // build additional controls for thing like name and built status which aren't included in questions
      if (!this.stageFormGroup.controls[k]) {
        this.stageFormGroup.addControl(k, new FormControl());
      }
    });
    this.stageFormGroup.patchValue(currentValue);
  }

  _addValueSubscribers() {
    // listen to changes on this formgroup and reflect on master
    this.stageFormGroup.valueChanges.subscribe(v => {
      if (v) {
        this._patchValue(v);
      }
    });
    this.reportingLevels$.subscribe(levels => (this.reportingLevels = levels));
  }

  _patchValue(update: any) {
    // update value on master group
    let currentValue = this.formPrvdr.formGroup.value.samplingStages;
    Object.keys(update).forEach(k => {
      currentValue[this.stageRepeatIndex][k] = update[k];
    });
    this.formPrvdr.formGroup.patchValue({ samplingStages: currentValue });
  }

  dismiss() {
    if (this.stageFormGroup.value["q5.3.1"]) {
      this._patchValue({ _built: true });
    }
    this.dataPrvdr.backgroundSave();
    this.modalCtrl.dismiss();
  }
}
