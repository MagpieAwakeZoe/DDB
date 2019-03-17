<template>
  <div class="pg-favourite">
    <header>
      <mu-icon value="arrow_back" class="mu-icon" @click="goBack"></mu-icon>
      <span>我的收藏</span>
      <span style="padding-right:6%;color:#2196f3">&emsp;</span>
    </header>
    <div id="main">
      <template v-if="collection.length < 1">
        <div class="no-list"><p>暂无收藏！</p></div>
      </template>
      <template v-if="collection.length >= 1">
        <div class="mycollection" v-for="(item,index) in collection" :key="index">
          <div class="top-bar">
            <div class="message">
              <div class="avatar"></div>
              <div class="author">{{item.author}}</div>
            </div>
            <div class="cancel" @click="cancel(item)">取消收藏</div>
          </div>
          <div class="collection-content" @click="toDetails(item)">
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.content}}</div>
          </div>
          <div class="grayblock"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collection: []
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    cancel(item){
      //删除操作
      this.axios({
        method:'delete',
        url:'http://localhost:3000/collection/data/'+item._id,
      }).then( res => {
        console.log(res);
      });
      this.getCollection();
    },
    getCollection () {
      const user_id = this.$store.state.user_id;
      this.axios({
        method:'get',
        url:'http://localhost:3000/collection/gainpage?user_id='+user_id,
      }).then( res => {
        this.collection = res.data;
      })
    },
    toDetails (item) {
      localStorage.setItem('page_detail',JSON.stringify(item));
      this.$router.push('/details');
    }
  },
  mounted () {
    this.getCollection();
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
.pg-favourite {
  header {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
    position: absolute;
    z-index: 5;
    top: 0;
    box-shadow: 0px 7px 7px -7px #5E5E5E;
    .mu-icon{
      padding: 8px 16px 8px 16px;
    }
  }
  #main {
    overflow: auto;
    top: 50px;
    position: absolute;
    z-index: 10;
    bottom: 60px;
    width: 90%;
    max-width: 375px;
    margin: 5%;
    box-shadow:none;
    .no-list{
      width: 110px;
      height: 180px;
      background: url('../assets/images/62779058_p0.png') no-repeat center center;
      font-size: 18px;
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      p{
        margin: 0 auto;
        margin: 155px 0 0 12px;
        letter-spacing: 1px;
        color: #5E5E5E;
      }
    }
    .mycollection{
      width: 100%;
      .top-bar{
        width: 100%;
        height: 50px;
        // background: green;
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        .message{
          .author{
            color: #26c6da;
          }
        }
        .cancel{
          font-size: 13px;
          color: #bdbdbd;
        }
      }
      .collection-content{
        width: 100%;
        height: 100px;
        background: #eeeeee;
        .title{
          width: 90%;
          height: 35px;
          background: #eeeeee;
          margin: 0 auto;
          line-height: 35px;
          font-weight: bold;
        }
        .content{
          width: 90%;
          height: 55px;
          background: #eeeeee;
          margin: 0 auto;
          font-size: 12px;
        }
      }
      .grayblock{
        width: 100%;
        background: #eeeeee;
        height: 8px;
        margin-top: 15px;
      }
    }
  }
}
</style>
