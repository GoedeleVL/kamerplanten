import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-input',
  templateUrl: './plant-input.component.html',
  styleUrls: ['./plant-input.component.css']
})
export class PlantInputComponent implements OnInit {

  @Input() plant: Plant;
   
  constructor(  ) { }

  ngOnInit(): void {
  }
  
}
