<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from 'muse-ui-toast';
Vue.use(Toast);
Toast.config({
  position: 'top-end',
  time: 10000
});
export default {
  name: 'app',
  data () {
    return {
      timer: null,
      alarmTime: '',
      nowAllSecond: ''
    }
  },
  methods: {
    //定时器
    setTimer () {
      let timeDiffPlus = Math.abs(this.alarmTime - this.nowAllSecond);
      let timeDiffMinus = 86400 - timeDiffPlus;
      console.log('还有' + timeDiffPlus + '秒提醒写日记');
      // console.log(timeDiffMinus);
      // console.log(this.alarmTime >= this.nowAllSecond);
      if (this.alarmTime >= this.nowAllSecond) {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
        Toast.message('该写日记了');
        },timeDiffPlus * 1000);
      } else {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
        Toast.message('该写日记了');
      },timeDiffMinus * 1000);
      }
    }
  },
  mounted () {
    this.alarmTime = localStorage.getItem('alarmTime');
    let now = new Date();
    let nowHour = now.getHours();
    let nowMinute = now.getMinutes();
    let nowSecond = now.getSeconds();
    this.nowAllSecond = nowHour * 3600 + nowMinute * 60 + nowSecond;
    // console.log(this.nowAllSecond);
    // console.log(this.alarmTime);
    //定时提醒
    clearTimeout(this.timer);
    this.setTimer();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafafa;
}
</style>
