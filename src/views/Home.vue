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
    <button type="primary" @click="onSubmit">调用算法</button>
    <button @click='$router.push({name: "results"})'>进入结果页面</button>
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
  data(){
    return {
      pageTitle: "Flask And Vue",
      s: "callAlg"
    }
  },
  methods: {
    onSubmit() {
      // console.log(post_data);
      // 定义发送请求的参数
      var post_data = this.s      // 发起post请求
      this.axios.post(
          "../app.py",
          post_data
      ).then(
          res => {
            console.log(res.data)
            // 将返回的结果绑定在sum上，就会及时展示在前端
            // 如果未展示，检查返回数据的格式
            this.results = res.data.res
          }
      ).catch(res => {
        // 此处处理状态码不是200的返回
        console.log(res.data)
      })
    }
  }
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