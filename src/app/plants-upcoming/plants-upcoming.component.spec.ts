import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsUpcomingComponent } from './plants-upcoming.component';

describe('PlantsUpcomingComponent', () => {
  let component: PlantsUpcomingComponent;
  let fixture: ComponentFixture<PlantsUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
