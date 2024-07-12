import { createRouter, createWebHashHistory } from "vue-router";
import GroupsOverview from "./components/GroupsOverview.vue";
import QuarterFinals from "./components/QuarterFinals.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/groupsoverview",
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
  history: createWebHashHistory(),
  routes,
});

export default router;
