import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfrsetemailComponent } from './wfrsetemail.component';

describe('WfrsetemailComponent', () => {
  let component: WfrsetemailComponent;
  let fixture: ComponentFixture<WfrsetemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfrsetemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfrsetemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
