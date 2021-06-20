<template>
  <div id="app">

    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <v-img
                max-height="200px"
                max-width="200px"
                src="./assets/huawei_ji.png"
                class="ml-auto"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <div class="text-xs-center" id="nav">
      <h3>VE450 Capstone Design | 2021 Summer</h3>
      <h3>Index</h3>
      <h3>About</h3>
    </div>

    <div id="title">
      <img alt="logo" src="./assets/huawei_ji.png" width="552" height="200"/>
      <Title/>
    </div>
  </div>
</template>

<script>
import Title from './components/intro.vue'

export default {
  name: 'App',
  components: {
    Title
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
