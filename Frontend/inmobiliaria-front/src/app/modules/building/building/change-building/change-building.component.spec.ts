import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBuildingComponent } from './change-building.component';

describe('ChangeBuildingComponent', () => {
  let component: ChangeBuildingComponent;
  let fixture: ComponentFixture<ChangeBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
