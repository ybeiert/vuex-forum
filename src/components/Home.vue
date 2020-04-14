<template>
  <div class="home">
    <div class="home-top">
      <router-link
        :class="{active: $route.path === '/vue-forum/' || $route.path === '/vue-forum/all'||$route.path === '/vue-forum'}"
        to="/vue-forum/all"
      >全部</router-link>
      <router-link active-class="active" to="/vue-forum/good">精华</router-link>
      <router-link active-class="active" to="/vue-forum/weex">weex</router-link>
      <router-link active-class="active" to="/vue-forum/share">分享</router-link>
      <router-link active-class="active" to="/vue-forum/ask">问答</router-link>
      <router-link active-class="active" to="/vue-forum/job">招聘</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.home-top a {
  color: #369219;
  padding: 3px 4px;
  margin-right: 10px;
  font-size: 14px;
}
.home .active {
  color: #fff;
  background-color: #369219;
  border-radius: 4px;
}
.home .home-top {
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 4px 4px 0 0;
}
</style>
