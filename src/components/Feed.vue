<template>
  <div class="wrapper">
    <!-- Consists of multiple posts -->
    <Post />
    <Post />
    <Post />


  </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'Feed',
  components: {
    Post
  }
}
</script>

<style scoped>
.wrapper {
  width: 750px;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 5px 10px 5px;
  margin: 0 auto;
  margin-top: 0px;
}

</style>
