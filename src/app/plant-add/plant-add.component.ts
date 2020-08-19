import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-add',
  templateUrl: './plant-add.component.html',
  styleUrls: ['./plant-add.component.css']
})
export class PlantAddComponent implements OnInit {

  plant: Plant = {
    'id': 0, 
    'naam': '', 
    'tijdinterval': 7, 
    'hoeveelheid': 'gemiddeld', 
    'watergekregen': new Date(),
    'deadline': new Date()};

  constructor(
    private router: Router,
    private plantService: PlantService) {}

  ngOnInit(): void {
  }

  add(plant: Plant) {
    this.plantService.addPlant(plant)
      .subscribe(() => this.naarAlleKamerplanten());
  }

  naarAlleKamerplanten(): void {
    this.router.navigateByUrl('/planten');
  }

}
