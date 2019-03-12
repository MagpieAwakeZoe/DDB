<template>
  <div class="pg-text-diary">
    <topDiaryBtn></topDiaryBtn>
    <div class="finished" @click="finished">完成</div>
    <div class="title">
      <input type="text" placeholder="标题" v-model="pageMsg.title">
    </div>
    <div class="main-body">
      <textarea placeholder="请输入" v-model="pageMsg.content"></textarea>
    </div>
  </div>
</template>

<script>
import topDiaryBtn from "@/components/common/top-diary-btn.vue"
export default {
  components:{
    topDiaryBtn
  },
  name: 'My',
  props: {
          fixed: {
              type: Boolean,
              default: false
          }
  },
  data(){
    return{
      pageMsg:{
        author: '',
        time: {
          year: '',
          month: '',
          day: '',
          hour: ''
        },
        title: '',
        content: ''
      }
      //评论假数据
      ,commentData:[
        {
          avatar:'头像1',
          judgeMan:'评论人1',
          judgeTime:'评论时间1',
          content:'评论内容1',
          thumbs:'获赞数1'
        }
        ,
        {
          avatar:'头像2',
          judgeMan:'评论人2',
          judgeTime:'评论时间2',
          content:'评论内容2',
          thumbs:'获赞数2'
        },
        {
          avatar:'头像3',
          judgeMan:'评论人3',
          judgeTime:'评论时间3',
          content:'评论内容3',
          thumbs:'获赞数3'
        }
      ]
    };
  },
  methods: {
    finished () {
      this.axios({
          method:'post',
          url:'http://localhost:3000/diary/data',
          data:{
            author:this.pageMsg.author,
            title:this.pageMsg.title,
            content:this.pageMsg.content,
            time:this.pageMsg.time,
            comments:this.commentData
          }
        })
    }
  },
  mounted () {
    //取得用户名
    this.pageMsg.author = this.$store.state.userName;
    this.pageMsg.time.year = this.$store.state.time.year;
    this.pageMsg.time.month = this.$store.state.time.month;
    this.pageMsg.time.day = this.$store.state.time.day;
    this.pageMsg.time.hour = this.$store.state.time.hour;
    // console.log(this.pageMsg);
  }
}
</script>
<style lang="less">
  .pg-text-diary{
    .title{
      input{
        border: none;
        outline: 0;
        color: transparent;
        text-shadow:0 0 0 #000000;
        background: transparent;
        font-size: 20px;
        padding: 8px;
      }
    }
    .main-body{
      textarea{
        width: 100%;
        min-height: 600px;
        border: none;
        outline: 0;
        color: transparent;
        text-shadow:0 0 0 #000000;
        background: transparent;
        font-size: 14px;
        padding: 0px 8px 10px 10px;
      }
    }
    .finished{
      position: absolute;
      font-size: 13px;
      left: 90%;
      width: 30px;
      height: 30px;
      top: 2%;
    }
  }
</style>
