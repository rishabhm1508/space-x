import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { SpaceXService } from "./space-x.service";

describe("SpaceXService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  it("should be created", () => {
    const service: SpaceXService = TestBed.get(SpaceXService);
    expect(service).toBeTruthy();
  });
});
