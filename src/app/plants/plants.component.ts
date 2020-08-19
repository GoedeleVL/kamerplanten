import { Component, OnInit } from '@angular/core';

import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  planten: Plant[];
  selectedPlant: Plant;

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.getPlanten();
  }

  getPlanten(): void {
    this.plantService.getPlanten()
      .subscribe(planten => this.planten = planten);
  }

}
