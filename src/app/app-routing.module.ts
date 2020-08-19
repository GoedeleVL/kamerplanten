import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantsComponent } from './plants/plants.component';
import { PlantsUpcomingComponent } from './plants-upcoming/plants-upcoming.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { PlantAddComponent } from './plant-add/plant-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/dorstig', pathMatch: 'full'},
  { path: 'planten', component: PlantsComponent },
  { path: 'dorstig', component: PlantsUpcomingComponent},
  { path: 'detail/:id', component: PlantDetailComponent},
  { path: 'nieuw', component: PlantAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
