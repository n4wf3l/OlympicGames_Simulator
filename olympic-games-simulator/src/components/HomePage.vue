<template>
  <div class="home">
    <header>
      <img
        src="@/assets/flags/logo.png"
        alt="Olympic Logo"
        class="logo"
        width="10%"
      />
      <h1>Olympic Games 2024 — Football Simulator</h1>
    </header>
    <section class="intro">
      <p>Welcome to the Football Simulator for the 2024 Olympic Games!</p>
      <router-link to="/groupsoverview">
        <button class="start-button">Start Simulation</button>
      </router-link>
    </section>
    <section class="info">
      <h2>About the Olympic Games</h2>
      <p>
        The 2024 Summer Olympic Games will be held in Paris, France, with
        football matches taking place in various cities across the country.
      </p>

      <h3>Football at the Olympics</h3>
      <p>
        Football is one of the most popular sports at the Olympic Games. Here
        are some key points about the competition:
      </p>
      <ul>
        <li>
          <strong>Age Limit:</strong> Men's teams are primarily composed of
          players under 23 years old (born on or after January 1, 2001), with
          the allowance of three over-age players.
        </li>
        <li>
          <strong>Team Composition:</strong> Each team can register up to 18
          players for the tournament.
        </li>
        <li>
          <strong>Tournament Format:</strong> The competition begins with a
          group stage followed by knockout rounds.
        </li>
        <li>
          <strong>Venues:</strong> Matches will be held in several cities,
          including Paris, Marseille, Lyon, Nice, and Bordeaux.
        </li>
      </ul>

      <h3>Group Stage</h3>
      <p>
        During the group stage, the 16 teams are divided into four groups of
        four teams each. Teams play each other in a round-robin format. The top
        two teams from each group advance to the knockout stage.
      </p>

      <h3>Knockout Stage</h3>
      <p>
        The knockout stage includes the quarter-finals, semi-finals, and the
        final. In the quarter-finals, the first-placed team of each group plays
        against the second-placed team of another group. The winners advance to
        the semi-finals, and the winners of the semi-finals move on to the final
        match to compete for the gold medal.
      </p>

      <h3>Historical Context</h3>
      <p>
        Football has been a part of the modern Olympic Games since 1900. The
        tournament provides a platform for young talent to showcase their skills
        on an international stage.
      </p>

      <h3>Key Dates</h3>
      <ul>
        <li><strong>Group Stage:</strong> July 24 - July 30, 2024</li>
        <li><strong>Quarter-Finals:</strong> August 2, 2024</li>
        <li><strong>Semi-Finals:</strong> August 5, 2024</li>
        <li><strong>Third Place Match:</strong> August 8, 2024</li>
        <li><strong>Final:</strong> August 9, 2024</li>
      </ul>

      <h3>Additional Information</h3>
      <p>
        For more details about the rules, team compositions, and historical
        data, please visit the official
        <a href="https://olympics.com/en/paris-2024" target="_blank"
          >Olympic website</a
        >.
      </p>
    </section>
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
import logo from "@/assets/flags/logo.png"; // Assurez-vous que le chemin du logo est correct

export default {
  name: "HomePage",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  background-color: rgb(252, 250, 232);
  padding: 20px;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
header .logo {
  margin-bottom: 20px;
}
.intro {
  margin-bottom: 30px;
}
.start-button {
  background-color: #856427; /* Darker green on hover */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.start-button:hover {
  background-color: #694d19; /* Darker green on hover */
}
.info {
  text-align: left;
  margin: 0 auto;
  max-width: 800px;
}
.info h2,
.info h3 {
  color: #333;
}
.info ul {
  list-style-type: none;
  padding: 0;
}
.info ul li {
  margin: 5px 0;
}

.footer {
  margin-top: 20px;
  padding: 10px;
  text-align: center;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-logo {
  width: 100px;
  margin-bottom: 10px;
}
</style>
