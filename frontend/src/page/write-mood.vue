<template>
  <div class="pg-write-mood">
    <topDiaryBtn></topDiaryBtn>
    <div class="finished" @click="finished">完成</div>
    <div class="main-body">
      <textarea placeholder="赶快记录当下的真情感受吧" v-model="pageMsg.content"></textarea>
      <div class="mood-tab" @click="myMoodNow">
        <p>心情标签:</p>
        <div class="mood-list l1" mood="开心">开心</div>
        <div class="mood-list l2" mood="伤心">伤心</div>
        <div class="mood-list l3" mood="委屈">委屈</div>
        <div class="mood-list l4" mood="轻松">轻松</div>
        <div class="mood-list l5" mood="无奈">无奈</div>
        <div class="mood-list l6" mood="雀跃">雀跃</div>
      </div>
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
        niname: '',
        user_id: '',
        time: {
          year: '',
          month: '',
          day: '',
          hour: ''
        },
        content: '',
        moodNow: '',
        avatar: ''
      }
    };
  },
  methods: {
    finished () {
      this.axios({
          method:'post',
          url:'http://localhost:3000/mood/data',
          data:{
            author:this.pageMsg.author,
            content:this.pageMsg.content,
            user_id:this.pageMsg.user_id,
            time:this.pageMsg.time,
            niname:this.pageMsg.niname,
            moodNow:this.pageMsg.moodNow,
            avatar:this.pageMsg.avatar
          }
        }).then((res) =>{
          console.log(res);
        })
    },
    myMoodNow (e) {
      let dom = e.target;
      let index = dom.getAttribute("mood");
      // console.log(index);
      this.pageMsg.moodNow = index;
    }
  },
  mounted () {
    //取得用户名
    this.pageMsg.author = this.$store.state.userName;
    //取得昵称
    this.pageMsg.niname = this.$store.state.niname;
    this.pageMsg.user_id = this.$store.state.user_id;
    this.pageMsg.time.year = this.$store.state.time.year;
    this.pageMsg.time.month = this.$store.state.time.month;
    this.pageMsg.time.day = this.$store.state.time.day;
    this.pageMsg.time.hour = this.$store.state.time.hour;
    this.pageMsg.avatar = this.$store.state.avatar;
  }
}
</script>
<style lang="less">
  .pg-write-mood{
    .main-body{
      textarea{
        width: 100%;
        min-height: 550px;
        border: none;
        outline: 0;
        color: transparent;
        text-shadow:0 0 0 #000000;
        background: transparent;
        font-size: 18px;
        padding: 10px 8px 10px 10px;
        letter-spacing: 1px;
        text-indent: 32px;
      }
      .mood-tab{
        width: 90%;
        height: 50px;
        // background: pink;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        .mood-list{
          // background: blue;
          width: 40px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          margin: 10px 0 0 4px;
          border-radius: 6px;
          font-size: 12px;
          color: #ffffff;
          background: #cccccc;
          border: 1px solid gray;
        }
        .l1:hover{
          color: #e8f5e9;
          background: #64dd17;
          border: 1px solid #00e676;
        }
        .l2:hover{
          color: #0d47a1;
          background: #42a5f5;
          border: 1px solid #90caf9;
        }
        .l3:hover{
          color: #f8bbd0;
          background: #ec407a;
          border: 1px solid #880e4f;
        }
        .l4:hover{
          color: #ff6f00;
          background: #ffe082;
          border: 1px solid #ff6f00;
        }
        .l5:hover{
          color: #37474f;
          background: #90a4ae;
          border: 1px solid #37474f;
        }
        .l6:hover{
          color: #ffcdd2;
          background: #f44336;
          border: 1px solid #d50000;
        }
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
