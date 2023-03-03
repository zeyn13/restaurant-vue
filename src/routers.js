import Home from "./components/Home.vue";
import Register from "./components/Register.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";

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
