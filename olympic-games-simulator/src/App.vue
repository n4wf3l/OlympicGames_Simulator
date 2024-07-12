<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img src="@/assets/flags/logo.png" alt="Olympic Logo" class="logo" />
      </router-link>
      <div class="text-container">
        <em>
          <h2 class="subtitle">
            Olympic <span class="games">G</span><span class="games">A</span
            ><span class="games">M</span><span class="games">E</span
            ><span class="games">S</span> 2024
          </h2>
        </em>
        <h1 class="title">Football Simulator</h1>

        <div class="hr-container">
          <hr class="custom-hr" />
          ⚽
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Anton+SC&family=Bebas+Neue&display=swap");

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(252, 250, 232);
}

#app {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgb(252, 250, 232);
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 2px;
}

header img {
  margin-right: 20px;
}

.logo {
  width: 100px !important; /* Ajustez la taille du logo si nécessaire */
  margin: 10px 0 !important; /* Ajuster la marge pour mieux espacer */
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
}

/* Container pour centrer le hr */
.hr-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Styles pour le hr personnalisé */
.custom-hr {
  width: 0;
  height: 2px;
  background: #d3c88f;
  border: none;
  animation: hr-animation 3s infinite;
}

/* Animation keyframes */
@keyframes hr-animation {
  0% {
    width: 0;
    opacity: 0;
  }
  25% {
    width: 50%;
    opacity: 1;
  }
  50% {
    width: 100%;
    opacity: 1;
  }
  75% {
    width: 50%;
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 0;
  }
}

.title {
  font-size: 2em !important;
  margin-top: 10px !important;
}

.subtitle {
  font-size: 1.5em !important;
  margin-bottom: 1px !important; /* Ajout d'une marge inférieure */
}

.games {
  display: inline-block !important;
}

.games:nth-child(1) {
  color: #0085c7 !important; /* Bleu */
}

.games:nth-child(2) {
  color: #f4c300 !important; /* Jaune */
}

.games:nth-child(3) {
  color: #000000 !important; /* Noir */
}

.games:nth-child(4) {
  color: #009f3d !important; /* Vert */
}

.games:nth-child(5) {
  color: #df0024 !important; /* Rouge */
}

@media (max-width: 768px) {
  header {
    flex-direction: column !important;
    text-align: center !important;
  }
  .text-container {
    align-items: center !important;
  }
  .logo {
    margin-bottom: 10px !important;
  }

  header img {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
