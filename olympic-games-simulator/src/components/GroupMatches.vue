<template>
  <div class="group-matches">
    <h2>{{ groupName }}</h2>
    <div v-for="match in matches" :key="match.id">
      <span>{{ match.team1 }} vs {{ match.team2 }}</span>
      <input
        type="number"
        v-model.number="match.team1Score"
        placeholder="Score {{ match.team1 }}"
      />
      <input
        type="number"
        v-model.number="match.team2Score"
        placeholder="Score {{ match.team2 }}"
      />
      <button @click="submitScore(match)">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GroupMatches",
  props: {
    groupName: String,
    matches: Array,
  },
  methods: {
    submitScore(match) {
      this.$emit("submit-score", match);
    },
  },
};
</script>

<style scoped>
.group-matches {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
}
.group-matches h2 {
  color: #333;
}
.group-matches input {
  margin: 5px;
}
</style>
