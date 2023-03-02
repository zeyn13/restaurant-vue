import Home from "./components/Home.html";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
