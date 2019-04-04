import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        user_id: '',
        niname: '一位不知名的路过网友',
        userName: '一位不知名的路过网友',
        loginStatus: -1,     //offlineStatus未登录
        time:{
          year: '',
          month: '',
          day: '',
          hour: ''
        },
        avatar: 'http://localhost:3000/static/image/noAvatar.jpg'
    },
    mutations: {

      //用户登录状态

      onlineStatus (state) {
        state.loginStatus += 2;
      },

      // 用户名存储

      saveUserName (state, payload) {
        state.userName = payload.userName;
      },

      // 用户id存储

      saveUserId (state, payload) {
        state.user_id = payload.user_id;
      },

      //用户昵称存储
      saveNiname (state, payload) {
        state.niname = payload.niname;
      },

      // 用户时间存储
      saveYear (state, payload) {
        state.time.year = payload.year;
      },
      saveMonth (state, payload) {
        state.time.month = payload.month;
      },
      saveDay (state, payload) {
        state.time.day = payload.day;
      },
      saveHour (state, payload) {
        state.time.hour = payload.hour;
      },

      //用户的头像
      saveAvatar (state, payload) {
        // if (payload.avatar !== 'http://localhost:3000null') {
          state.avatar = payload.avatar;
        // }
      }

    }
})
