import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";
import Register from "../pages/Register.vue";
import Login from "../pages/Login.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Register",
    component: Register,
    path: "/register",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
