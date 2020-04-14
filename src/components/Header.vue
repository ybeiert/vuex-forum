<template>
  <div class="top">
    <div class="top-inner">
      <div>
        <router-link to="/vue-forum">
          <h1 class="biaoti">
            <!-- <router-link to="/" class="biaoti"> -->

            <img src="https://www.vue-js.com/public/images/vue.png" alt>

            <span class="word">Vue.js</span>
            <!-- </router-link> -->
          </h1>
        </router-link>
      </div>
      <nav>
        <router-link to="/vue-forum">首页</router-link>
        <div v-if="!loginInfo">
          <input type="text" v-model="val" class="login">
          <button @click="login(val)">登录</button>
        </div>
        <div v-else>
          <router-link :to="`/vue-forum/user/${loginInfo.loginname}`">
            <img style="width: 50px;margin-top:10px;" :src="loginInfo.avatar_url" alt>
          </router-link>

          <button @click="logout">登出</button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "app",
  data() {
    return {
      val: "08a4a820-dbf5-4f55-8b8a-5420db26eef8"
    };
  },
  computed: {
    ...mapState({
      loginInfo: state => state.login.info
    })
  },
  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["logout"])
  },
  created() {
    // 获取本地存储的登录信息
    if (sessionStorage.success) {
      // 登陆过了之后刷新的 要重新把 login 数据更新
      this.$store.commit("login", {
        id: sessionStorage.id,
        loginname: sessionStorage.loginname,
        avatar_url: sessionStorage.avatar_url,
        success: true
      });
    }
  }
};
</script>

<style>
.top {
  width: 100%;
  background-color: #1c6132;
}
.top-inner {
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.top-inner h1 {
  line-height: 45px;
}
.top-inner img {
  display: block;
  width: 45px;
  height: 45px;
  margin-right: 5px;
}
.top .biaoti {
  display: flex;
  color: #fff;
}
.word {
  font-size: 20px;
  /* font-weight: normal; */
}
.top nav {
  display: flex;
}
.top nav div {
  display: flex;
}
nav a {
  line-height: 30px;
  display: block;
  line-height: 65px;
  color: #fff;
  margin-right: 5px;
}
body .top .top-inner nav input.login {
  outline: none;
  box-shadow: none;
  margin: 22px 5px 0 0;
  color: #fff;
}
nav button {
  border: none;
  background: transparent;
  color: #fff;
  outline: none;
}
</style>
