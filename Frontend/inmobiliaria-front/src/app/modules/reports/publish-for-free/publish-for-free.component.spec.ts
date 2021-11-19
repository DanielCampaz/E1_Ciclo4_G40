import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishForFreeComponent } from './publish-for-free.component';

describe('PublishForFreeComponent', () => {
  let component: PublishForFreeComponent;
  let fixture: ComponentFixture<PublishForFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishForFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishForFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
