import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../features/home/HomeView.vue";
import AboutView from "@/features/about/AboutView.vue";
import { homeName, homePath } from "@/features/home/home.routes";
import IntroductionPage from "@/features/docs/introduction/IntroductionPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: homePath,
      name: homeName,
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/docs",
      name: "docs",
      children: [
        {
          path: "",
          name: "docs-index",
          component: IntroductionPage,
        },
        {
          path: "/introduction",
          name: "docs-introduction",
          component: IntroductionPage,
        },
      ],
    },
  ],
});

export default router;
