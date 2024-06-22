import { Component } from '@angular/core';
import { MatchService, Results } from '../match.service';

@Component({
  selector: 'app-quarter-finals',
  templateUrl: './quarter-finals.component.html',
  styleUrls: ['./quarter-finals.component.css']
})
export class QuarterFinalsComponent {
  results: Results;

  constructor(private matchService: MatchService) {
    this.results = this.matchService.getResults();
  }

  submitMatchResult(match: string, team1Score: string, team2Score: string) {
    this.matchService.setMatchResult('quarterFinals', match, { team1: Number(team1Score), team2: Number(team2Score) });
  }
}
