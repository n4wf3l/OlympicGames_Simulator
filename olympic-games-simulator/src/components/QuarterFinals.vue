<template>
  <div class="bracket-container" id="capture-section">
    <div class="results" v-if="thirdPlaceComplete || winner">
      <h2>Results</h2>
      <div class="medal-container">
        <div class="medal gold">
          <h3>🥇 Gold</h3>
          <p>{{ winner }}</p>
          <img :src="getFlag(winner)" class="flag" />
        </div>
        <div class="medal silver">
          <h3>🥈 Silver</h3>
          <p>{{ runnerUp }}</p>
          <img :src="getFlag(runnerUp)" class="flag" />
        </div>
        <div class="medal bronze">
          <h3>🥉 Bronze</h3>
          <p>{{ thirdPlaceWinner }}</p>
          <img :src="getFlag(thirdPlaceWinner)" class="flag" />
        </div>
      </div>
    </div>

    <div class="bracket">
      <div class="round quarter-finals">
        <h2>¼ Finals</h2>
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
              {{ match.venue }}
              <br />
              {{ match.time }} on {{ match.date }}
            </div>
            <div class="scores" v-if="!scoresSubmitted">
              <input
                v-model.number="match.team1Score"
                type="number"
                min="0"
                class="score-input"
                @input="validateScore(match, 'team1Score')"
              />
              <input
                v-model.number="match.team2Score"
                type="number"
                min="0"
                class="score-input"
                @input="validateScore(match, 'team2Score')"
              />
            </div>
            <button
              @click="submitScore(match, 'semiFinals')"
              class="submit-button"
              v-if="!scoresSubmitted"
            >
              Submit
            </button>
            <div v-else>{{ match.team1Score }} - {{ match.team2Score }}</div>
          </div>
        </div>
      </div>

      <div class="round semi-finals">
        <h2>½ Finals</h2>
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
              {{ match.venue }}
              <br />
              {{ match.time }} on {{ match.date }}
            </div>
            <div class="scores" v-if="!scoresSubmitted">
              <input
                v-model.number="match.team1Score"
                type="number"
                min="0"
                class="score-input"
                @input="validateScore(match, 'team1Score')"
              />
              <input
                v-model.number="match.team2Score"
                type="number"
                min="0"
                class="score-input"
                @input="validateScore(match, 'team2Score')"
              />
            </div>
            <button
              @click="submitScore(match, 'finals')"
              class="submit-button"
              v-if="!scoresSubmitted && quarterFinalsSubmitted"
            >
              Submit
            </button>
            <div v-else>{{ match.team1Score }} - {{ match.team2Score }}</div>
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
              {{ match.venue }}
              <br />
              {{ match.time }} on {{ match.date }}
            </div>
            <div class="scores" v-if="!scoresSubmitted">
              <input
                v-model.number="match.team1Score"
                type="number"
                min="0"
                class="score-input"
                @input="validateScore(match, 'team1Score')"
              />
              <input
                v-model.number="match.team2Score"
                type="number"
                min="0"
                class="score-input"
                @input="validateScore(match, 'team2Score')"
              />
            </div>
            <button
              @click="submitScore(match, 'thirdPlaceComplete')"
              class="submit-button"
              v-if="!scoresSubmitted && semiFinalsSubmitted"
            >
              Submit
            </button>
            <div v-else>{{ match.team1Score }} - {{ match.team2Score }}</div>
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
              {{ match.venue }}
              <br />
              {{ match.time }} on {{ match.date }}
            </div>
            <div class="scores" v-if="!scoresSubmitted">
              <input
                v-model.number="match.team1Score"
                type="number"
                min="0"
                class="score-input"
                @input="validateScore(match, 'team1Score')"
              />
              <input
                v-model.number="match.team2Score"
                type="number"
                min="0"
                class="score-input"
                @input="validateScore(match, 'team2Score')"
              />
            </div>
            <button
              @click="submitScore(match, 'complete')"
              class="submit-button"
              v-if="!scoresSubmitted && thirdPlaceComplete"
            >
              Finalize
            </button>
            <div v-else>{{ match.team1Score }} - {{ match.team2Score }}</div>
          </div>
        </div>
      </div>
    </div>
    <button id="capture-button" v-if="scoresSubmitted" @click="captureScreen">
      📸 Screenshot
    </button>
    <footer class="footer">
      <div class="footer-content">
        <a href="https://nainnovations.be" target="_blank">
          <img :src="logo" alt="NA Innovations Logo" class="footer-logo" />
        </a>
        <p>© 2024 NA Innovations. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import logo from "@/assets/logo.png"; // Update this path to your actual logo path
