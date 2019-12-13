import resources from "../../../data/resources.json";
import glossary from "../../../data/glossary.json";
import questions from "../../../data/questions.json";
import {
  IGlossaryTerm,
  IStageResources,
  Project,
  IQuestionMeta
} from "../models/models.js";
import examples from "../../../data/examples/index";

interface exportedData {
  __collections__: any;
}
interface allGlossaryObj {
  [slug: string]: IGlossaryTerm & exportedData;
}
interface allResourceObj {
  [stageNResources: string]: IStageResources & exportedData;
}
export const ALL_RESOURCES: allResourceObj = resources;
export const ALL_GLOSSARY: allGlossaryObj = glossary;
export const ALL_QUESTIONS: IQuestionMeta[] = questions as IQuestionMeta[];
export const ALL_EXAMPLES: Project[] = examples as Project[];

const test: Project = {
  title: "Baseline Assessment of the Children under-5 Wellbeing Programme",
  created: 1539264323319,
  edited: 1541024298210,
  dbVersion: 3,
  values: {
    "q1.1":
      "Estimating the value of one or a set of characteristics of a population",
    "q1.2": "Representative",
    "q1.3":
      "The main purpose of the baseline assessment is to contribute to evidence-based and equity-focused social protection programming ensuring better coverage and impact of the programme for children.        \n \nThe objectives of baseline assessment are to:  \n \nÃÂ¢ÃÂÃÂ¢\tGather data for measuring the impact of the social security allowances on reducing poverty, and supporting vulnerable households and children.   \nÃÂ¢ÃÂÃÂ¢\tAssess the situation of children and extent of the programmeÃÂ¢ÃÂÃÂs coverage and gaps in reaching different social security schemes in selected districts.  \n \nThe baseline data will be used to compare the situation of children and assess the performance of the programme through impact evaluation planned to be conducted in 2021.  \n",
    "q2.1.1": "Prevalence of stunting, height for age (% of children under 5)",
    "q2.1.2":
      "Proportion of elements in the population with the characteristics of the indicator",
    "q2.2.1": null,
    "q2.2.2": "0",
    "q2.2.3": null,
    "q2.2.4": null,
    "q2.3.1": "35.8",
    "q3.2":
      "20 programme districts, including those where the programme has started and those where the programme will start up to 2020 ",
    "q3.3":
      "children under 5 and their families, differentiated by whether they are refugee or non-refugee households",
    "q3.4":
      "districts where the programme started in 2016, 2017, 2018 and will continue in 2019",
    "q3.5":
      "Households located in 20 programme districts, including those where the programme has started and those where the programme will start up to 2020  during children under 5 and their families, differentiated by whether they are refugee or non-refugee households and districts where the programme started in 2016, 2017, 2018 and will continue in 2019",
    "q4.1": "Disaggregated estimates",
    reportingLevels: [
      {
        name: "refugee density",
        classifications: { total: "2", names: ["High", "Low"] },
        reportingRequired: false
      },
      {
        name: "Refugee status",
        classifications: {
          total: "2",
          names: ["Refugee", "Non-refugee"]
        },
        reportingRequired: true
      },
      {
        name: "Length of programme intervention",
        classifications: {
          total: "4",
          names: [
            "Started 2016",
            "Started 2017",
            "Starting 2018",
            "Starting 2019"
          ]
        },
        reportingRequired: true
      }
    ],
    "q4.3": null,
    "q5.1": "No",
    "q5.1.1": null,
    "q5.2": "",
    "q5.3": null,
    "q3.1": "Households",
    samplingStages: [
      {
        name: "District",
        "q5.3.1": "Yes",
        "q5.3.1.1": null,
        "q5.3.2": "Yes",
        "q5.3.2.1": null,
        "q5.3.3": "Sample",
        "q5.3.4.2": ["Length of programme intervention"],
        "q5.3.4.3": "Probability proportional to size",
        _built: true,
        _reportingLevels: [
          {
            name: "Length of programme intervention",
            classifications: {
              total: "4",
              names: [
                "Started 2016",
                "Started 2017",
                "Starting 2018",
                "Starting 2019"
              ]
            },
            reportingRequired: true
          }
        ],
        _stageStrata: [
          ["Started 2016"],
          ["Started 2017"],
          ["Starting 2018"],
          ["Starting 2019"]
        ],
        sampleSize: 3
      },
      {
        name: "Ward",
        "q5.3.1": "Yes",
        "q5.3.1.1": null,
        "q5.3.2": "No",
        "q5.3.2.1":
          "We have a list of wards, but we will need to work with UNHCR officers to try to allocate wards to high and low refugee density to increase our chances of finding refugee households.",
        "q5.3.3": "Sample",
        "q5.3.4.2": ["refugee density"],
        "q5.3.4.3": "Simple random sampling",
        _built: true,
        _reportingLevels: [
          {
            name: "refugee density",
            classifications: { total: "2", names: ["High", "Low"] },
            reportingRequired: false
          }
        ],
        _stageStrata: [["High"], ["Low"]],
        sampleSize: 4
      },
      {
        name: "EA",
        "q5.3.1": "No",
        "q5.3.1.1":
          "We need to visit the Office for National Statistics with the list of all wards selected for the sample to get a full list of EAs in each Ward. If possible we want to have estimates of the size of the population in each EA.",
        "q5.3.2": null,
        "q5.3.2.1": null,
        "q5.3.3": "Sample",
        "q5.3.4.2": "",
        "q5.3.4.3": "Simple random sampling",
        _built: true,
        sampleSize: 3
      },
      {
        name: "Households",
        "q5.3.1": "No",
        "q5.3.1.1":
          "In each EA, a list of all households will be built by the field team. While building the list, information will be recorded on whether each household has children under 5 and what their refugee status is. Only households with children under 5 will be included in the sampling frame. The refugee status will be used to draw a sample of households by status to comply with reporting requirements.",
        "q5.3.2": null,
        "q5.3.2.1": null,
        "q5.3.3": "Sample",
        "q5.3.4.2": ["Refugee status"],
        "q5.3.4.3": "Simple random sampling",
        _built: true,
        sampleSize: 5,
        _reportingLevels: [
          {
            name: "Refugee status",
            classifications: {
              total: "2",
              names: ["Refugee", "Non-refugee"]
            },
            reportingRequired: true
          }
        ],
        _stageStrata: [["Refugee"], ["Non-refugee"]]
      }
    ],
    _calculatorVars: {
      inputs: {
        moe: 10,
        conf: 0.95,
        rho: 0.25,
        nHH: 5,
        Population: 700000,
        stages: 4,
        type: "proportion",
        prop: 35.8
      },
      outputs: {
        raw: {
          SRSn: 88,
          SRSn_FPC: 89,
          DEFF1: 2,
          FinalstageN: 177,
          FinalstageN_FPC: 177,
          stage2N: 36,
          nHH: 5
        },
        rawArray: [
          "SRSn",
          "SRSn_FPC",
          "DEFF1",
          "FinalstageN",
          "FinalstageN_FPC",
          "stage2N",
          "nHH"
        ],
        formatted: [
          { var: "DEFF1", label: "Design Effect", value: 2 },
          {
            var: "stage2N",
            label: "Total EA per disaggregation",
            value: 36
          },
          {
            var: "nHH",
            label: "Total Households per disaggregation",
            value: 5
          },
          {
            var: "FinalstageN_FPC",
            label: "Total sample size per disaggregation",
            value: 177
          }
        ]
      },
      recommendations: {
        disaggregationMeta: {
          reportingLevels: [
            {
              name: "Refugee status",
              classifications: {
                total: "2",
                names: ["Refugee", "Non-refugee"]
              },
              reportingRequired: true
            },
            {
              name: "Length of programme intervention",
              classifications: {
                total: "4",
                names: [
                  "Started 2016",
                  "Started 2017",
                  "Starting 2018",
                  "Starting 2019"
                ]
              },
              reportingRequired: true
            }
          ],
          levelCombinations: [
            ["Refugee", "Started 2016"],
            ["Refugee", "Started 2017"],
            ["Refugee", "Starting 2018"],
            ["Refugee", "Starting 2019"],
            ["Non-refugee", "Started 2016"],
            ["Non-refugee", "Started 2017"],
            ["Non-refugee", "Starting 2018"],
            ["Non-refugee", "Starting 2019"]
          ]
        },
        countFinalStage: 5,
        countPenultimateStage: 36,
        requiredPerAggregation: 177,
        totalSampleSize: 1416
      },
      exportLabels: {
        assumptions: [
          { label: "Desired Confidence Level", var: "conf", value: 0.95 },
          { label: "Clustering Level", var: "rho", value: 0.25 },
          {
            label: "Expected Population Size",
            var: "Population",
            value: 700000
          },
          {
            label: "Margin of Error (+/- percentage points)",
            var: "moe",
            min: 0.01,
            max: 25,
            step: 1,
            value: 10
          }
        ],
        calculated: [
          { label: "Type of Variable", var: "type", value: "proportion" },
          { label: "Number of Sampling Stages", var: "stages", value: 4 },
          { label: "Expected %", var: "prop", value: 35.8 }
        ],
        results: [
          { var: "DEFF1", label: "Design Effect", value: 2 },
          {
            var: "stage2N",
            label: "Total EA per disaggregation",
            value: 36
          },
          {
            var: "nHH",
            label: "Total Households per disaggregation",
            value: 5
          },
          {
            var: "FinalstageN_FPC",
            label: "Total sample size per disaggregation",
            value: 177
          }
        ]
      }
    },
    _allocation: {
      aggregationSampleSize: 180,
      totalSampleSize: 1440,
      recommendedAggregationSize: 177,
      recommendedTotalSampleSize: 1416
    }
  },
  stagesComplete: [null, true, true, true, true, true, true]
};
