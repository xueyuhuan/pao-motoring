import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:"/details",
    name:"details",
    component:()=>import("../views/Details")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/cooperation",
    name: "cooperation",
    component: () =>
        import(/* webpackChunkName: "cooperation" */ "../views/Cooperation.vue")
  },
  {
    path: "/hr",
    name: "hr",
    component: () =>
        import(/* webpackChunkName: "hr" */ "../views/Hr.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
        import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  }
];

const router = new VueRouter({
  routes
});

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

export default router;
