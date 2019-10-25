import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningtechnologiesComponent } from './learningtechnologies.component';

describe('LearningtechnologiesComponent', () => {
  let component: LearningtechnologiesComponent;
  let fixture: ComponentFixture<LearningtechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningtechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningtechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
