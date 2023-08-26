import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/material",
      name: "material",
      component: () => import("@/views/Material.vue"),
    },
    {
      path: "/wizard",
      name: "wizard",
      component: () => import("@/views/wizard/Wizard.vue"),
      children: [
        {
          path: "amounts",
          name: "amounts",
          component: () => import("@/views/wizard/tabs/Amounts.vue"),
        },
        {
          path: "people",
          name: "people",
          component: () => import("@/views/wizard/tabs/People.vue"),
        },
        {
          path: "food",
          name: "food",
          component: () => import("@/views/wizard/tabs/Food.vue"),
        },
      ],
    },
    {
      path: "/results",
      name: "results",
      component: () => import("@/views/Results.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("@/views/Terms.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/views/Privacy.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.vue"),
    },
  ],
});

export default router;
