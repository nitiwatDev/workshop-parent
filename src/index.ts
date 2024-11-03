import { createWebHistory, createRouter } from "vue-router";
import ParentView from "@/views/ParentCom.vue";
import Home from "@/views/Home.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "home",
    },
  },
  {
    path: "/parent",
    name: "parent",
    component: ParentView,
    meta: {
      title: "parent",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta?.title as string) || "Vue3";
  next();
});

export default router;
