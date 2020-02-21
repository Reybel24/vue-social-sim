<template>
  <div class="wrapper">
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
      posts: [
        {
          postID: 0,
          username: "jimbo04",
          postContent: "Hello world! What a wonderful day!",
          likes: 7,
          comments: 2
        },
        {
          postID: 1,
          username: "jack_green",
          postContent: "Never knew tomatoes were a fruit.",
          likes: 19,
          comments: 5
        },
        {
          postID: 2,
          username: "QueenBeeXY",
          postContent: "Check out this photo I took on my trip last week!",
          likes: 58,
          comments: 0
        },
        {
          postID: 2,
          username: "thomas_dankengine",
          postContent: "so it looks like i've managed to fill over 100gb of space on my phone with memes alone...I wonder if I have an addiction. On second thought, I don't have enough memes tbh. Memes are love, memes are life.",
          likes: 58,
          comments: 0
        },
        {
          postID: 2,
          username: "spartacus",
          postContent: "Don't forget to exercise atleast once an hour to stay in shape!",
          likes: 58,
          comments: 0
        }
      ]
    };
  }
};
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
