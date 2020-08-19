import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-plants-upcoming',
  templateUrl: './plants-upcoming.component.html',
  styleUrls: ['./plants-upcoming.component.css']
})
export class PlantsUpcomingComponent implements OnInit {

  dorstigePlanten: Plant[];

  constructor(private plantService: PlantService){ }

  ngOnInit(): void {
    this.getPlanten();
  }

  getPlanten(): void{
    this.plantService.getDorstigePlanten()
      .subscribe(planten => this.dorstigePlanten = planten);
  }

  getClassFromDeadline(datum: Date) {
    const vandaag = new Date();
    const deadline = new Date(datum);
    if (deadline.getTime() <= vandaag.getTime()) {
      return "dringend";
    }
    if (deadline.getTime() > vandaag.getTime()) {
      return "nietDringend";
    }
   
  }


}
