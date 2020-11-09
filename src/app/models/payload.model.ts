import { OrbitParamsModel } from "./orbit-params.model";

export class PayLoadModel {
  customers: string[];
  manufacturer: string;
  nationality: string;
  norad_id: any[];
  orbit: string;
  orbit_params: OrbitParamsModel;
  payload_id: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  payload_type: string;
  reused: boolean;
}
