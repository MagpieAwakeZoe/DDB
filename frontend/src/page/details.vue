<template>
  <div class="pg-details">
    <header>
      <mu-icon value="arrow_back" class="mu-icon" @click="goBack"></mu-icon>
      <span>详情</span>
      <mu-icon value="star" class="mu-icon" :color="starColor" @click="flag && collect($event)"></mu-icon>
    </header>
    <div id="main">
      <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;box-shadow:none;background:rgb(250,250,250);">
          <mu-card-header class="header">
            <div style="display:flex">
              <mu-avatar slot="avatar">
                <img :src="page_detail.avatar">
              </mu-avatar>
            <div class="author">
              <div class="niname">{{page_detail.niname}}</div>
              <div class="email">{{page_detail.author}}</div>
            </div>
            </div>
          </mu-card-header>
          <!-- TODO:timeago控件 -->
          <div class="title">
            <div></div>
          </div>
          <mu-card-text class="text">
            {{page_detail.content}}
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
          <mu-card-header class="header">
            <div style="display:flex">
              <mu-avatar slot="avatar">
                <img :src="value.avatar">
              </mu-avatar>
            <div class="author">
              <div class="niname">{{value.niname}}</div>
              <div class="email">{{value.author}}</div>
            </div>
            </div>
          </mu-card-header>
          <mu-card-text class="text-com">
           {{value.content}}
          </mu-card-text>
          </div>
        </div>
    </div>
    <footer>
      <div class="icon">
        <mu-icon value="thumb_up" :color="thumbColor" @click="flag1 && thumb($event)"></mu-icon>
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
import Vue from 'vue'
import Message from 'muse-ui-message';
Vue.use(Message);
export default {
  data() {
    return {
      flag: true,
      flag1: true,
      starColor: '#90a4ae',
      thumbColor: '#bdbdbd',
      textarea: '',
      page_id: '',
      open: false,
      page_detail: {},
      comments: [],
      collectionNum: '',    //收藏数
      // commentsNum: '',      //评论数
      thumbsNum: '',         //点赞数
      avatar: '',
      niname: '',
      author: ''
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
            content: this.textarea,
            avatar: 'http://localhost:3000' + this.avatar,
            niname: this.niname,
            author: this.author
          }
        }).then(res =>{
          // console.log(res);
          this.renderComment();
        })

        this.renderCommentNum();
        this.open = false;
    },
    renderComment () {
      //评论页的渲染
    this.axios({
        method:'get',
        url:'http://localhost:3000/comment/gainComment?page_id='+this.page_id,
     }).then( res => {
       this.comments = res.data;
      //  console.log(this.comments);
     })
    },
    renderCommentNum () {
        this.axios({
        method:'put',
        url:'http://localhost:3000/diary/data/'+this.page_id,
        data:{
          commentsNum: this.comments.length + 1
        }
      }).then( res => {
        // console.log(res);
      })
    },
    collect (e) {
      this.$alert('已收藏', '提示', {
        okLabel: '知道了'
      }).then(() => {
        // this.$toast.message('提示信息');
      });
      this.flag = false;
      this.starColor = "#fbc02d";
      this.collectionNum ++;
      this.axios({
        method:'put',
        url:'http://localhost:3000/diary/data/'+this.page_id,
        data:{
          collectionNum: this.collectionNum
        }
      }).then( res => {
        // console.log(res);
      });
      //存入收藏数据集
      this.axios({
        method:'post',
        url:'http://localhost:3000/collection/data',
        data: {
            author: this.page_detail.author,
            content: this.page_detail.content,
            niname: this.page_detail.niname,
            title: this.page_detail.title,
            user_id: this.page_detail.user_id,
            _id: this.page_detail._id,
            my_id: this.$store.state.user_id,
            avatar: this.page_detail.avatar
        }
      }).then( res => {
        // console.log(res);
      })
    },
    thumb () {
      this.thumbColor = '#ff6e40';
      this.flag1 = false;
      this.thumbsNum ++;
      this.axios({
        method:'put',
        url:'http://localhost:3000/diary/data/'+this.page_id,
        data:{
          thumbsNum: this.thumbsNum
        }
      }).then( res => {
        // console.log(res);
      })
    }
  },
  mounted () {
    this.page_detail = JSON.parse(localStorage.getItem('page_detail'));
    this.page_id = JSON.parse(localStorage.getItem('page_detail'))._id;
    // console.log(this.page_detail);
    this.renderComment();
    this.collectionNum = this.page_detail.collectionNum;
    this.commentsNum = this.page_detail.commentsNum;
    this.thumbsNum = this.page_detail.thumbsNum;

    // this.avatar = this.$store.state.avatar;
    // this.niname = this.$store.state.niname;
    // this.author = this.$store.state.author;

    //从数据库中获取评论人的信息
    let user_id = this.$store.state.user_id;
    // alert(user_id);
     this.axios({
          method:'get',
          url:'http://localhost:3000/regist/gainPage?user_id=' + user_id,
      }).then((res)=>{
        // console.log(res.data);
        this.avatar = res.data.avatar;
        this.author = res.data.email;
        this.niname = res.data.niname;
      })
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
    .header{
      .email{
        color: #78909c;
        font-size: 80%;
      }
    }
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
