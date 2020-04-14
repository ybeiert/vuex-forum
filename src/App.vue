<template>
  <div id="app">
    <Header/>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  background-color: #e1e1e1;
}
#app .view {
  width: 90%;
  margin: 0 auto;
  /* padding-top: 20px; */

  margin-top: 20px;
}
</style>
