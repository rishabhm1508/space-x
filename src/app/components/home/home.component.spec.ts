import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { from, Observable, Subject, Subscription } from "rxjs";
import { SpinnerComponent } from 'src/app/core/spinner/spinner.component';
import { FilterCriteriaModel } from "src/app/models/filter-criteria.model";
import { LaunchModel } from "src/app/models/launch.model";
import { SpaceXService } from "src/app/services/space-x.service";
import { LaunchFilterComponent } from "../launch-filter/launch-filter.component";
import { RocketComponent } from "../rocket/rocket.component";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let fixture: ComponentFixture<HomeComponent>;
  let service = new SpaceXService(null);
  let component = new HomeComponent(service);

  class SpaceXServiceStub {
    spinSub$ = new Subject<boolean>();
    filterCriteria$ = new Subject<FilterCriteriaModel>();
    getLaunches(
      filterCriteria: FilterCriteriaModel
    ): Observable<LaunchModel[]> {
      let launches: LaunchModel[];
      return from([launches]);
    }
    getFilterCriteria(): Observable<FilterCriteriaModel> {
      let filter = new Observable<FilterCriteriaModel>();
      return filter;
    }
    getSpinner(): Observable<boolean> {
      let spinner = new Observable<boolean>();
      return spinner;
    }
    setSpinner(spin: boolean): void {
      this.spinSub$.next(spin);
    }
    setFilterCriteria(filterCriteria: FilterCriteriaModel): void {
      this.filterCriteria$.next(filterCriteria);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, LaunchFilterComponent, RocketComponent,SpinnerComponent],
      providers: [{ provide: SpaceXService, useClass: SpaceXServiceStub }],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display main header", () => {
    let de = fixture.debugElement.query(By.css(".header"));
    let el = de.nativeElement;
    expect(el.innerText).toContain("SpaceX Launch Programs");
  });

  it("should call get launch service", () => {
    const SpaceXServiceStub: SpaceXService = fixture.debugElement.injector.get(
      SpaceXService
    );
    let spy = spyOn(SpaceXServiceStub, "getLaunches").and.callFake((t) => {
      return from([]);
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it("launch service return array", () => {
    component.launches = [];
    const SpaceXServiceStub: SpaceXService = fixture.debugElement.injector.get(
      SpaceXService
    );
    spyOn(SpaceXServiceStub, "getLaunches").and.callFake((t) => {
      return from([[]]);
    });
    component.ngOnInit();
    expect(component.launches.length).toBe(0);
  });
});
