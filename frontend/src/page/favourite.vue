<template>
  <div class="pg-favourite">
    <header>
      <mu-icon value="arrow_back" class="mu-icon" @click="goBack"></mu-icon>
      <span>我的收藏</span>
      <span style="padding-right:6%;color:#2196f3">&emsp;</span>
    </header>
    <div id="main">
      <template>
        <div class="no-list"><p>暂无收藏！</p></div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
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
.pg-favourite {
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
    .no-list{
      width: 110px;
      height: 180px;
      background: url('../assets/images/62779058_p0.png') no-repeat center center;
      font-size: 18px;
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      p{
        margin: 0 auto;
        margin: 155px 0 0 12px;
        letter-spacing: 1px;
        color: #5E5E5E;
      }
    }
  }
}
</style>
