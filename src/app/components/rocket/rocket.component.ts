import { Component, Input, OnInit } from "@angular/core";
import { LaunchModel } from "src/app/models/launch.model";

@Component({
  selector: "app-rocket",
  templateUrl: "./rocket.component.html",
  styleUrls: ["./rocket.component.scss"],
})
export class RocketComponent implements OnInit {
  @Input() launch: LaunchModel;

  constructor() {}

  ngOnInit() {}

  getLandStatus(launch: LaunchModel): string {
    let status: string;
    if (
      launch &&
      launch.rocket.first_stage &&
      launch.rocket.first_stage.cores &&
      launch.rocket.first_stage.cores.length > 0
    ) {
      launch.rocket.first_stage.cores.forEach((core) => {
        core.land_success === null
          ? (status = "Not Known")
          : core.land_success
          ? (status = "true")
          : (status = "false");
      });
    }
    return status;
  }
}
