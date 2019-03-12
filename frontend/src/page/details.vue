<template>
  <div class="pg-details">
    <header>
      <mu-icon value="arrow_back" class="mu-icon" @click="goBack"></mu-icon>
      <span>详情</span>
      <mu-icon value="star" class="mu-icon"></mu-icon>
    </header>
    <div id="main">
      <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;box-shadow:none;background:rgb(250,250,250);">
          <mu-card-header title="Myron Avatar" sub-title="sub title">
            <mu-avatar slot="avatar">
              <img src="../assets/images/avat.jpg">
            </mu-avatar>
          </mu-card-header>
          <!-- TODO:timeago控件 -->
          <div class="title">
            <div></div>
          </div>
          <mu-card-text class="text">
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
            调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
            似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
            找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
            调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
          </mu-card-text>
        </mu-card>
        <mu-divider></mu-divider>
        <div class="com-top">
          <div class="com-tip">
            <p>最新评论</p>
          </div>
        </div>
        <div class="com-content">
          <mu-card-header title="Myron Avatar" sub-title="sub title">
            <mu-avatar slot="avatar">
              <img src="../assets/images/avat.jpg">
            </mu-avatar>
          </mu-card-header>
          <mu-card-text class="text-com">
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
            调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
            似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          </mu-card-text>
        </div>
    </div>
    <footer>
      <div class="icon">
        <mu-icon value="thumb_up" color="#bdbdbd"></mu-icon>
      </div>
      <div class="icon">
        <mu-container>
          <mu-icon value="edit" color="#bdbdbd" @click="openBotttomSheet"></mu-icon>
          <mu-bottom-sheet :open.sync="open">
            <div style="display:flex;justify-content:space-around;">
            <textarea name="" id="" cols="35" rows="1" class="textarea" style="background:#cccccc;border:none;outline:none;border-radius:8px;font-size:16px;margin:6px 6px 6px 6px;text-indent:8px;"></textarea>
            <mu-icon value="send" style="width:24px;height:24px;margin:8px;"></mu-icon>
            </div>
          </mu-bottom-sheet>
        </mu-container>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea:'',
      open: false
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    closeBottomSheet () {
      this.open = false;
    },
    openBotttomSheet () {
      this.open = true;
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
.pg-details {
  header {
    width: 100%;
    display: flex;
    height: 40px;
    // background: yellow;
    line-height: 40px;
    justify-content: space-between;
    position: absolute;
    z-index: 5;
    top: 0;
    // border-bottom: 1px solid #cccccc;
    box-shadow: 0px 7px 7px -7px #5E5E5E;
    .mu-icon{
      padding: 8px 16px 8px 16px;
    }
  }
  #main {
    // background: pink;
    overflow: auto;
    top: 50px;
    position: absolute;
    z-index: 10;
    bottom: 60px;
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
    box-shadow:none;
    .title{
      margin-left: 9%;
      font-size: 16px;
      font-weight: 600;
      p{
        margin: 0;
        padding: 0 0 6px 0 ;
      }
    }
    .com-top{
      width: 100%;
      height: 40px;
      // background: red;
      overflow: hidden;
      .com-tip{
        height: 60%;
        // background: yellow;
        padding-left: 10%;
        margin: 8px 0 0 0;
        p{
          font-size: 12px;
          line-height: 200%;
          margin: 0;
          padding: 0 0 0 3%;
          border-left: 3px solid #64b5f6;
        }
      }
    }
    .com-content{
      transform: scale(0.85,0.85);
      .text-com{
        margin: -20px 0 0 0;
      }
    }
    .text{
      width:90%;
      margin:auto;
      margin-top:-4%;
      font-size:14px;
      letter-spacing: 1px;
    }
  }
  footer {
    height: 50px;
    line-height: 50px;
    width: 100%;
    position: absolute;
    z-index: 200;
    bottom: 0;
    text-align: center;
    border-top: 1px solid #cccccc;
    box-shadow: 7px 7px 7px 5px #5E5E5E;
    display: flex;
    justify-content: space-around;
    .icon{
      margin: 10px;
    }
  }
}
</style>
