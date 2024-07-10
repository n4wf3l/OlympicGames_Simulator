<template>
  <div id="app">
    <header>
      <img src="@/assets/flags/logo.png" alt="Olympic Logo" width="50" />
      <h1>Jeux Olympiques - Équipes Qualifiées par Groupe</h1>
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
