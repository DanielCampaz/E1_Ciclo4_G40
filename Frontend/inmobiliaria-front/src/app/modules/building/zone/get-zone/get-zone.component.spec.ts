import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetZoneComponent } from './get-zone.component';

describe('GetZoneComponent', () => {
  let component: GetZoneComponent;
  let fixture: ComponentFixture<GetZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
