<template>
  <div class="post box-shadow">
    <div class="section-user">
      <div class="user-img">
        <img :src="getAvatar()" class="avatar">
      </div>
      <div class="text user-name">{{ this.postData.username }}</div>
      <font-awesome-icon icon="ellipsis-h" class="icon-options"/>
    </div>
    <div class="section-content">
      <div class="text">{{ this.postData.postContent }}</div>
    </div>
    <div class="section-about">
      <div class="text">{{ this.postData.timestamp }}</div>
    </div>
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
      return require('@/assets/avatars/' + this.postData.avatar + '.png');
    }
  }
};
</script>

<style scoped>
.post {
  flex: 0 0 100%;
  padding: 10px 0px 10px 13px;
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
  padding: 5px 5px 18px 0px;
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

/* Post content */
.section-content {
  width: 100%;
  padding: 0px 11px 7px 0px;
  text-align: left;
}
.section-content > .text {
  font-size: 16px;
  color: grey;
  padding: 0px 0px 0px 5px;
  display: inline-flex;
  line-height: 24px;
}

/* About */
.section-about > .text {
  font-size: 13px;
  color: rgb(182, 182, 182);
  padding: 0px 0px 0px 5px;
  display: inline-flex;
}

/* Actions */
.section-actions {
  width: 100%;
  padding: 10px 5px 5px 5px;
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
