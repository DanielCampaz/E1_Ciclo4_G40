import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContPerfilComponent } from './cont-perfil.component';

describe('ContPerfilComponent', () => {
  let component: ContPerfilComponent;
  let fixture: ComponentFixture<ContPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
