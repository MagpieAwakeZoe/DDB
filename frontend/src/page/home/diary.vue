<template>
  <div class="pg-diary">
    <div class="container">
      <div class="story" v-for="(item,index) in myDiary" :key="index">
        <div class="date">
         <p style="font-size:18px;">{{item.time.day}}</p>
         <p>{{item.time.month}}月</p>
         <br>
         <mu-icon value="delete" color="#607d8b" size="30" @click="deleteDiary(item)"></mu-icon>
        </div>
        <div class="content">
           <div class="page">
             <div class="middle">
               <div style="padding:15px;">
                 <p class="title">{{item.title}}</p>
                 <p class="diary">{{item.content}}</p>
               </div>
             </div>
           </div>
        </div>
      </div>
      <div class="place_block"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Message from 'muse-ui-message';
Vue.use(Message);
export default {
  name: 'Diary',
  props: {
          fixed: {
              type: Boolean,
              default: false
          }
  },
  data () {
    return {
      myDiary:[]
    }
  },
  methods: {
    deleteDiary (item) {
      Message.alert('删除完成', '提示');
      //删除该用户数据库里的那条记录
      this.axios({
        method:'delete',
        url:'http://localhost:3000/diary/data/' + item._id,
      }).then( res => {
        console.log(res);
      });
      //重新渲染
      this.gainMyDiary();

      //将删除的数据添加到回收站数据库
      this.axios({
      method:'post',
      url:'http://localhost:3000/rubbish/data',
      data: {
        title: item.title,
        content: item.content,
        user_id: item.user_id
      }
    }).then( res => {
      console.log(res);
    })


    },
    //获取本机用户的日记
    gainMyDiary () {
      const user_id = this.$store.state.user_id;
      this.axios({
        method:'get',
        url:'http://localhost:3000/diary/gainPage?user_id=' + user_id,
      }).then( res => {
        this.myDiary = res.data;
        // console.log(this.myDiary);
      })
    }
  },
  mounted () {
    this.gainMyDiary();
  }
}
</script>
<style lang="less">
  .pg-diary{
    background: #FFFFF0;
    min-height: 100vh;
    overflow: hidden;
    *{
      margin: 0;
      padding: 0;
    }
    .story{
      overflow: hidden;
      margin: 5% 0 0 0;
      .date{
        float: left;
        min-width: 20%;
        margin: 0 0 0 5%;
        text-align: center;
        padding: 2% 0 0 0;
      }
      .content{
        float: left;
        // background: aqua;
        width: 70%;
        border-left: 1px dashed #cccccc;
        .page{
          padding: 8%;
          .middle{
            border-radius: 8px;
            box-shadow:#cccccc 0px 0px 3px;
            border: 1px solid #cccccc;
            background: #ffffff;
          }
          .title{
            font-size: 16px;
          }
          .diary{
            font-size: 12px;
          }
        }
      }
    }
    .place_block{
      height: 55px;
    }
  }
</style>
