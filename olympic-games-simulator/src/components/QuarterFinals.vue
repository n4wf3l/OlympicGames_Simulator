<template>
  <div>
    <h2>Quarter Finals</h2>
    <div v-for="(match, index) in quarterFinals" :key="index">
      <div>
        <img :src="getFlag(match.team1)" class="flag" />
        {{ match.team1 }} vs
        <img :src="getFlag(match.team2)" class="flag" />
        {{ match.team2 }} - {{ match.venue }} à {{ match.time }} le
        {{ match.date }}
        <input v-model.number="match.team1Score" type="number" />
        <input v-model.number="match.team2Score" type="number" />
        <button @click="submitScore(match, 'semiFinals')">Submit</button>
      </div>
    </div>
    <button @click="goToSemiFinals">Go to Semi Finals</button>

    <h2>Semi Finals</h2>
    <div v-for="(match, index) in semiFinals" :key="index">
      <div>
        <img :src="getFlag(match.team1)" class="flag" />
        {{ match.team1 }} vs
        <img :src="getFlag(match.team2)" class="flag" />
        {{ match.team2 }} - {{ match.venue }} à {{ match.time }} le
        {{ match.date }}
        <input v-model.number="match.team1Score" type="number" />
        <input v-model.number="match.team2Score" type="number" />
        <button @click="submitScore(match, 'finals')">Submit</button>
      </div>
    </div>
    <button @click="goToFinals">Go to Finals</button>

    <h2>Finals</h2>
    <div v-for="(match, index) in finals" :key="index">
      <div>
        <img :src="getFlag(match.team1)" class="flag" />
        {{ match.team1 }} vs
        <img :src="getFlag(match.team2)" class="flag" />
        {{ match.team2 }} - {{ match.venue }} à {{ match.time }} le
        {{ match.date }}
        <input v-model.number="match.team1Score" type="number" />
        <input v-model.number="match.team2Score" type="number" />
        <button @click="submitScore(match, 'thirdPlace')">Submit</button>
      </div>
    </div>

    <h2>Third Place Match</h2>
    <div v-for="(match, index) in thirdPlace" :key="index">
      <div>
        <img :src="getFlag(match.team1)" class="flag" />
        {{ match.team1 }} vs
        <img :src="getFlag(match.team2)" class="flag" />
        {{ match.team2 }} - {{ match.venue }} à {{ match.time }} le
        {{ match.date }}
        <input v-model.number="match.team1Score" type="number" />
        <input v-model.number="match.team2Score" type="number" />
        <button @click="submitScore(match, 'complete')">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quarterFinals: [
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          venue: "Paris",
          time: "15h",
          date: "2 août 2024",
        },
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          venue: "Lyon",
          time: "17h",
          date: "2 août 2024",
        },
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          venue: "Marseille",
          time: "19h",
          date: "2 août 2024",
        },
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          venue: "Bordeaux",
          time: "21h",
          date: "2 août 2024",
        },
      ],
      semiFinals: [
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          venue: "Marseille",
          time: "15h",
          date: "5 août 2024",
        },
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          venue: "Lyon",
          time: "17h",
          date: "5 août 2024",
        },
      ],
      finals: [
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          venue: "Paris",
          time: "18h",
          date: "9 août 2024",
        },
      ],
      thirdPlace: [
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          venue: "Nantes",
          time: "17h",
          date: "8 août 2024",
        },
      ],
    };
  },
  created() {
    const quarterFinalsData = JSON.parse(this.$route.query.quarterFinals);
    this.quarterFinals[0].team1 = quarterFinalsData[1].first;
    this.quarterFinals[0].team2 = quarterFinalsData[0].second;
    this.quarterFinals[1].team1 = quarterFinalsData[3].first;
    this.quarterFinals[1].team2 = quarterFinalsData[2].second;
    this.quarterFinals[2].team1 = quarterFinalsData[2].first;
    this.quarterFinals[2].team2 = quarterFinalsData[3].second;
    this.quarterFinals[3].team1 = quarterFinalsData[0].first;
    this.quarterFinals[3].team2 = quarterFinalsData[1].second;
  },
  methods: {
    submitScore(match, nextStage) {
      if (match.team1Score > match.team2Score) {
        match.winner = match.team1;
        match.loser = match.team2;
      } else {
        match.winner = match.team2;
        match.loser = match.team1;
      }
      if (nextStage === "semiFinals") {
        const index = this.quarterFinals.indexOf(match);
        if (index % 2 === 0) {
          this.semiFinals[Math.floor(index / 2)].team1 = match.winner;
        } else {
          this.semiFinals[Math.floor(index / 2)].team2 = match.winner;
        }
      } else if (nextStage === "finals") {
        const index = this.semiFinals.indexOf(match);
        if (index === 0) {
          this.finals[0].team1 = match.winner;
          this.thirdPlace[0].team1 = match.loser;
        } else {
          this.finals[0].team2 = match.winner;
          this.thirdPlace[0].team2 = match.loser;
        }
      }
    },
    goToSemiFinals() {
      this.$forceUpdate(); // Force rerender to update teams
    },
    goToFinals() {
      this.$forceUpdate(); // Force rerender to update teams
    },
    getFlag(team) {
      return `/assets/flags/${team.replace(/\s+/g, "-").toLowerCase()}.png`;
    },
  },
};
</script>

<style scoped>
.quarter-finals {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.match {
  margin: 10px 0;
}
.flag {
  width: 20px;
  height: auto;
  margin-right: 5px;
}
</style>
