<template>
  <div class="post box-shadow">
    <!-- User information (avatar, image) -->
    <div class="section-user">
      <div class="user-img">
        <img :src="getAvatar()" class="avatar">
      </div>
      <div class="text user-name">{{ this.postData.username }}</div>
      <font-awesome-icon icon="ellipsis-h" class="icon-options"/>
    </div>

    <!-- Posted image(s) -->
    <div class="section-content-image" v-if="hasImages()">
      <img :src="getImage(0)" class="image">
    </div>

    <!-- Posted text -->
    <div class="section-content-text">
      <div class="text">{{ this.postData.postContent }}</div>
    </div>

    <!-- Hashtags -->
    <div class="section-content-hashtags" v-if="hasHashtags()">
      <div class="text hashtag" v-for="tag in this.postData.hashtags" :key="tag">
        {{ "#" + tag }}
      </div>
    </div>

    <!-- Post details (timestamp) -->
    <div class="section-about">
      <div class="text">{{ this.postData.timestamp }}</div>
    </div>

    <!-- Post actions (like, comment) -->
    <div class="section-actions">
      <font-awesome-icon icon="heart" class="action"/>
      <font-awesome-icon icon="comment" class="action"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    postData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {
    getAvatar() {
      return require("@/assets/avatars/" + this.postData.avatar + ".png");
    },
    getImage(index) {
      return require("@/assets/posts/images/" +
        this.postData.images[index] +
        ".jpg");
    },
    // Returns true if this post contains user-posted images
    hasImages() {
      if (this.postData.images != null && this.postData.images.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    hasHashtags() {
      if (this.postData.hashtags != null && this.postData.hashtags.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.post {
  flex: 0 0 100%;
  padding: 10px 0px 10px 0px;
  background-color: #ffffff;
  border: 1px solid rgb(236, 236, 236);
  margin-bottom: 22px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  transition: .25s;
}

.post:hover {
  box-shadow: 0px 5px 18px 0px rgba(79,79,79,0.1);
}

/* User */
.section-user {
  width: 100%;
  padding: 5px 5px 18px 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.section-user > .user-img {
  width: 29px;
  height: 29px;
  border-radius: 30px;
  background-color: grey;
  display: inline-flex;
  margin: 0px 0px 0px 5px;
}
.section-user > .user-name {
  font-size: 15px;
  color: grey;
  padding: 0px 0px 0px 12px;
  display: inline-flex;
}
.section-user > .icon-options {
  font-size: 20px;
  display: inline-flex;
  color: rgb(218, 218, 218);
  margin-right: 10px;
  transition: 0.15s;
  margin-left: auto;
}
.section-user > .icon-options:hover {
  color: rgb(165, 165, 165);
  cursor: pointer;
}

/* Text post */
.section-content-text {
  width: 100%;
  padding: 0px 11px 0px 18px;
  text-align: left;
}
.section-content-text > .text {
  font-size: 16px;
  color: grey;
  padding: 0px 0px 0px 0px;
  display: inline-flex;
  line-height: 24px;
}

/* Hashtags */
.section-content-hashtags {
  width: 100%;
  padding: 0px 11px 7px 18px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
}
.section-content-hashtags > .hashtag {
  font-size: 14px;
  color: rgb(160, 160, 160);
  padding: 2px 6px 2px 6px;
  display: inline-flex;
  background-color: rgb(241, 241, 241);
  border-radius: 3px;
  margin: 5px 8px 3px 0;
  cursor: pointer;
  transition: .15s
}
.section-content-hashtags > .hashtag:hover {
  background-color: rgb(174, 104, 221);
  color: #ffffff;
}

/* Image post */
.section-content-image {
  padding: 0px 0px 0px 0px;
  text-align: center;
  overflow: hidden;
  max-height: 950px;
  background-size: cover;
  margin-bottom: 17px;
}
.section-content-image > .image {
  width: 100%;
  padding: 0px 0px 0px 0px;
  overflow: hidden;
  
}

/* About */
.section-about > .text {
  font-size: 13px;
  color: rgb(182, 182, 182);
  padding: 7px 0px 0px 18px;
  display: inline-flex;
}

/* Actions */
.section-actions {
  width: 100%;
  padding: 10px 5px 5px 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.section-actions > .action {
  font-size: 20px;
  display: inline-flex;
  color: rgb(218, 218, 218);
  margin-right: 10px;
  transition: 0.15s;
}
.section-actions > .action:hover {
  color: rgb(221, 104, 104);
  cursor: pointer;
}
</style>
