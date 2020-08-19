import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnInit {

  @Input() plant: Plant;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private plantService: PlantService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlant();
  }

  getPlant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plantService.getPlant(id)
      .subscribe(plant => this.plant = plant);
  }

  save(): void {
    this.plantService.updatePlant(this.plant)
      .subscribe(() => this.naarAllePlanten());
  }

  delete(): void {
    this.plantService.deletePlant(this.plant).subscribe(() => this.naarAllePlanten());
  }

  naarAllePlanten(): void {
    this.router.navigateByUrl('/planten');
  }

  waterGekregen(): void {
    const vandaag = new Date();
    this.plant.watergekregen = vandaag;
    this.plantService.updatePlant(this.plant)
      .subscribe(() =>this.router.navigateByUrl('/dorstig'));
  }

}
