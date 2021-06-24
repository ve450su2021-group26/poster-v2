<template>
  <div id="app">
    <v-img
        max-height="200px"
        max-width="200px"
        src="./assets/huawei_ji.png"
        class="ml-auto"
    ></v-img>

    <Navbar/>

    <div id="title">
      <img alt="logo" src="./assets/huawei_ji.png" width="552" height="200"/>
      <Title> </Title>
    </div>
  </div>
</template>

<script>
import Title from './components/title.vue'
import Navbar from "./components/navbar";

export default {
  name: 'App',
  components: {
    Title, Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  margin-left: 30px;
}
#title {
  text-align: center;
}
</style>
