<template>
  <nav class="navbar-main">
    <div class="brand">
      <img src="./../assets/brand.png">   
    </div>
  </nav>
</template>

<script>

</script>

<style>
.navbar-main {
  position: fixed;
  display: flex;
  background-color: white;
  padding: 30px;
  width: 50px;
  height: 100%;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16), 0 3px 20px rgba(0, 0, 0, 0.39);
  z-index: 3;
}
.navbar-main .brand img {
  width: 100%;
}
</style>
