<template>
<button @click ='callAlg'>Test</button>
</template>

<script>
import axios from 'axios';
export default {
  name: "TestCall",
  data(){
    return {
      episodes:['baidu.com'],
    };
  },
  methods: {
    callAlg() {
      const path = "http://localhost:5000/test";
      axios.post(path, this.episodes)
    }
  },
  created(){
    this.callAlg();
  }
};

</script>

<style scoped>

</style>