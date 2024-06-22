import { Component } from '@angular/core';
import { MatchService, Results } from '../match.service';

@Component({
  selector: 'app-semi-finals',
  templateUrl: './semi-finals.component.html',
  styleUrls: ['./semi-finals.component.css']
})
export class SemiFinalsComponent {
  results: Results;

  constructor(private matchService: MatchService) {
    this.results = this.matchService.getResults();
  }

  submitMatchResult(match: string, team1Score: string, team2Score: string) {
    this.matchService.setMatchResult('semiFinals', match, { team1: Number(team1Score), team2: Number(team2Score) });
  }
}
