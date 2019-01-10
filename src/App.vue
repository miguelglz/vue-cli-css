<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Gallery />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Gallery from './components/Gallery.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Gallery
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.myclass2{
  display: none;
}
#container1.myclass3{
  width: 100%;
}
#container2.myclass4{
  color: black;
}
.myclass5{
  border: 1 solid blue;
}
.myclass6{
  height: 100px;
}
</style>
