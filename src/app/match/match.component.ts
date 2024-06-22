import { Component } from '@angular/core';
import { MatchService, Group, MatchResult } from '../match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  groups: Group[];
  results: { [key: string]: MatchResult } = {};

  constructor(private matchService: MatchService) {
    this.groups = this.matchService.getGroups();
    this.results = this.matchService.getResults().groupStage;
  }

  submitMatchResult(group: string, match: string, team1Score: number, team2Score: number) {
    this.matchService.setMatchResult('groupStage', `${group}-${match}`, { team1: team1Score, team2: team2Score });
    this.results = this.matchService.getResults().groupStage;
  }
}
