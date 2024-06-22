import { Component } from '@angular/core';
import { MatchService, Results } from '../match.service';

@Component({
  selector: 'app-third-place',
  templateUrl: './third-place.component.html',
  styleUrls: ['./third-place.component.css']
})
export class ThirdPlaceComponent {
  results: Results;

  constructor(private matchService: MatchService) {
    this.results = this.matchService.getResults();
  }

  submitMatchResult(match: string, team1Score: string, team2Score: string) {
    this.matchService.setMatchResult('thirdPlace', match, { team1: Number(team1Score), team2: Number(team2Score) });
  }
}
