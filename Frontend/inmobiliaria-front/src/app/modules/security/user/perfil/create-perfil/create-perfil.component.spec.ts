import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePerfilComponent } from './create-perfil.component';

describe('CreatePerfilComponent', () => {
  let component: CreatePerfilComponent;
  let fixture: ComponentFixture<CreatePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
