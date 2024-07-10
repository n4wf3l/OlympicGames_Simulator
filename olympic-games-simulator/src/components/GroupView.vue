<template>
  <div class="group-view">
    <h2>{{ groupName }}</h2>
    <ul>
      <li v-for="team in teams" :key="team">{{ team }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GroupView",
  props: {
    groupName: String,
    teams: Array,
  },
};
</script>

<style scoped>
.group-view {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  text-align: center;
}
.group-view h2 {
  color: #333;
}
.group-view ul {
  list-style-type: none;
  padding: 0;
}
.group-view li {
  margin: 5px 0;
}
</style>
