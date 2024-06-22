// knockout-stage.component.ts
import { Component } from '@angular/core';
import { MatchService, Results, MatchResult } from '../match.service';

@Component({
  selector: 'app-knockout-stage',
  templateUrl: './knockout-stage.component.html',
  styleUrls: ['./knockout-stage.component.css']
})
export class KnockoutStageComponent {
  results: Results;
  stages: (keyof Results)[] = ['quarterFinals', 'semiFinals', 'finals', 'thirdPlace'];

  constructor(private matchService: MatchService) {
    this.results = this.matchService.getResults();
  }

  getMatches(stage: keyof Results): { [key: string]: MatchResult } {
    return this.results[stage];
  }
}
