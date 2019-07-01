import Vue from "vue";
import Router from "vue-router";
const Home = () => import(/* webpackChunkName: "home" */ "./views/Home.vue");
const Game = () => import(/* webpackChunkName: "about" */ "./views/Game.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/game",
      name: "game",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Game
    }
  ]
});
