import { Injectable } from '@angular/core';

export interface Group {
  name: string;
  teams: string[];
}

export interface MatchResult {
  team1: number;
  team2: number;
}

export interface Results {
  groupStage: { [key: string]: MatchResult };
  quarterFinals: { [key: string]: MatchResult };
  semiFinals: { [key: string]: MatchResult };
  finals: { [key: string]: MatchResult };
  thirdPlace: { [key: string]: MatchResult };
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private groups: Group[] = [
    { name: 'Groupe A', teams: ['France', 'États-Unis', 'Guinée', 'Nouvelle-Zélande'] },
    { name: 'Groupe B', teams: ['Argentine', 'Maroc', 'Irak', 'Ukraine'] },
    { name: 'Groupe C', teams: ['Ouzbékistan', 'Espagne', 'Égypte', 'République dominicaine'] },
    { name: 'Groupe D', teams: ['Japon', 'Paraguay', 'Mali', 'Israël'] }
  ];

  private results: Results = {
    groupStage: {},
    quarterFinals: {},
    semiFinals: {},
    finals: {},
    thirdPlace: {}
  };

  constructor() { }

  getGroups(): Group[] {
    return this.groups;
  }

  setMatchResult(stage: keyof Results, match: string, result: MatchResult) {
    this.results[stage][match] = result;
  }

  getResults(): Results {
    return this.results;
  }
}
