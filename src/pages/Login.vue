import router from '@/router'; import { handleError } from 'vue';

<template>
  <div class="login-container">
    <div class="login-form-container">
      <form id="loginForm" @submit="handleSubmit" novalidate autocomplete="off">
        <h3>LOGIN</h3>

        <div v-if="errors.length" class="error-box">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>

        <div class="form-group">
          <input
            type="email"
            id="uEmail"
            name="uEmail"
            class="form-control"
            placeholder="Enter your email"
            v-model="loginObj.email"
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            id="uPass"
            name="uPass"
            class="form-control"
            placeholder="Enter your password"
            v-model="loginObj.pass"
          />
        </div>

        <div class="form-group">
          <input type="submit" value="Login now" class="btn" />
          <p>
            Don't have an account ?
            <router-link @click="scrollToTop()" to="/register"
              >Create one</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { def } from "@vue/shared";
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "Login",

  data() {
    return {
      loginObj: { email: "", pass: "" },
      matchUser: undefined,
      errors: [],
    };
  },

  methods:{
    ...map
  }
};
</script>
