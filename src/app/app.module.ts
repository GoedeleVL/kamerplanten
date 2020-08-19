import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlantsComponent } from './plants/plants.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PlantsUpcomingComponent } from './plants-upcoming/plants-upcoming.component';
import { PlantInputComponent } from './plant-input/plant-input.component';
import { PlantAddComponent } from './plant-add/plant-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    PlantDetailComponent,
    PlantsUpcomingComponent,
    PlantInputComponent,
    PlantAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
