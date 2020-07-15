import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupaDetalheComponent } from './roupa-detalhe.component';

describe('RoupaDetalheComponent', () => {
  let component: RoupaDetalheComponent;
  let fixture: ComponentFixture<RoupaDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoupaDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
