import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/BlankLayout.vue"),
      children: [
        {
          path: "/",
          name: "Home",
          component: Home,
        },
        {
          path: "/login-form",
          name: "Form",
          component: () => import("../views/LoginFormView.vue"),
        },
      ],
    },
  ],
});

export default router;
