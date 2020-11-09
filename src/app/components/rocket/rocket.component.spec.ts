import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RocketComponent } from "./rocket.component";

describe("RocketComponent", () => {
  let component: RocketComponent;
  let fixture: ComponentFixture<RocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RocketComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
