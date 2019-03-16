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
            {{page_detail}}
          </mu-card-text>
        </mu-card>
        <mu-divider></mu-divider>
        <div class="com-top">
          <div class="com-tip">
            <p>最新评论</p>
          </div>
        </div>
        <div class="com-content">
          <div class="per-comment" v-for="(value,index) in comments" :key="index">
          <mu-card-header title="Myron Avatar" sub-title="sub title">
            <mu-avatar slot="avatar">
              <img src="../assets/images/avat.jpg">
            </mu-avatar>
          </mu-card-header>
          <mu-card-text class="text-com">
           {{value.content}}
          </mu-card-text>
          </div>
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
            <textarea name="" id="" cols="35" rows="1" class="textarea" style="background:#cccccc;border:none;outline:none;border-radius:8px;font-size:16px;margin:6px 6px 6px 6px;text-indent:8px;" v-model="textarea"></textarea>
            <mu-icon value="send" style="width:24px;height:24px;margin:8px;" @click="sendComment"></mu-icon>
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
      textarea: '',
      page_id: '',
      open: false,
      page_detail: '',
      comments: []
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
    },
    sendComment () {
      this.axios({
          method:'post',
          url:'http://localhost:3000/comment/data',
          data:{
            page_id: this.page_id,
            content: this.textarea
          }
        }).then( res =>{
          console.log(res);
        })
        this.renderComment();
    },
    renderComment () {
      //评论页的渲染
    this.axios({
        method:'get',
        url:'http://localhost:3000/comment/gainComment?page_id='+this.page_id,
     }).then( res => {
       this.comments = res.data;
     })
    }
  },
  mounted () {
    this.page_detail = JSON.parse(localStorage.getItem('page_detail')).content;
    this.page_id = JSON.parse(localStorage.getItem('page_detail'))._id;
    this.renderComment();
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
