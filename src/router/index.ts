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
      path: "/learn",
      name: "learn",
      component: Home,
    },
    {
      path: "/wizard",
      name: "wizard",
      component: () => import("@/views/wizard/Wizard.vue"),
      children: [
        {
          path: "",
          name: "event",
          component: () => import("@/views/wizard/tabs/Event.vue"),
        },
        {
          path: "",
          name: "party",
          component: () => import("@/views/wizard/tabs/Party.vue"),
        },
        {
          path: "",
          name: "check",
          component: () => import("@/views/wizard/tabs/Check.vue"),
        },
        {
          path: "",
          name: "food",
          component: () => import("@/views/wizard/tabs/Food.vue"),
        },
        {
          path: "results",
          name: "results",
          component: () => import("@/views/wizard/tabs/Results.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/views/Privacy.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("@/views/Error.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name === "learn") return { el: "#learn" };
  },
});

export default router;
