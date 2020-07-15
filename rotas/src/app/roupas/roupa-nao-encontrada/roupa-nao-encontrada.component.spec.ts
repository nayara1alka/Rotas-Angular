import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupaNaoEncontradaComponent } from './roupa-nao-encontrada.component';

describe('RoupaNaoEncontradaComponent', () => {
  let component: RoupaNaoEncontradaComponent;
  let fixture: ComponentFixture<RoupaNaoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoupaNaoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
