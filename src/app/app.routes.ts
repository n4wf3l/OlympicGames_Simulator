import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { KnockoutStageComponent } from './knockout-stage/knockout-stage.component';
import { QuarterFinalsComponent } from './quarter-finals/quarter-finals.component';
import { SemiFinalsComponent } from './semi-finals/semi-finals.component';
import { FinalsComponent } from './finals/finals.component';
import { ThirdPlaceComponent } from './third-place/third-place.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'match', component: MatchComponent },
  { path: 'knockout-stage', component: KnockoutStageComponent },
  { path: 'quarter-finals', component: QuarterFinalsComponent },
  { path: 'semi-finals', component: SemiFinalsComponent },
  { path: 'finals', component: FinalsComponent },
  { path: 'third-place', component: ThirdPlaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
