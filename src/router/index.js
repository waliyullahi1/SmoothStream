import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: () => import("../views/dashbord.vue"),
    },

    {
      path: "/view",
      name: "viewchart",
      component: () => import("../views/viewchart.vue"),
    },
    {
      path: "/collection",
      name: "collection",
      component: () => import("../views/collection.vue"),
    },

    {
      path: "/test",
      name: "test",
      component: () => import("../views/test.vue"),
    },
  ],
});

export default router
