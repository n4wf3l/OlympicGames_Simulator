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
            <button @click="handleScoreSubmit(match, group)">Submit</button>
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
                <th>Goal Difference</th>
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
            <button @click="handleScoreSubmit(match, group)">Submit</button>
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
                <th>Goal Difference</th>
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
    <button @click="goToQuarterFinals" class="go-to-quarter-finals">
      Go to Quarter Finals
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    handleScoreSubmit(match, group) {
      const team1 = group.teams[match.team1];
      const team2 = group.teams[match.team2];

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
    },
    goToQuarterFinals() {
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
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
}

.teams {
  display: flex;
  align-items: center;
  width: 40%;
}

.team-name {
  margin: 0 5px;
}

.separator {
  margin: 0 5px;
}

.scores {
  display: flex;
  align-items: center;
}

.scores input {
  width: 50px;
  margin: 0 5px;
  text-align: center;
}

.scores button {
  background-color: #dfc99a;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.scores button:hover {
  background-color: #a57a2a;
}

.match-info {
  font-size: 10px;
  color: grey;
  text-align: right;
  width: 30%;
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
}

.standings th {
  background-color: #f4f4f4;
}

.flag {
  width: 20px;
  height: 14px;
  margin-right: 5px;
}

.go-to-quarter-finals {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.go-to-quarter-finals:hover {
  background-color: #218838;
}
</style>
