<template>
  <div class="pg-personData">
    <header>
      <mu-icon value="arrow_back" class="mu-icon" @click="goBack"></mu-icon>
      <span>设置时间</span>
      <span style="padding-right:6%;color:#2196f3" @click="saveTime">完成</span>
    </header>
    <div id="main">
      <mu-container>
        <mu-flex justify-content="between" align-items="end" wrap="wrap">
          <mu-paper :z-depth="1">
            <mu-time-picker :no-display="!display" :view-type="viewType" :time.sync="time" :format="type" :landscape="landscape"></mu-time-picker>
          </mu-paper>
        </mu-flex>
      </mu-container>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Message from 'muse-ui-message';
Vue.use(Message);
export default {
  data() {
    return {
      time: undefined,
      landscape: false,
      display: true,
      type: '24hr',
      viewType: 'clock'
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    saveTime () {

      const Shour = this.time.getHours();
      const Sminute = this.time.getMinutes();
      const Ssecond = this.time.getSeconds();
      const allSecond = Shour * 3600 + Sminute * 60 + Ssecond;
      localStorage.setItem('alarmTime',allSecond);
      Message.alert('将在每日的'+Shour+"时"+Sminute+"分"+"提醒", '提示');
    }
  }
};
</script>
<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.pg-personData {
  header {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    position: absolute;
    z-index: 5;
    top: 0;
    box-shadow: 0px 7px 7px -7px #5E5E5E;
    .mu-icon{
      padding: 8px 16px 8px 16px;
    }
  }
  #main {
    overflow: auto;
    top: 50px;
    position: absolute;
    z-index: 10;
    bottom: 60px;
    width: 90%;
    max-width: 375px;
    margin: 5%;
    box-shadow:none;
    .mu-paper-round{
      margin:0 auto;
      margin-top: 20%;
    }
  }
}
</style>
