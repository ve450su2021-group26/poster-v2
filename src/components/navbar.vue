<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-fixed-top navbar-transparent" style="background-color: #ffffff;">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <ul class="navbar-nav me-auto">
        <li class="nav-item active">
          <router-link to="/"  class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>

    </div>


    <div class="mx-auto order-0">
      <a class="navbar-brand mx-auto" href="">VE450 Capstone Design</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>


    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href = "https://www.huawei.com/">
            <img src="../assets/huawei.png" width="55" height="56" alt="huawei">
          </a>
        </li>
        <li class="nav-item">
          <a class ="nav-link" href = "https://www.ji.sjtu.edu.cn/">
            <img src="../assets/ji.png" width="324.8" height="56" alt="ji">
          </a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Knewave&display=swap');
.navbar {
  font-family: 'Knewave', cursive;
  font-size: x-large;
  z-index: 1000;
  margin-left: 0;
}
.navbar-transparent {
  background:transparent;
}

</style>