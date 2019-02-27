<template>
  <div class="page-404">
    <div class="content">
      <h1>404</h1>
      Those asteroid just hit our spaceship!
    </div>
  </div>
</template>

<script>
export default {
  name: "Page 404"
}
</script>

<style>
.page-404 {
  height: 100vh;
  padding: 30px;
  background-color: #08AEEA;
  background-image: linear-gradient(315deg, #08AEEA 0%, #2AF598 100%);
  display: flex;
  align-items: center;
  color: white;
}
.page-404 .content h1 {
  display: block;
  font-size: 76pt;
  margin-bottom: 5px;
  line-height: 1;
}
</style>