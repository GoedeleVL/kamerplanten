import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantInputComponent } from './plant-input.component';

describe('PlantInputComponent', () => {
  let component: PlantInputComponent;
  let fixture: ComponentFixture<PlantInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
