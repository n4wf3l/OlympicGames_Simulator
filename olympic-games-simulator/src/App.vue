<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img src="@/assets/flags/logo.png" alt="Olympic Logo" width="50" />
      </router-link>
      <h1>Football Simulator — Olympic Games 2024</h1>
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
#app {
  text-align: center;
  background-color: rgb(252, 250, 232);
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
header img {
  margin-right: 20px;
}
</style>
