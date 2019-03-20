<template>
  <div class="pg-write-mood">
    <topDiaryBtn></topDiaryBtn>
    <div class="finished" @click="finished">完成</div>
    <div class="main-body">
      <textarea placeholder="赶快记录当下的真情感受吧" v-model="pageMsg.content"></textarea>
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
        content: ''
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
            niname:this.pageMsg.niname
          }
        }).then((res) =>{
          console.log(res);
        })
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
  }
}
</script>
<style lang="less">
  .pg-write-mood{
    .main-body{
      textarea{
        width: 100%;
        min-height: 600px;
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
