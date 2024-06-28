<template>
  <div class="wrapper">
    <header class="header text-danger">DYM Call Cener</header>
    <aside class="sidebar">
      <div class="Main">
        <router-link to="/">Home</router-link><br>
        <div v-if="!isLogined">
          <router-link to="/login">Login</router-link><br>
        </div>
        <div v-else="!isLogined">
          <router-link to="/industry_list">Industry List</router-link><br>
          <router-link to="/about">About</router-link><br>
          <a class="nav-link" @click.prevent="handleLogout">LogOut</a>
        </div>
      </div>
    </aside>
    <article class="content">
      <router-view></router-view>
    </article>
    <footer class="footer">My footer</footer>
  </div>
</template>
<script>
import useAuthStore from "@store/AuthStore.js"
import { defineComponent, computed} from "vue";
export default defineComponent({
  name: "App",
  data() {
    return {};
  },
  computed: {
    isLogined() {
      let _access_token = localStorage.getItem("access_token");
      let authStore = useAuthStore();
      if (_access_token!=null && _access_token!="" ){
        authStore.setAccessToken(_access_token)
      }
      let currentAccessToken=authStore.getAccessToken()
      return currentAccessToken!=null && currentAccessToken!=""
    },
  },
  methods:{
    handleLogout(){
      let authStore = useAuthStore();
      authStore.setAccessToken("");
      localStorage.removeItem('access_token');
      this.$router.push({ path: '/' })
    }
  },  
});
</script>