import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTechnologiesComponent } from './my-technologies.component';

describe('MyTechnologiesComponent', () => {
  let component: MyTechnologiesComponent;
  let fixture: ComponentFixture<MyTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
