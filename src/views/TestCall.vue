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
    },
    getMessage() {
      const path = 'http://localhost:5000/ping';
      axios.get(path)
          .then((res) => {
            this.msg = res.data;
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
          });
    },
  },
  created(){
    this.getMessage();
    this.callAlg();
  }
};

</script>

<style scoped>

</style>