<template>
  <div class="pg-diary">
    <div class="container">
      <div class="story" v-for="(item,index) in myDiary" :key="index">
        <div class="date">
         <p style="font-size:18px;">{{item.time.day}}</p>
         <p>{{item.time.month}}月</p>
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
  mounted () {
    const user_id = this.$store.state.user_id;
    this.axios({
      method:'get',
      url:'http://localhost:3000/diary/gainPage?user_id='+user_id,
    }).then( res => {
      this.myDiary = res.data;
      // console.log(this.myDiary);
    })
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
        min-width: 70%;
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
