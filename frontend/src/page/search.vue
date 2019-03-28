<template>
  <div class="pg-search">
    <mu-container class="top">
      <mu-paper class="demo-paper" :z-depth="1">
        <div class="search">
          <div class="search-input">
            <div class="icon-search">
              <mu-icon value="search"></mu-icon>
            </div>
            <div class="text-box">
              <input type="text" placeholder="请输入搜索内容" v-model="keyword">
            </div>
          </div>
          <div class="btn-group">
            <span @click="search">确定</span>
            <span>&emsp;</span>
            <span @click="goBack">取消</span>
          </div>
        </div>
      </mu-paper>
    </mu-container>
    <div class="search-res">
      <mu-tabs :value.sync="active1" inverse color="#00b8d4" text-color="rgba(0, 0, 0, .54)"  center indicator-color="transparent">
        <mu-tab class="mutab">故事</mu-tab>
        <mu-tab class="mutab">心情</mu-tab>
      </mu-tabs>
      <mu-divider></mu-divider>
      <div class="describe">
        <p>"<span style="color:#00b8d4">{{keyword}}</span>"&emsp;相关</p>
      </div>
      <div class="demo-text" v-if="active1 === 0">
        <div class="storyRes">
          <div class="story-reslist" v-for="(value,index) in storyRes" :key="index">
            <div class="story-title">{{value.title}}</div>
            <div class="story-content">{{value.content}}</div>
          </div>
        </div>
      </div>
      <div class="demo-text" v-if="active1 === 1">
        <div class="moodRes">
          <div class="mood-reslist" v-for="(item,index) in moodRes" :key="index">
            <br>
            <div class="mood-content">{{item.content}}</div>
            <div class="mood-tab"><span style="color:red">心情标签:&emsp;{{item.moodNow}}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  props: {
          fixed: {
              type: Boolean,
              default: false
          }
  },
  data () {
    return {
      active1: 0,
      keyword: '',
      storyRes: [],
      moodRes: []
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    search () {
      //搜索符合条件的故事
      this.axios({
          method:'get',
          url:'http://localhost:3000/mood/searchMood?keyword=' + this.keyword
        }).then( res =>{
          this.moodRes = res.data;
        })
      //搜索符和条件的心情
     this.axios({
          method:'get',
          url:'http://localhost:3000/story/searchStory?keyword=' + this.keyword
        }).then( res =>{
          this.storyRes = res.data;
        })

    }
  }
}
</script>
<style lang="less">
  .pg-search{
    .demo-paper{
      width: 100%;
    }
    .container{
      padding: 0;
      .mu-tabs-center{
        height: 40px;
      }
    }
    .top{
      position: fixed;
      top: 0;
      height: 30px;
      width: 100%;
      .search{
        width: 100%;
        height: 50px;
        // background: #cccccc;
        overflow: hidden;
        .btn-group{
          position: absolute;
          top: 0;
          left: 0;
          top: 50%;
          left: 72%
        }
        .search-input{
          width: 62%;
          height: 35px;
          background: #eceff1;
          border-radius: 6px;
          margin:8px 0 0 5%;
          display: flex;
          .icon-search{
            margin: 8px 3% 0 5%;
          }
          .text-box{
            // margin: 4px 0 0 0;
            margin: auto 3px;
            input{
              border: none;
              outline: none;
              background: #eceff1;
            }
          }
        }
      }
    }
    .search-res{
      width: 100%;
      margin: 50px 0 0 0;
      .mutab{
        padding: 0 16%;
      }
    }
    .describe{
      width: 100%;
      height: 40px;
      // background: yellow;
      line-height: 40px;
      overflow: hidden;
      font-size: 16px;
      p{
        margin: 0 0 0 5%;
      }
    }
    .storyRes{
      width: 100%;
      .story-reslist{
        width: 90%;
        background: #eceff1;
        border-radius: 4px;
        margin: 2% auto;
        padding-bottom: 10px;
        .story-title{
          padding: 10px;
          font-size: 18px;
        }
        .story-content{
          padding: 0px 10px 5px 10px;
        }
      }
    }
    .moodRes{
      width: 100%;
      .mood-reslist{
        width: 90%;
        background: #eceff1;
        border-radius: 4px;
        margin: 2% auto;
        padding-bottom: 10px;
        .mood-title{
          padding: 10px;
          font-size: 18px;
        }
        .mood-content{
          padding: 0px 10px 5px 10px;
        }
        .mood-tab{
          padding: 0px 10px 5px 10px;
        }
      }
    }
  }
</style>
