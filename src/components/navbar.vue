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
      <a class="navbar-brand mx-auto" href="#">VE450 Capstone Design</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>


    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <img src="../assets/huawei.png" width="70" height="56" alt="">
          <img src="../assets/ji.png" width="86" height="56" alt="">

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
.navbar {
  z-index:1000;
  margin-left: 0px;
}

.navbar-transparent {
  background:transparent;
}

</style>