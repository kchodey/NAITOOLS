import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfrComponent } from './wfr.component';

describe('WfrComponent', () => {
  let component: WfrComponent;
  let fixture: ComponentFixture<WfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
