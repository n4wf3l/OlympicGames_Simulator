<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img src="@/assets/flags/logo.png" alt="Olympic Logo" width="50" />
      </router-link>
      <h1><em>Football Simulator — Olympic Games 2024</em></h1>
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

@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
  }

  header img {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
