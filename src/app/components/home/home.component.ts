import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FilterCriteriaModel } from "src/app/models/filter-criteria.model";
import { LaunchModel } from "src/app/models/launch.model";
import { SpaceXService } from "src/app/services/space-x.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  launches: LaunchModel[] = [];
  filterSubscription: Subscription;
  constructor(private spaceXService: SpaceXService) {}

  ngOnInit() {
    this.getLaunches(null);
    this.filterSubscription = this.spaceXService
      .getFilterCriteria()
      .subscribe((filterCriteria) => {
        this.getLaunches(filterCriteria);
      });
  }

  getLaunches(filterCriteria: FilterCriteriaModel): void {
    this.spaceXService.setSpinner(true);
    this.spaceXService.getLaunches(filterCriteria).subscribe((launches) => {
      this.launches = launches;
      this.spaceXService.setSpinner(false);
    });
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }
}
