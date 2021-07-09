<template>
<button @click ='callAlg'>Test</button>
</template>

<script>
export default {
  name: "TestCall"
}

methods:{
  callAlg() {
    this.axios({
      method: 'post',
      url:'/test',
      data: {'url': "baidu.com"},
    })
  }
}
</script>

<style scoped>

</style>