import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePerfilComponent } from './change-perfil.component';

describe('ChangePerfilComponent', () => {
  let component: ChangePerfilComponent;
  let fixture: ComponentFixture<ChangePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
