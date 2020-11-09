import { FairingsModel } from "./fairings.model";
import { FirstStageModel } from "./first-stage.model";
import { SecondStageModel } from "./second-stage.model";

export class RocketModel {
  fairings: FairingsModel;
  first_stage: FirstStageModel;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  second_stage: SecondStageModel;
}
