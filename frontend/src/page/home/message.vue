<template>
  <div class="pg-my">
    <mu-container>
      <mu-paper class="demo-paper" :z-depth="1">
        <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
          <mu-tab>动态</mu-tab>
          <mu-tab>联系人</mu-tab>
        </mu-tabs>
      </mu-paper>
      <div class="demo-text" v-if="active1 === 0">
        <div class="message-container">
           <div class="title-tab">
             <ul>
               <li><div class="btn thumbs"><mu-icon value="thumb_up" color="white" size="26"></mu-icon></div><p>点赞</p></li>
               <li><div class="btn my"><mu-icon value="thumb_up" color="white" size="26"></mu-icon></div><p>@我的</p></li>
               <li><div class="btn comment"><mu-icon value="thumb_up" color="white" size="26"></mu-icon></div><p>评论</p></li>
               <li><div class="btn impression"><mu-icon value="thumb_up" color="white" size="26"></mu-icon></div><p>印象</p></li>
             </ul>
           </div>
        </div>
      </div>
      <div class="demo-text" v-if="active1 === 1">
        <div class="message-container">

        </div>
      </div>
    </mu-container>
  </div>
</template>

<script>
export default {
  components:{

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
      active1: 0
    };
  }
}
</script>
<style lang="less">
  .pg-my{
    .demo-paper{
      width: 100%;
    }
    .container{
      padding: 0;
      .mu-tabs-center{
        height: 40px;
      }
    }
    .message-container{
      margin-top: 2px;
      width: 100%;
      height: 100vh;
      background:#f5f5f5;
      .title-tab{
        width: 100%;
        height: 100px;
        background: #ffffff;
        ul li{
          list-style: none;
        }
        ul{
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin: 0;
          padding: 0;
          li{
            width: 90px;
            p{
              margin-top: 0px;
              text-align: center;
            }
          }
        }
        .btn{
          transform: scale(0.8,0.8);
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 6px;
          background: red;
          margin: 20px 20px 5px 20px;
          display: flex;
          flex-direction: column;
          .material-icons{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
        .thumbs{
          background: #f44336;
        }
        .my{
          background: #2196f3;
        }
        .comment{
          background: #ffc107;
        }
        .impression{
          background: #8e24aa;
        }
      }
    }
  }
</style>
