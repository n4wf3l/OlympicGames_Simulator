<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>Jeux Olympiques - Équipes Qualifiées par Groupe</h1>
    </header>
    <GroupsOverview />
  </div>
</template>

<script>
import GroupsOverview from "./components/GroupsOverview.vue";

export default {
  name: "App",
  components: {
    GroupsOverview,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  background: #42b983;
  color: white;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
