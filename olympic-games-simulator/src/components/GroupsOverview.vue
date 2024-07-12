<template>
  <div class="groups-overview">
    <div class="group-row">
      <div v-for="group in groups.slice(0, 2)" :key="group.name" class="group">
        <h2>{{ group.name }}</h2>
        <div v-for="match in group.matches" :key="match.id" class="match">
          <span class="teams">
            <img :src="getFlag(match.team1)" class="flag" />
            <span class="team-name">{{ match.team1 }}</span>
            <span class="separator"> — </span>
            <span class="team-name">{{ match.team2 }}</span>
            <img :src="getFlag(match.team2)" class="flag" />
          </span>
          <div class="scores">
            <input
              type="number"
              v-model.number="match.team1Score"
              placeholder="Score"
              min="0"
            />
            <input
              type="number"
              v-model.number="match.team2Score"
              placeholder="Score"
              min="0"
            />
            <button
              @click="handleScoreSubmit(match, group)"
              :class="{ submitted: match.scoreSubmitted }"
            >
              {{ match.scoreSubmitted ? "Update" : "Submit" }}
            </button>
          </div>
          <div class="match-info">
            {{ match.date }}<br />
            {{ match.time }} ({{ match.venue }})
          </div>
        </div>
        <div class="standings">
          <h3>Standings</h3>
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Points</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Goal Diff.</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="([teamName, team], index) in sortedTeams(group.teams)"
                :key="index"
              >
                <td>
                  <img :src="getFlag(teamName)" class="flag" />{{ teamName }}
                </td>
                <td>{{ team.points }}</td>
                <td>{{ team.goalsFor }}</td>
                <td>{{ team.goalsAgainst }}</td>
                <td>{{ team.goalsFor - team.goalsAgainst }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="group-row">
      <div v-for="group in groups.slice(2, 4)" :key="group.name" class="group">
        <h2>{{ group.name }}</h2>
        <div v-for="match in group.matches" :key="match.id" class="match">
          <span class="teams">
            <img :src="getFlag(match.team1)" class="flag" />
            <span class="team-name">{{ match.team1 }}</span>
            <span class="separator"> — </span>
            <span class="team-name">{{ match.team2 }}</span>
            <img :src="getFlag(match.team2)" class="flag" />
          </span>
          <div class="scores">
            <input
              type="number"
              v-model.number="match.team1Score"
              placeholder="Score"
              min="0"
            />
            <input
              type="number"
              v-model.number="match.team2Score"
              placeholder="Score"
              min="0"
            />
            <button
              @click="handleScoreSubmit(match, group)"
              :class="{ submitted: match.scoreSubmitted }"
            >
              {{ match.scoreSubmitted ? "Update" : "Submit" }}
            </button>
          </div>
          <div class="match-info">
            {{ match.date }}<br />
            {{ match.time }} ({{ match.venue }})
          </div>
        </div>
        <div class="standings">
          <h3>Standings</h3>
          <table>
            <thead>
              <tr>
                <th>Team</th>
                <th>Points</th>
                <th>Goals For</th>
                <th>Goals Against</th>
                <th>Goal Diff.</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="([teamName, team], index) in sortedTeams(group.teams)"
                :key="index"
              >
                <td>
                  <img :src="getFlag(teamName)" class="flag" />{{ teamName }}
                </td>
                <td>{{ team.points }}</td>
                <td>{{ team.goalsFor }}</td>
                <td>{{ team.goalsAgainst }}</td>
                <td>{{ team.goalsFor - team.goalsAgainst }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="quarter-finals-info">
      <p>1A — 2B</p>
      <p>1B — 2A</p>
      <p>1C — 2D</p>
      <p>1D — 2C</p>
    </div>
    <button
      @click="goToQuarterFinals"
      class="go-to-quarter-finals"
      :disabled="!allScoresSubmitted"
    >
      Go to Quarter Finals
    </button>
  </div>
  <footer class="footer">
    <div class="footer-content">
      <a href="https://nainnovations.be" target="_blank">
        <img :src="logo" alt="NA Innovations Logo" class="footer-logo" />
      </a>
      <p>© 2024 NA Innovations. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import logo from "@/assets/flags/logo.png";
export default {
  data() {
    return {
      logo,
      groups: [
        // Group A
        {
          name: "Group A",
          matches: [
            {
              id: 1,
              team1: "France",
              team2: "USA",
              team1Score: 0,
              team2Score: 0,
              date: "Wednesday 24 July",
              time: "15:00",
              venue: "Marseille",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 2,
              team1: "Guinea",
              team2: "New Zealand",
              team1Score: 0,
              team2Score: 0,
              date: "Wednesday 24 July",
              time: "11:00",
              venue: "Nice",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 3,
              team1: "France",
              team2: "Guinea",
              team1Score: 0,
              team2Score: 0,
              date: "Saturday 27 July",
              time: "15:00",
              venue: "Nice",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 4,
              team1: "USA",
              team2: "New Zealand",
              team1Score: 0,
              team2Score: 0,
              date: "Saturday 27 July",
              time: "13:00",
              venue: "Marseille",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 5,
              team1: "France",
              team2: "New Zealand",
              team1Score: 0,
              team2Score: 0,
              date: "Tuesday 30 July",
              time: "13:00",
              venue: "Marseille",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 6,
              team1: "USA",
              team2: "Guinea",
              team1Score: 0,
              team2Score: 0,
              date: "Tuesday 30 July",
              time: "13:00",
              venue: "Saint-Étienne",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
          ],
          teams: {
            France: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            USA: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Guinea: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            "New Zealand": { points: 0, goalsFor: 0, goalsAgainst: 0 },
          },
        },
        // Group B
        {
          name: "Group B",
          matches: [
            {
              id: 1,
              team1: "Argentina",
              team2: "Morocco",
              team1Score: 0,
              team2Score: 0,
              date: "Wednesday 24 July",
              time: "09:00",
              venue: "Saint-Étienne",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 2,
              team1: "Iraq",
              team2: "Ukraine",
              team1Score: 0,
              team2Score: 0,
              date: "Wednesday 24 July",
              time: "13:00",
              venue: "Lyon",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 3,
              team1: "Argentina",
              team2: "Iraq",
              team1Score: 0,
              team2Score: 0,
              date: "Saturday 27 July",
              time: "09:00",
              venue: "Lyon",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 4,
              team1: "Morocco",
              team2: "Ukraine",
              team1Score: 0,
              team2Score: 0,
              date: "Saturday 27 July",
              time: "11:00",
              venue: "Saint-Étienne",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 5,
              team1: "Argentina",
              team2: "Ukraine",
              team1Score: 0,
              team2Score: 0,
              date: "Tuesday 30 July",
              time: "11:00",
              venue: "Lyon",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 6,
              team1: "Morocco",
              team2: "Iraq",
              team1Score: 0,
              team2Score: 0,
              date: "Tuesday 30 July",
              time: "11:00",
              venue: "Nice",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
          ],
          teams: {
            Argentina: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Morocco: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Iraq: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Ukraine: { points: 0, goalsFor: 0, goalsAgainst: 0 },
          },
        },
        // Group C
        {
          name: "Group C",
          matches: [
            {
              id: 1,
              team1: "Uzbekistan",
              team2: "Spain",
              team1Score: 0,
              team2Score: 0,
              date: "Wednesday 24 July",
              time: "09:00",
              venue: "Paris",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 2,
              team1: "Egypt",
              team2: "Dominican Republic",
              team1Score: 0,
              team2Score: 0,
              date: "Wednesday 24 July",
              time: "11:00",
              venue: "Nantes",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 3,
              team1: "Dominican Republic",
              team2: "Spain",
              team1Score: 0,
              team2Score: 0,
              date: "Saturday 27 July",
              time: "09:00",
              venue: "Bordeaux",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 4,
              team1: "Uzbekistan",
              team2: "Egypt",
              team1Score: 0,
              team2Score: 0,
              date: "Saturday 27 July",
              time: "11:00",
              venue: "Nantes",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 5,
              team1: "Dominican Republic",
              team2: "Uzbekistan",
              team1Score: 0,
              team2Score: 0,
              date: "Tuesday 30 July",
              time: "09:00",
              venue: "Paris",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 6,
              team1: "Spain",
              team2: "Egypt",
              team1Score: 0,
              team2Score: 0,
              date: "Tuesday 30 July",
              time: "09:00",
              venue: "Bordeaux",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
          ],
          teams: {
            Uzbekistan: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Spain: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Egypt: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            "Dominican Republic": { points: 0, goalsFor: 0, goalsAgainst: 0 },
          },
        },
        // Group D
        {
          name: "Group D",
          matches: [
            {
              id: 1,
              team1: "Japan",
              team2: "Paraguay",
              team1Score: 0,
              team2Score: 0,
              date: "Wednesday 24 July",
              time: "13:00",
              venue: "Bordeaux",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 2,
              team1: "Mali",
              team2: "Israel",
              team1Score: 0,
              team2Score: 0,
              date: "Wednesday 24 July",
              time: "15:00",
              venue: "Paris",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 3,
              team1: "Paraguay",
              team2: "Israel",
              team1Score: 0,
              team2Score: 0,
              date: "Saturday 27 July",
              time: "13:00",
              venue: "Paris",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 4,
              team1: "Japan",
              team2: "Mali",
              team1Score: 0,
              team2Score: 0,
              date: "Saturday 27 July",
              time: "15:00",
              venue: "Bordeaux",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 5,
              team1: "Paraguay",
              team2: "Mali",
              team1Score: 0,
              team2Score: 0,
              date: "Tuesday 30 July",
              time: "15:00",
              venue: "Paris",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
            {
              id: 6,
              team1: "Israel",
              team2: "Japan",
              team1Score: 0,
              team2Score: 0,
              date: "Tuesday 30 July",
              time: "15:00",
              venue: "Nantes",
              scoreSubmitted: false,
              previousScores: { team1: 0, team2: 0 },
            },
          ],
          teams: {
            Japan: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Paraguay: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Mali: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Israel: { points: 0, goalsFor: 0, goalsAgainst: 0 },
          },
        },
      ],
    };
  },
  computed: {
    allScoresSubmitted() {
      return this.groups.every((group) =>
        group.matches.every((match) => match.scoreSubmitted)
      );
    },
  },
  methods: {
    handleScoreSubmit(match, group) {
      const team1 = group.teams[match.team1];
      const team2 = group.teams[match.team2];

      if (match.scoreSubmitted) {
        // Retirer les scores précédents
        team1.goalsFor -= match.previousScores.team1;
        team1.goalsAgainst -= match.previousScores.team2;
        team2.goalsFor -= match.previousScores.team2;
        team2.goalsAgainst -= match.previousScores.team1;

        // Retirer les points précédents
        if (match.previousScores.team1 > match.previousScores.team2) {
          team1.points -= 3;
        } else if (match.previousScores.team1 < match.previousScores.team2) {
          team2.points -= 3;
        } else {
          team1.points -= 1;
          team2.points -= 1;
        }
      }

      // Mettre à jour les buts marqués et encaissés
      team1.goalsFor += match.team1Score;
      team1.goalsAgainst += match.team2Score;
      team2.goalsFor += match.team2Score;
      team2.goalsAgainst += match.team1Score;

      // Calculer les points
      if (match.team1Score > match.team2Score) {
        team1.points += 3;
      } else if (match.team1Score < match.team2Score) {
        team2.points += 3;
      } else {
        team1.points += 1;
        team2.points += 1;
      }

      match.previousScores.team1 = match.team1Score;
      match.previousScores.team2 = match.team2Score;
      match.scoreSubmitted = true;
    },
    goToQuarterFinals() {
      if (!this.allScoresSubmitted) {
        alert(
          "Please submit all scores before proceeding to the quarter finals."
        );
        return;
      }

      const quarterFinalsData = this.groups.map((group) => {
        const teams = Object.entries(group.teams).sort(([, a], [, b]) => {
          if (a.points !== b.points) return b.points - a.points;
          if (a.goalsFor - a.goalsAgainst !== b.goalsFor - b.goalsAgainst) {
            return b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst);
          }
          return b.goalsFor - a.goalsFor;
        });
        return { first: teams[0][0], second: teams[1][0] };
      });
      this.$router.push({
        path: "/quarter-finals",
        query: { quarterFinals: JSON.stringify(quarterFinalsData) },
      });
    },
    getFlag(team) {
      return require(`@/assets/flags/${team
        .replace(/\s+/g, "-")
        .toLowerCase()}.png`);
    },
    sortedTeams(teams) {
      return Object.entries(teams).sort(([, a], [, b]) => {
        if (a.points !== b.points) return b.points - a.points;
        if (a.goalsFor - a.goalsAgainst !== b.goalsFor - b.goalsAgainst) {
          return b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst);
        }
        return b.goalsFor - a.goalsFor;
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton+SC&display=swap");

body {
  font-family: "Anton SC", sans-serif;
  color: #6c757d;
}

.groups-overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.group-row {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.group {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  width: calc(45% - 20px);
  background-color: #fffdf5;
}

.match {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  font-family: "Anton SC";
}

.teams {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.team-name {
  margin: 0 5px;
}

.separator {
  margin: 0 5px;
}

.scores {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.scores input {
  width: 50px;
  margin: 0 5px;
  text-align: center;
  font-family: "Anton SC";
}

.scores button {
  background-color: #a57a2a;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.scores button:hover {
  background-color: #a57a2a;
}

.scores button.submitted {
  background-color: #dfc99a;
}

.match-info {
  font-size: 10px;
  color: grey;
  text-align: center;
  width: 100%;
}

.standings {
  margin-top: 20px;
}

.standings table {
  width: 100%;
  border-collapse: collapse;
}

.standings th,
.standings td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-family: "Anton SC";
}

.standings th {
  background-color: #f4f4f4;
}

.flag {
  width: 20px;
  height: 14px;
  margin-right: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.quarter-finals-info {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f4f4f4;
  text-align: center;
}

.go-to-quarter-finals {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #85601b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Anton SC";
  font-size: 40px;
  letter-spacing: 2px;
}

.go-to-quarter-finals:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.go-to-quarter-finals:hover:enabled {
  background-color: #b17633;
}

.footer {
  background-color: rgb(252, 250, 232);
  color: rgb(0, 0, 0);
  width: 100%;
  text-align: center;
  padding: 20px 0;
  margin-top: 20px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo {
  width: 50px;
  height: auto;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .groups-overview {
    padding-left: 1px;
    padding-right: 1px;
  }

  .group {
    width: 90%;
  }

  .match {
    flex-direction: column;
  }

  .teams {
    width: 100%;
    justify-content: center;
  }

  .scores {
    width: 100%;
    justify-content: center;
  }

  .scores input {
    width: 45px;
    margin: 5px;
  }

  .scores button {
    width: auto;
  }

  .match-info {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  .standings {
    width: calc(100% - 2px);
    margin-left: auto;
    margin-right: auto;
  }

  .go-to-quarter-finals {
    font-size: 20px;
    padding: 10px 15px;
  }
}
</style>
