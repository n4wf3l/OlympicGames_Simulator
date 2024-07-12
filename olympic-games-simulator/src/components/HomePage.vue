<template>
  <div class="home">
    <header>
      <img
        src="@/assets/flags/logo.png"
        alt="Olympic Logo"
        class="logo"
        width="10%"
      />
    </header>
    <section class="intro">
      <p>Welcome to the Football Simulator for the 2024 Olympic Games!</p>
      <router-link to="/groupsoverview">
        <button class="start-button">🚀 Start Simulation</button>
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
        ⚽ Football is one of the most popular sports at the Olympic Games. Here
        are some key points about the competition:
      </p>
      <ul>
        <li>
          <strong>🎂 Age Limit:</strong> Men's teams are primarily composed of
          players under 23 years old (born on or after January 1, 2001), with
          the allowance of three over-age players.
        </li>
        <li>
          <strong>📝 Team Composition:</strong> Each team can register up to 18
          players for the tournament.
        </li>
        <li>
          <strong>🏆 Tournament Format:</strong> The competition begins with a
          group stage followed by knockout rounds.
        </li>
        <li>
          <strong>🗼 Venues:</strong> Matches will be held in several cities,
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
        Football has been a significant part of the modern Olympic Games since
        1900. The early tournaments saw club teams participating, with Upton
        Park F.C. winning the first gold medal in Paris. By 1908, national teams
        began competing, with Great Britain dominating the early years, securing
        gold in 1908 and 1912.
      </p>
      <p>
        The 1920s marked a pivotal era, introducing non-European teams, with
        Egypt participating in 1920 and Uruguay winning consecutive gold medals
        in 1924 and 1928. This period highlighted the growing popularity and
        competitive nature of Olympic football.
      </p>
      <p>
        Post-World War II, Eastern European nations dominated due to their
        state-sponsored amateur athletes, with Hungary, the Soviet Union, and
        Yugoslavia securing multiple medals. The introduction of professional
        players in 1984 transformed the competition, leading to diverse winners
        including Nigeria in 1996 and Cameroon in 2000.
      </p>
      <p>
        Women's football was introduced in 1996, running parallel to the men's
        tournament but without age restrictions. The Olympic Games continue to
        be a platform for showcasing young talent and promoting global football
        excellence.
      </p>
      <h3>Key Dates</h3>
      <table class="key-dates-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Stadium</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>📅 <strong>Group Stage</strong></td>
            <td>July 24 - July 30, 2024</td>
            <td>🏟️ Various Stadiums</td>
            <td>⏰ See Schedule</td>
          </tr>
          <tr>
            <td>📅 <strong>Quarter-Finals</strong></td>
            <td>August 2, 2024</td>
            <td>🏟️ Parc des Princes, Paris</td>
            <td>⏰ 3, 5, 7 & 9 PM</td>
          </tr>
          <tr>
            <td>📅 <strong>Semi-Finals</strong></td>
            <td>August 5, 2024</td>
            <td>🏟️ Stade Vélodrome, Marseille</td>
            <td>⏰ 3 & 5 PM</td>
          </tr>
          <tr>
            <td>📅 <strong>Third Place Match</strong></td>
            <td>August 8, 2024</td>
            <td>🏟️ Stade Geoffroy-Guichard, Saint-Étienne</td>
            <td>⏰ 5 PM</td>
          </tr>
          <tr>
            <td>📅 <strong>Final</strong></td>
            <td>August 9, 2024</td>
            <td>🏟️ Stade de France, Paris</td>
            <td>⏰ 6 PM</td>
          </tr>
        </tbody>
      </table>

      <h3>Additional Information</h3>
      <p>
        For more details about the rules, team compositions, and historical
        data, please visit the official
        <a
          href="https://olympics.com/en/paris-2024"
          target="_blank"
          style="color: inherit; text-decoration: none; color: #694d19"
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
@import url("https://fonts.googleapis.com/css2?family=Anton+SC&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anton+SC&family=Bebas+Neue&display=swap");

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
  font-family: "Bebas Neue", sans-serif;
}
header .logo {
  width: 200px; /* Taille par défaut pour les écrans plus grands */
}
@media (max-width: 768px) {
  header .logo {
    width: 150px; /* Taille réduite pour les écrans plus petits */
  }
}
.intro {
  margin-bottom: 30px;
  font-family: "Bebas Neue", sans-serif;
}
.start-button {
  background-color: #856427; /* Darker green on hover */
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 1px;
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
  font-family: "Bebas Neue", sans-serif;
}
.info ul {
  list-style-type: none;
  padding: 0;
}
.info ul li {
  margin: 5px 0;
}
.key-dates-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.key-dates-table th,
.key-dates-table td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: left;
}

.key-dates-table th {
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
}

.key-dates-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.key-dates-table tr:hover {
  background-color: #f1f1f1;
}

.key-dates-table td {
  vertical-align: middle;
}

.key-dates-table td:first-child {
  font-weight: bold;
  color: #333;
}

@media (max-width: 768px) {
  .key-dates-table {
    width: 100%; /* S'assure que le tableau prend toute la largeur sur les petits écrans */
  }
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
