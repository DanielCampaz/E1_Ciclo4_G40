import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImagesComponent } from './create-images.component';

describe('CreateImagesComponent', () => {
  let component: CreateImagesComponent;
  let fixture: ComponentFixture<CreateImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
