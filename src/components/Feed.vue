<template>
  <div class="wrapper" v-if="this.isReady">
    <notification-new-posts
      v-on:press="updatePosts()"
      :count="this.count_newPosts"
      v-if="this.count_newPosts > 0"
    />

    <!-- Consists of multiple posts -->
    <Post v-for="post in this.posts" :key="post.postID" :postData="post"/>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import NotificationNewPosts from "@/components/NotificationNewPosts.vue";
import { setInterval, clearInterval } from "timers";

import moment from "moment";

export default {
  name: "Feed",
  components: {
    Post,
    NotificationNewPosts
  },
  data() {
    return {
      isReady: false,
      posts: [],
      newPosts: [],
      polling: null,
      count_newPosts: 0,
      timestamp_lastUpdate: null
    };
  },
  methods: {
    fetchtPosts() {
      this.$store.dispatch("fetchPosts").then(response => {
        this.posts = response;

        // Done fetching posts, show them
        this.isReady = true;
      });
    },
    updatePosts() {
      console.log("fetching new posts...");

      // Add new posts to posts array
      this.newPosts.map(post => {
        console.log(post)
        this.posts.push(post);
      });

      this.count_newPosts = 0;
      this.setLastUpdateTimeStamp();
    },
    checkForNewPosts() {
      console.log("checking for new posts...");

      this.$store
        .dispatch("fetchPostsNew", { timestamp: this.timestamp_lastUpdate })
        .then(response => {
          this.newPosts = response;
          if ((this.newPosts.length - 1) > 0) {
            console.log("There are new posts available.");
            this.count_newPosts = this.newPosts.length - 1;
          } else {
            console.log("No new posts.");
          }
        });
    },
    setLastUpdateTimeStamp() {
      // Current datetime
      let now = moment().format("YYYY-M-D H:m:s");
      this.timestamp_lastUpdate = now;
    }
  },
  mounted() {
    this.fetchtPosts();

    this.setLastUpdateTimeStamp();

    // Begin automatic polling
    this.polling = setInterval(() => {
      this.checkForNewPosts();
    }, 5000);
  },
  beforeDestroy() {
    // Remove interval before leaving page
    clearInterval(this.polling);
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
