<template>
  <div class="bracket-container">
    <div class="results" v-if="thirdPlaceComplete || winner">
      <h2>Results</h2>
      <div class="medal-container">
        <div class="medal">
          <h3>Gold</h3>
          <p>{{ winner }}</p>
          <img :src="getFlag(winner)" class="flag" />
        </div>
        <div class="medal">
          <h3>Silver</h3>
          <p>{{ runnerUp }}</p>
          <img :src="getFlag(runnerUp)" class="flag" />
        </div>
        <div class="medal">
          <h3>Bronze</h3>
          <p>{{ thirdPlaceWinner }}</p>
          <img :src="getFlag(thirdPlaceWinner)" class="flag" />
        </div>
      </div>
    </div>

    <div class="bracket">
      <div class="round quarter-finals">
        <h2>Quarter Finals</h2>
        <div
          v-for="(match, index) in quarterFinals"
          :key="index"
          class="match-container"
        >
          <div class="match">
            <img :src="getFlag(match.team1)" class="flag" />
            {{ match.team1 }} -
            <img :src="getFlag(match.team2)" class="flag" />
            {{ match.team2 }}
            <div class="match-details">
              {{ match.venue }} à {{ match.time }} le {{ match.date }}
            </div>
            <div class="scores">
              <input
                v-model.number="match.team1Score"
                type="number"
                min="0"
                class="score-input"
              />
              <input
                v-model.number="match.team2Score"
                type="number"
                min="0"
                class="score-input"
              />
            </div>
            <button
              @click="submitScore(match, 'semiFinals')"
              class="submit-button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div class="round semi-finals">
        <h2>Semi Finals</h2>
        <div
          v-for="(match, index) in semiFinals"
          :key="index"
          class="match-container"
        >
          <div class="match">
            <img :src="getFlag(match.team1)" class="flag" />
            {{ match.team1 }} -
            <img :src="getFlag(match.team2)" class="flag" />
            {{ match.team2 }}
            <div class="match-details">
              {{ match.venue }} à {{ match.time }} le {{ match.date }}
            </div>
            <div class="scores">
              <input
                v-model.number="match.team1Score"
                type="number"
                class="score-input"
                :disabled="!quarterFinalsSubmitted"
              />
              <input
                v-model.number="match.team2Score"
                type="number"
                class="score-input"
                :disabled="!quarterFinalsSubmitted"
              />
            </div>
            <button
              @click="submitScore(match, 'finals')"
              class="submit-button"
              :disabled="!quarterFinalsSubmitted"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div class="round third-place">
        <h2>Third Place Match</h2>
        <div
          v-for="(match, index) in thirdPlace"
          :key="index"
          class="match-container"
        >
          <div class="match">
            <img :src="getFlag(match.team1)" class="flag" />
            {{ match.team1 }} -
            <img :src="getFlag(match.team2)" class="flag" />
            {{ match.team2 }}
            <div class="match-details">
              {{ match.venue }} à {{ match.time }} le {{ match.date }}
            </div>
            <div class="scores">
              <input
                v-model.number="match.team1Score"
                type="number"
                class="score-input"
                :disabled="!semiFinalsSubmitted"
              />
              <input
                v-model.number="match.team2Score"
                type="number"
                class="score-input"
                :disabled="!semiFinalsSubmitted"
              />
            </div>
            <button
              @click="submitScore(match, 'thirdPlaceComplete')"
              class="submit-button"
              :disabled="!semiFinalsSubmitted"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div class="round finals">
        <h2>Finals</h2>
        <div
          v-for="(match, index) in finals"
          :key="index"
          class="match-container"
        >
          <div class="match">
            <img :src="getFlag(match.team1)" class="flag" />
            {{ match.team1 }} -
            <img :src="getFlag(match.team2)" class="flag" />
            {{ match.team2 }}
            <div class="match-details">
              {{ match.venue }} à {{ match.time }} le {{ match.date }}
            </div>
            <div class="scores">
              <input
                v-model.number="match.team1Score"
                type="number"
                class="score-input"
                :disabled="!thirdPlaceComplete"
              />
              <input
                v-model.number="match.team2Score"
                type="number"
                class="score-input"
                :disabled="!thirdPlaceComplete"
              />
            </div>
            <button
              @click="submitScore(match, 'complete')"
              class="submit-button"
              :disabled="!thirdPlaceComplete"
            >
              Submit
            </button>
          </div>
        </div>
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
      quarterFinalsSubmitted: false,
      semiFinalsSubmitted: false,
      thirdPlaceComplete: false,
      winner: "",
      runnerUp: "",
      thirdPlaceWinner: "",
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
        if (this.quarterFinals.every((match) => match.winner)) {
          this.quarterFinalsSubmitted = true;
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
        if (this.semiFinals.every((match) => match.winner)) {
          this.semiFinalsSubmitted = true;
        }
      } else if (nextStage === "thirdPlaceComplete") {
        this.thirdPlaceWinner = match.winner;
        this.thirdPlaceComplete = true;
      } else if (nextStage === "complete") {
        this.winner = match.winner;
        this.runnerUp = match.loser;
      }
    },
    getFlag(team) {
      if (!team) return "";
      const teamFlagPath = team.replace(/\s+/g, "-").toLowerCase();
      try {
        return require(`@/assets/flags/${teamFlagPath}.png`);
      } catch (e) {
        return ""; // Handle missing flag images gracefully
      }
    },
  },
};
</script>

<style scoped>
.bracket-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bracket {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.round {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.match-container {
  margin: 10px;
}

.match {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #f9f9f9;
  width: 250px;
  text-align: center;
}

.flag {
  width: 20px;
  height: auto;
  margin-right: 5px;
}

.match-details {
  margin: 5px 0;
}

.scores {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.score-input {
  width: 30px;
  margin: 0 5px;
}

.submit-button {
  margin-top: 5px;
}

.results {
  margin-bottom: 20px;
  text-align: center;
}

.medal-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.medal {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #f9f9f9;
  width: 150px;
  text-align: center;
}
</style>
