<template>
  <div class="post box-shadow">
    <div class="section-user">
      <div class="user-img"></div>
      <div class="user-name">{{ this.user.username }}</div>
    </div>
    <div class="section-content">
      <div class="text">{{ this.user.postContent }}</div>
    </div>
    <div class="section-actions">
      <div class="action">Like</div>
      <div class="action">Comment</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      user: {
        username: "jimbo04",
        postContent: "Hello world! What a wonderful day!",
        likes: 7,
        comments: 2
      }
    };
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
}

/* User */
.section-user {
  width: 100%;
  padding: 5px 5px 18px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.section-user > .user-img {
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: grey;
  display: inline-flex;
  margin: 0px 0px 0px 5px;
}
.section-user > .user-name {
  font-size: 15px;
  color: grey;
  padding: 0px 0px 0px 15px;
  display: inline-flex;
}

/* Post content */
.section-content {
  width: 100%;
  padding: 5px 10px 5px 10px;
  text-align: left;
}
.section-content > .text {
  font-size: 16px;
  color: grey;
  padding: 0px 0px 0px 5px;
  display: inline-flex;
}

/* Actions */
.section-actions {
  width: 100%;
  padding: 5px 5px 18px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.section-actions > .action {
  display: inline-flex;
  background-color: blue;
}
</style>
