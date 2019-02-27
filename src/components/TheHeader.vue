<template>
  <nav class="navbar-main">
    <div class="brand">
      <div class="brand-background"></div>
      <img src="./../assets/brand.png">
    </div>
    <div class="menu-main">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="//portfolio.aftarfadilah.com">Portfolio</a></li>
        <li><a href="//blog.aftarfadilah.com">Blog</a></li>
        <li>About</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}

document.addEventListener("DOMContentLoaded", function() {
  var menuMain = document.querySelector('.menu-main')
  var brand = document.querySelector('.brand')

  brand.addEventListener("click", function() {
    this.classList.toggle("toggled")
    this.classList.add("toggling")
    menuMain.classList.add("toggling")
    menuMain.classList.toggle("toggled")
    setTimeout(function () {
      brand.classList.remove("toggling")
      menuMain.classList.remove("toggling")
    }, 500)
  }, false);
}, false)

</script>

<style>
.navbar-main {
  position: fixed;
  display: flex;
  background-color: white;
  width: 110px;
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
.brand {
  position: absolute;
  transition: 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  padding: 0 25px;
  z-index: 1;
  transform: translateY(30px);
  cursor: pointer;
}
.brand.toggled {
  transform: translateY(-100%);
  padding-bottom: 10px;
}
.brand-background {
  position: absolute;
  top: -45px;
  left: 0;
  width: 100%;
  height: calc(100% + 15px);
  background-color: white;
  z-index: -1;
}
.menu-main ul {
  padding: 0;
  list-style: none;
  text-align: center;
}
.menu-main li {
  line-height: 1.5;
}
.menu-main a {
  text-decoration: none;
  color: inherit;
}
</style>
