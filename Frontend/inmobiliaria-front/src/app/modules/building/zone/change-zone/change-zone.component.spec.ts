import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeZoneComponent } from './change-zone.component';

describe('ChangeZoneComponent', () => {
  let component: ChangeZoneComponent;
  let fixture: ComponentFixture<ChangeZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
