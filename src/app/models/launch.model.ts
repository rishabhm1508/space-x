import { LaunchFailureDetailsModel } from "./launch-failure-details.model";
import { LaunchSiteModel } from "./launch-site.model";
import { LinksModel } from "./links.model";
import { RocketModel } from "./rocket.model";
import { TelemetryModel } from "./telemetry.model";
import { TimeLineModel } from "./timeline.model";

export class LaunchModel {
  crew: any;
  details: string;
  flight_number: number;
  is_tentative: boolean;
  launch_date_local: Date;
  launch_date_unix: number;
  launch_date_utc: Date;
  launch_failure_details: LaunchFailureDetailsModel;
  launch_site: LaunchSiteModel;
  launch_success: boolean;
  launch_window: number;
  launch_year: string;
  links: LinksModel;
  mission_id: any[];
  mission_name: string;
  rocket: RocketModel;
  ships: any[];
  static_fire_date_unix: number;
  static_fire_date_utc: Date;
  tbd: boolean;
  telemetry: TelemetryModel;
  tentative_max_precision: string;
  timeline: TimeLineModel;
  upcoming: boolean;
}
