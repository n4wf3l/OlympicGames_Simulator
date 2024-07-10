import { createRouter, createWebHistory } from "vue-router";
import GroupsOverview from "./components/GroupsOverview.vue";
import QuarterFinals from "./components/QuarterFinals.vue";

const routes = [
  {
    path: "/",
    name: "GroupsOverview",
    component: GroupsOverview,
  },
  {
    path: "/quarter-finals",
    name: "QuarterFinals",
    component: QuarterFinals,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
