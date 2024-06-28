<template>
  <div class="submit-form">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" class="form-control" id="email" required v-model="LoginParams.email" name="email" />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" required v-model="LoginParams.password"
        name="password" />
    </div>    
    <button @click="handleLogin" class="btn btn-success" :disabled="loading">
      <span v-show="loading" class="spinner-border spinner-border-sm"></span>
      <span>Login</span>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import callAPI from "@repositories/HttpRepository.js"
import LoginParams from "@models/Request/Login.ts"
import useAuthStore from "@store/AuthStore.js"
export default defineComponent({
  name: "login-action",
  data() {
    return {
      LoginParams: {
        email: "",
        password: "",
      } as LoginParams,
      loading: false,      
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      let data = {
        email: this.LoginParams.email,
        password: this.LoginParams.password,
      };
      callAPI.callAPIMethodPost("auth/login", data).then((response) => {        
        if (response.data!=null){          
          let authStore = useAuthStore()
          localStorage.setItem('access_token',response.data.access_token)          
          authStore.setAccessToken(response.data.access_token)
          callAPI.updateBearToken(response.data.access_token)
          this.$router.push({ path: '/' })
        }
        else{
          this.loading = false;
        }
      });
    },
  },
});
</script>