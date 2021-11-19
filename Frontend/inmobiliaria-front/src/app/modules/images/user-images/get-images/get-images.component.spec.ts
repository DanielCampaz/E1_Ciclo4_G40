import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetImagesComponent } from './get-images.component';

describe('GetImagesComponent', () => {
  let component: GetImagesComponent;
  let fixture: ComponentFixture<GetImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
