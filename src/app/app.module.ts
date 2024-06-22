import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; // Assurez-vous que ce chemin est correct
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { KnockoutStageComponent } from './knockout-stage/knockout-stage.component';
import { QuarterFinalsComponent } from './quarter-finals/quarter-finals.component';
import { SemiFinalsComponent } from './semi-finals/semi-finals.component';
import { FinalsComponent } from './finals/finals.component';
import { ThirdPlaceComponent } from './third-place/third-place.component';

import { MatchService } from './match.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchComponent,
    KnockoutStageComponent,
    QuarterFinalsComponent,
    SemiFinalsComponent,
    FinalsComponent,
    ThirdPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule  // Ajoutez RouterModule ici
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }