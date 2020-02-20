<template>
  <div id="app">
    <TopBar />
    <Feed />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Feed from './components/Feed.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    Feed
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100vh;
  background-color: #fafcff;
}

/* Common styles */
.box-shadow {
  box-shadow: 0px 5px 18px 0px rgba(79,79,79,0.04);
}

</style>
