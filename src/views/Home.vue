<template>
  <div id="home">
    <div id="front">
      <Navbar/>
      <div id="title">
        <Title/>
      </div>
    </div>

    <div id="bottom">
      This is a testing component for uploading img
      <uploader/>
    </div>
  </div>
</template>

<script>
import Title from '../components/title';
import Navbar from "../components/navbar";
import uploader from "../components/uploader";

export default {
  name: "Home",
  components: {
    Title, Navbar, uploader
  },
}
</script>

<style scoped>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

#title {
  text-align: center;
}
</style>