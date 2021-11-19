import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteImagesComponent } from './delete-images.component';

describe('DeleteImagesComponent', () => {
  let component: DeleteImagesComponent;
  let fixture: ComponentFixture<DeleteImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