import logonai from "@/assets/logonai.png"; // Update this path to your actual logo path

export default {
  data() {
    return {
      quarterFinals: [
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          selectedWinner: "",
          venue: "📍 Paris",
          time: "📅 3 PM",
          date: "2 August 2024",
        },
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          selectedWinner: "",
          venue: "📍 Lyon",
          time: "📅 5 PM",
          date: "2 August 2024",
        },
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          selectedWinner: "",
          venue: "📍 Marseille",
          time: "📅 7 PM",
          date: "2 August 2024",
        },
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          selectedWinner: "",
          venue: "📍 Bordeaux",
          time: "📅 9 PM",
          date: "2 August 2024",
        },
      ],
      semiFinals: [
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          selectedWinner: "",
          venue: "📍 Marseille",
          time: "📅 3 PM",
          date: "5 August 2024",
        },
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          selectedWinner: "",
          venue: "📍 Lyon",
          time: "📅 5 PM",
          date: "5 August 2024",
        },
      ],
      finals: [
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          selectedWinner: "",
          venue: "📍 Paris",
          time: "📅 6 PM",
          date: "9 August 2024",
        },
      ],
      thirdPlace: [
        {
          team1: "",
          team2: "",
          team1Score: 0,
          team2Score: 0,
          selectedWinner: "",
          venue: "📍 Nantes",
          time: "📅 5 PM",
          date: "8 August 2024",
        },
      ],
      thirdPlaceComplete: false,
      winner: "",
      runnerUp: "",
      thirdPlaceWinner: "",
      quarterFinalsSubmitted: false,
      semiFinalsSubmitted: false,
      scoresSubmitted: false,
      logo: logo,
      logonai: logonai,
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
      if (match.team1Score === match.team2Score) {
        if (match.selectedWinner === "") {
          alert("It's a tie! Please select a winner.");
          return;
        }
        match.winner = match.selectedWinner;
        match.loser =
          match.selectedWinner === match.team1 ? match.team2 : match.team1;
      } else {
        if (match.team1Score > match.team2Score) {
          match.winner = match.team1;
          match.loser = match.team2;
        } else {
          match.winner = match.team2;
          match.loser = match.team1;
        }
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
        this.scoresSubmitted = true; // Setting the scoresSubmitted to true
      }
    },
    validateScore(match, team) {
      if (match[team] < 0) {
        match[team] = 0;
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
    captureScreen() {
      const captureElement = document.getElementById("capture-section");
      const captureButton = document.getElementById("capture-button");
      const footerElement = document.querySelector(".footer");

      captureButton.style.display = "none"; // Hide the button before capture
      footerElement.style.display = "none"; // Hide the footer before capture

      html2canvas(captureElement).then((canvas) => {
        captureButton.style.display = "block"; // Show the button again after capture
        footerElement.style.display = "block"; // Show the footer again after capture

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "bracket.png";
        link.click();
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anton+SC&family=Bebas+Neue&display=swap");

.bracket-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(252, 250, 232);
  width: 100%;
  margin: 0%;
}

.results {
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  margin-bottom: 20px;
}

.medal-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.medal {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1px;
  width: 100px;
  text-align: center;
  margin: 0 5px; /* Added margin between medals */
}

.gold {
  background-color: gold;
}

.silver {
  background-color: silver;
}

.bronze {
  background-color: #cd7f32;
}

.flag {
  width: 20px;
  height: auto;
  margin-top: 5px;
}

.bracket {
  display: flex;
  font-family: "Bebas Neue", sans-serif;
  justify-content: space-around;
  width: 100%;
}

.round {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background-color: #e0d598; /* Green background */
  color: white; /* White text */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px 20px; /* Padding */
  cursor: pointer; /* Pointer cursor on hover */
}

.submit-button:hover {
  background-color: #856427; /* Darker green on hover */
}

#capture-button {
  margin-top: 20px;
  background-color: #f2f8ff; /* Blue background */
  color: rgb(177, 132, 48); /* White text */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px 20px; /* Padding */
  cursor: pointer; /* Pointer cursor on hover */
}

#capture-button:hover {
  background-color: #dbd4c1; /* Darker blue on hover */
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
</style>
