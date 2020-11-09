import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, Subject } from "rxjs";
import { LaunchModel } from "../models/launch.model";
import { FilterCriteriaModel } from "../models/filter-criteria.model";

@Injectable({
  providedIn: "root",
})
export class SpaceXService {
  filterCriteria$ = new Subject<FilterCriteriaModel>();
  showSpinner$ = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getLaunches(filterCriteria: FilterCriteriaModel): Observable<LaunchModel[]> {
    let url = environment.spaceXServiceRoot;
    if (filterCriteria && filterCriteria.launch !== "") {
      url = `${url}&launch_success=${filterCriteria.launch}`;
    }
    if (filterCriteria && filterCriteria.land !== "") {
      url = `${url}&land_success=${filterCriteria.land}`;
    }
    if (filterCriteria && filterCriteria.year !== "") {
      url = `${url}&launch_year=${filterCriteria.year}`;
    }
    return this.http.get<LaunchModel[]>(url);
  }

  setFilterCriteria(filterCriteria: FilterCriteriaModel): void {
    this.filterCriteria$.next(filterCriteria);
  }

  getFilterCriteria(): Observable<FilterCriteriaModel> {
    return this.filterCriteria$.asObservable();
  }

  setSpinner(isShow: boolean): void {
    this.showSpinner$.next(isShow);
  }

  getSpinner(): Observable<boolean> {
    return this.showSpinner$.asObservable();
  }
}
