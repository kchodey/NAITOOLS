import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfridsetupComponent } from './wfridsetup.component';

describe('WfridsetupComponent', () => {
  let component: WfridsetupComponent;
  let fixture: ComponentFixture<WfridsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfridsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfridsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
