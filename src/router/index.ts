import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/wizard",
      name: "wizard",
      component: () => import("../views/wizard/Wizard.vue"),
      children: [
        {
          path: "amounts",
          name: "amounts",
          component: () => import("../views/wizard/tabs/Amounts.vue"),
        },
        {
          path: "people",
          name: "people",
          component: () => import("../views/wizard/tabs/People.vue"),
        },
        {
          path: "foodItems",
          name: "foodItems",
          component: () => import("../views/wizard/tabs/FoodItems.vue"),
        },
        {
          path: "summary",
          name: "summary",
          component: () => import("../views/wizard/tabs/Summary.vue"),
        },
      ],
    },
  ],
});

export default router;
