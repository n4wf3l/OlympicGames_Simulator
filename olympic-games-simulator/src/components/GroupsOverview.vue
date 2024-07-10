<template>
  <div class="groups-overview">
    <GroupView
      v-for="group in groups"
      :key="group.name"
      :groupName="group.name"
      :teams="group.teams"
    />
  </div>
</template>

<script>
import GroupView from "./GroupView.vue";

export default {
  name: "GroupsOverview",
  components: {
    GroupView,
  },
  data() {
    return {
      groups: [
        {
          name: "Groupe A",
          teams: ["France", "États-Unis", "Guinée", "Nouvelle-Zélande"],
        },
        { name: "Groupe B", teams: ["Argentine", "Maroc", "Irak", "Ukraine"] },
        {
          name: "Groupe C",
          teams: ["Ouzbékistan", "Espagne", "Égypte", "République dominicaine"],
        },
        { name: "Groupe D", teams: ["Japon", "Paraguay", "Mali", "Israël"] },
      ],
    };
  },
};
</script>

<style scoped>
.groups-overview {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
