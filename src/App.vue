<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader"

export default {
  name: 'app',
  components: {
    TheHeader,
  }
}
</script>

<style>
html, body, div {
  margin: 0;
  box-sizing: border-box;
}
html {
  background-color: gainsboro;
}
body {
  margin-left: 110px;
}
#app {
  font-family: 'Maven Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
</style>
