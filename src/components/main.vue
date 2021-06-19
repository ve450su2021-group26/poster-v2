<template>
  <div class="hello">
    <h1 style="font-size:30px">{{ msg }}</h1>
    <p style="font-size: x-large">
      Input an image and a text for your product!
    </p>

  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
