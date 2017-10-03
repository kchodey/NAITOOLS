import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfrresetdataComponent } from './wfrresetdata.component';

describe('WfrresetdataComponent', () => {
  let component: WfrresetdataComponent;
  let fixture: ComponentFixture<WfrresetdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfrresetdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfrresetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
