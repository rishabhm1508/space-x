import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SpaceXService } from "src/app/services/space-x.service";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent implements OnInit {
  spinnerSubscription: Subscription;
  spinner = true;

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit() {
    this.spinnerSubscription = this.spaceXService
      .getSpinner()
      .subscribe((isShow) => {
        this.spinner = isShow;
      });
  }

  ngOnDestroy() {
    this.spinnerSubscription.unsubscribe();
  }
}
