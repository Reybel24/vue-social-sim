<template>
  <div class="notification text" v-on:click="onPress()">
    {{ this.count }} new post{{ (this.count > 1) ? "s" : "" }}. Tap to refresh.
  </div>
</template>

<script>
export default {
  name: "notification-new-posts",
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    onPress() {
      this.$emit("press");
    }
  }
};
</script>

<style scoped>
.notification {
  flex: 0 0 20%;
  padding: 20px 15px 20px 15px;
  background-color: rgb(174, 104, 221);
  border-bottom: 5px solid rgb(151, 85, 196);
  margin-bottom: 22px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  transition: .25s;
  position: fixed;
  bottom: 1vh;
  left: 80vw;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  box-shadow: 0px 5px 18px 0px rgba(79,79,79,0.4);
}
.notification:hover {
  background-color: rgb(144, 84, 184);
  box-shadow: 0px 5px 18px 0px rgba(79, 79, 79, 0.2);
  padding: 19px 14px 19px 14px;
  bottom: 1.2vh;
  font-size: 14px;
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
