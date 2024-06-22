import { Component } from '@angular/core';
import { MatchService } from '../match.service';

interface Group {
  name: string;
  teams: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  groups: Group[] = [];

  constructor(private matchService: MatchService) {
    this.groups = this.matchService.getGroups();
  }

  submitMatchResult(group: string, match: string, team1Score: number, team2Score: number) {
    this.matchService.setMatchResult('groupStage', `${group}-${match}`, { team1: team1Score, team2: team2Score });
  }

  toNumber(value: string): number {
    return Number(value);
  }
}
