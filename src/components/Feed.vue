<template>
  <div class="wrapper" v-if="this.isReady">
    <!-- Consists of multiple posts -->
    <Post v-for="post in this.posts" :key="post.postID" :postData="post"/>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "Feed",
  components: {
    Post
  },
  data() {
    return {
      isReady: false,
      posts: [],
    };
  },
  methods: {
    fetchtPosts() {
      this.$store.dispatch("fetchPosts").then(response => {
        this.posts = response;

        // Done fetching posts, show them
        this.isReady = true;
      });
    }
  },
  mounted() {
    this.fetchtPosts();
  }
};
</script>

<style scoped>
.wrapper {
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 5px 10px 75px;
  margin-top: 0px;
}
</style>
