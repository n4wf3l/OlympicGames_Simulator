import { Component } from '@angular/core';
import { MatchService, Results } from '../match.service';

@Component({
  selector: 'app-finals',
  templateUrl: './finals.component.html',
  styleUrls: ['./finals.component.css']
})
export class FinalsComponent {
  results: Results;

  constructor(private matchService: MatchService) {
    this.results = this.matchService.getResults();
  }

  submitMatchResult(match: string, team1Score: string, team2Score: string) {
    this.matchService.setMatchResult('finals', match, { team1: Number(team1Score), team2: Number(team2Score) });
  }
}
