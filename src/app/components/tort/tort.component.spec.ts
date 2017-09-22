import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TortComponent } from './tort.component';

describe('TortComponent', () => {
  let component: TortComponent;
  let fixture: ComponentFixture<TortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
