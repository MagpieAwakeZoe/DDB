<template>
  <div class="pg-write">
    <div class="date">
      <div class="day">28</div>
      <div class="year-month">
        <div class="week">周四</div>
        <div class="time">2019/02</div>
      </div>
    </div>
    <div class="page">
      <p>每天告诉自己一次，我真的很不错</p>
      <p style="font-size:12px;font-weight:normal">启程，开始我的日记</p>
    </div>
    <mu-icon size="26" value="cancel" color="orange" class="close-icon" @click="goBack"></mu-icon>
      <div class="diary-type">
        <mu-scale-transition><div class="mu-transition-box mu-primary-color mu-inverse" v-show="show"><div class="text-diary diary" @click="moveToText"><mu-icon value="note_add" size="36" color="#fff" class="icon"></mu-icon></div><p>文本日记</p></div></mu-scale-transition>
        <mu-scale-transition><div class="mu-transition-box mu-primary-color mu-inverse" v-show="show"><div class="image-diary diary"><mu-icon value="image" size="36" color="#fff" class="icon"></mu-icon></div><p>图片日记</p></div></mu-scale-transition>
        <mu-scale-transition><div class="mu-transition-box mu-primary-color mu-inverse" v-show="show"><div class="share diary"><mu-icon value="book" size="36" color="#fff" class="icon"></mu-icon></div><p>开启故事</p></div></mu-scale-transition>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true
    }
  },
  name: 'Write',
  props: {
          fixed: {
              type: Boolean,
              default: false
          }
  },
  methods:{
    goBack () {
      this.show = !this.show;
        setTimeout(() => {
          this.$router.push('/community');
        },400)
    },
    moveToText () {
      this.$router.push('/textDiary');
    }
  }
}
</script>
<style lang="less">
  .pg-write{
    .date{
      padding: 5% 0 0 10%;
      .day{
        font-size: 48px;
        display: inline-block;
        vertical-align: middle;
        padding-right: 10px;
      }
      .year-month{
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;
        .week{

        }
        .month{

        }
      }
    }
    .page{
      font-size: 14px;
      font-weight: 600;
      padding-left: 10%;
    }
    height: 100vh;
    background: rgb(255,254,239) url('../assets/images/writebg.jpg') no-repeat center center;
    .close-icon{
      position: fixed;
      bottom: 10px;
      left: 47%;
    }
    .diary-type{
      width: 100%;
      height: 85px;
      position: absolute;
      top: 76%;
      // background: red;
      display: flex;
      justify-content: space-around;
      .mu-primary-color{
        background: transparent;
      }
      p{
          padding: 0;
          margin: -8px 0 0 18%;
          font-size: 10px;
          color: gray;
        }
      .diary{
        width: 60px;
        height: 60px;
        display: inline-block;
        border-radius: 50%;
        margin: 5px 0 15px 0;
        .icon{
          position: relative;
          left:20%;
          top: 20%;
        }
      }
      .text-diary{
        background:#f44336;
      }
      .image-diary{
        background: #1976d2;
      }
      .share{
        background:#ffe082;
      }
    }

  }
</style>
