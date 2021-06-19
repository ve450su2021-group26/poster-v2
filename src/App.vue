<template>
  <div id="app">
    <img alt="logo" src="./assets/huawei_ji.png" width="552" height="200"/>
    <Intro msg="Welcome to our Intelligent Poster Generator!"/>
  </div>
</template>

<script>
import Intro from './components/main.vue'

export default {
  name: 'App',
  components: {
    Intro
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
