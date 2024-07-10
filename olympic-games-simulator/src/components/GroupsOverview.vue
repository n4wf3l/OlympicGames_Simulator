<template>
  <div class="groups-overview">
    <div v-for="group in groups" :key="group.name" class="group">
      <h2>{{ group.name }}</h2>
      <div v-for="match in group.matches" :key="match.id" class="match">
        <span>{{ match.team1 }} vs {{ match.team2 }}</span>
        <input
          type="number"
          v-model.number="match.team1Score"
          placeholder="Score {{ match.team1 }}"
        />
        <input
          type="number"
          v-model.number="match.team2Score"
          placeholder="Score {{ match.team2 }}"
        />
        <button @click="handleScoreSubmit(match, group)">Submit</button>
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
            <tr v-for="team in sortedTeams(group.teams)" :key="team.name">
              <td>{{ team.name }}</td>
              <td>{{ team.points }}</td>
              <td>{{ team.goalsFor }}</td>
              <td>{{ team.goalsAgainst }}</td>
              <td>{{ team.goalsFor - team.goalsAgainst }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button @click="goToQuarterFinals">Go to Quarter Finals</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          name: "Groupe A",
          matches: [
            {
              id: 1,
              team1: "France",
              team2: "États-Unis",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 2,
              team1: "Guinée",
              team2: "Nouvelle-Zélande",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 3,
              team1: "France",
              team2: "Guinée",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 4,
              team1: "États-Unis",
              team2: "Nouvelle-Zélande",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 5,
              team1: "France",
              team2: "Nouvelle-Zélande",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 6,
              team1: "États-Unis",
              team2: "Guinée",
              team1Score: 0,
              team2Score: 0,
            },
          ],
          teams: {
            France: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            "États-Unis": { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Guinée: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            "Nouvelle-Zélande": { points: 0, goalsFor: 0, goalsAgainst: 0 },
          },
        },
        {
          name: "Groupe B",
          matches: [
            {
              id: 1,
              team1: "Argentine",
              team2: "Maroc",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 2,
              team1: "Irak",
              team2: "Ukraine",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 3,
              team1: "Argentine",
              team2: "Irak",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 4,
              team1: "Maroc",
              team2: "Ukraine",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 5,
              team1: "Argentine",
              team2: "Ukraine",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 6,
              team1: "Maroc",
              team2: "Irak",
              team1Score: 0,
              team2Score: 0,
            },
          ],
          teams: {
            Argentine: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Maroc: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Irak: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Ukraine: { points: 0, goalsFor: 0, goalsAgainst: 0 },
          },
        },
        {
          name: "Groupe C",
          matches: [
            {
              id: 1,
              team1: "Ouzbékistan",
              team2: "Espagne",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 2,
              team1: "Égypte",
              team2: "République dominicaine",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 3,
              team1: "Ouzbékistan",
              team2: "Égypte",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 4,
              team1: "Espagne",
              team2: "République dominicaine",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 5,
              team1: "Ouzbékistan",
              team2: "République dominicaine",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 6,
              team1: "Espagne",
              team2: "Égypte",
              team1Score: 0,
              team2Score: 0,
            },
          ],
          teams: {
            Ouzbékistan: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Espagne: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Égypte: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            "République dominicaine": {
              points: 0,
              goalsFor: 0,
              goalsAgainst: 0,
            },
          },
        },
        {
          name: "Groupe D",
          matches: [
            {
              id: 1,
              team1: "Japon",
              team2: "Paraguay",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 2,
              team1: "Mali",
              team2: "Israël",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 3,
              team1: "Japon",
              team2: "Mali",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 4,
              team1: "Paraguay",
              team2: "Israël",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 5,
              team1: "Japon",
              team2: "Israël",
              team1Score: 0,
              team2Score: 0,
            },
            {
              id: 6,
              team1: "Paraguay",
              team2: "Mali",
              team1Score: 0,
              team2Score: 0,
            },
          ],
          teams: {
            Japon: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Paraguay: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Mali: { points: 0, goalsFor: 0, goalsAgainst: 0 },
            Israël: { points: 0, goalsFor: 0, goalsAgainst: 0 },
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
        // team1 gagne
        team1.points += 3;
      } else if (match.team1Score < match.team2Score) {
        // team2 gagne
        team2.points += 3;
      } else {
        // match nul
        team1.points += 1;
        team2.points += 1;
      }
    },
    sortedTeams(teams) {
      return Object.keys(teams)
        .map((name) => ({ name, ...teams[name] }))
        .sort(
          (a, b) =>
            b.points - a.points ||
            b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst)
        );
    },
    goToQuarterFinals() {
      const quarterFinals = [];
      this.groups.forEach((group) => {
        const sortedTeams = this.sortedTeams(group.teams);
        quarterFinals.push({
          first: sortedTeams[0].name,
          second: sortedTeams[1].name,
        });
      });
      this.$router.push({
        path: "/quarter-finals",
        query: { quarterFinals: JSON.stringify(quarterFinals) },
      });
    },
  },
};
</script>

<style scoped>
.groups-overview {
  display: flex;
  flex-wrap: wrap;
}
.group {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: calc(50% - 40px);
}
.match {
  margin: 10px 0;
}
.standings {
  margin-top: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>
