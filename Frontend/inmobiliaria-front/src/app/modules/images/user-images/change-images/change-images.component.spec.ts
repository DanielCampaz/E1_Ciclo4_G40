import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeImagesComponent } from './change-images.component';

describe('ChangeImagesComponent', () => {
  let component: ChangeImagesComponent;
  let fixture: ComponentFixture<ChangeImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
