<template>
  <div class="hello">
    <br>
    <h2>
      Intelligent Poster Generator.
    </h2>
    <br>
    <h1>
      Make an awesome poster
      <br>
      from any image
    </h1>

    <br>

    <my_carousel></my_carousel>

    <br>

    <uploader></uploader>

    <br>
    <p>All user photo are automatically deleted
      <br>
      after being processed
    </p>
    <b-button>Try demo photo</b-button>


  </div>
</template>

<script>
import my_carousel from "./carousel";
import uploader from "./uploader";

export default {
  name: 'Title',
  components: {
    my_carousel, uploader
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Knewave&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crete+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

h1 {
  font-family: 'Merriweather', serif;
  font-size: 70px
}

h2 {
  font-family: 'Merriweather', serif;
  font-size: 30px
}

h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  color: #5cb85c;
}

p {
  color: #808080
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
