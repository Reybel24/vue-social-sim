import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Axios
const axios = require('axios');

export const store = new Vuex.Store({
  state: {
    count: 80
  },
  mutations: {
  },
  actions: {
    fetchPosts: () => {
      return new Promise((resolve) => {
        // Options
        const options = {
          url: "http://localhost:5000/posts",
          methods: "GET",
          headers: { "content-type": "application/json" },
          params: "",
        }

        axios(options).then(response => {
          // console.log(response.data);
          resolve(response.data);
        })
      })
    },
    fetchPostsNew: ({ context }, payload) => {
      return new Promise((resolve) => {
        console.log(context)
        // console.log(payload)
        // Options
        const options = {
          url: "http://localhost:5000/posts/new",
          methods: "GET",
          headers: { "content-type": "application/json" },
          params: {
            "timestamp": payload.timestamp
          },
        }

        axios(options).then(response => {
          resolve(response.data.reverse());
        })
      })
    },

  }
})