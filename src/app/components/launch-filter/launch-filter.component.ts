import { Component, OnInit } from "@angular/core";
import { FilterCriteriaModel } from "src/app/models/filter-criteria.model";
import { SpaceXService } from "src/app/services/space-x.service";
import { YEARS } from "src/app/shared/space-x.constant";

@Component({
  selector: "app-launch-filter",
  templateUrl: "./launch-filter.component.html",
  styleUrls: ["./launch-filter.component.scss"],
})
export class LaunchFilterComponent implements OnInit {
  years = YEARS;
  filterBtns = true;
  filterCriteriaModel: FilterCriteriaModel;

  constructor(private spaceXService: SpaceXService) {}

  ngOnInit() {
    this.filterCriteriaModel = {
      launch: "",
      land: "",
      year: "",
    };
  }

  filterChanged(eventValue: string, filterType: string): void {
    filterType === "year"
      ? (this.filterCriteriaModel.year = eventValue)
      : filterType === "land"
      ? (this.filterCriteriaModel.land = eventValue)
      : (this.filterCriteriaModel.launch = eventValue);

    this.spaceXService.setFilterCriteria(this.filterCriteriaModel);
  }

  resetFilter(): void {
    this.filterBtns = false;
    this.filterCriteriaModel.year = "";
    this.filterCriteriaModel.land = "";
    this.filterCriteriaModel.launch = "";
    this.spaceXService.setFilterCriteria(this.filterCriteriaModel);
    setTimeout(() => {
      this.filterBtns = true;
    }, 0);
  }
}
