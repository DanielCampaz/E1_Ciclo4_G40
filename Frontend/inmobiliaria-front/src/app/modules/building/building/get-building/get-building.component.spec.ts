import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBuildingComponent } from './get-building.component';

describe('GetBuildingComponent', () => {
  let component: GetBuildingComponent;
  let fixture: ComponentFixture<GetBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
