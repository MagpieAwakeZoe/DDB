<template>
  <div class="pg-write-story">
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
import Vue from 'vue';
import topDiaryBtn from "@/components/common/top-diary-btn.vue"
import Message from 'muse-ui-message';
Vue.use(Message);
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
        user_id: '',
        time: {
          year: '',
          month: '',
          day: '',
          hour: ''
        },
        title: '',
        content: '',
        niname: '',
        avatar: ''
      }
    };
  },
  methods: {
    finished () {
      this.axios({
          method:'post',
          url:'http://localhost:3000/story/data',
          data:{
            author:this.pageMsg.author,
            title:this.pageMsg.title,
            content:this.pageMsg.content,
            user_id:this.pageMsg.user_id,
            time:this.pageMsg.time,
            niname:this.pageMsg.niname,
            avatar:this.pageMsg.avatar
          }
        }).then((res) =>{
           this.$router.push('/community');
          this.$alert('已发送');
        })
    }
  },
  mounted () {
    //取得用户名
    this.pageMsg.author = this.$store.state.userName;
    this.pageMsg.user_id = this.$store.state.user_id;
    this.pageMsg.time.year = this.$store.state.time.year;
    this.pageMsg.time.month = this.$store.state.time.month;
    this.pageMsg.time.day = this.$store.state.time.day;
    this.pageMsg.time.hour = this.$store.state.time.hour;
    this.pageMsg.niname = this.$store.state.niname;
    this.pageMsg.avatar = this.$store.state.avatar;
  }
}
</script>
<style lang="less">
  .pg-write-story{
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
