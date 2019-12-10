import resources from "../../../data/resources.json";
import glossary from "../../../data/glossary.json";
import { IGlossaryTerm, IStageResources } from "../models/models.js";

interface exportedData {
  __collections__: any;
}
interface allGlossaryObj {
  [slug: string]: IGlossaryTerm & exportedData;
}
interface allResourceObj {
  [stageNResources: string]: IStageResources & exportedData;
}
export const ALL_RESOURCES = resources;
export const ALL_GLOSSARY: allGlossaryObj = glossary;
