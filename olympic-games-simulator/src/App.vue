<template>
  <div id="app">
    <header>
      <img src="@/assets/flags/logo.png" alt="Olympic Logo" width="200" />
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
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
header img {
  margin-bottom: 10px;
}
</style>
