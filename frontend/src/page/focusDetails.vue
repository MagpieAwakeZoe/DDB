<template>
  <div class="pg-focusDetails">
      <div class="bg">
        <div class="return">
          <mu-icon value="arrow_back" class="mu-icon back" @click="goBack"></mu-icon>
        </div>
        <img src="../assets/images/cat_girl.jpg" alt="">
      </div>
      <div class="container">
      <div class="avatar"></div>
      <div class="exponent"><span style="color:blue;">♂</span>&emsp;{{personData.niname}}</div>
      <br>
      <mu-tabs :value.sync="active1" inverse color="#42a5f5" text-color="rgba(0, 0, 0, .54)"  center indicator-color="transparent">
        <mu-tab class="tab">个人资料</mu-tab>
        <mu-tab class="tab">发布日记</mu-tab>
        <mu-tab class="tab">发布故事</mu-tab>
      </mu-tabs>
      </div>
      <mu-container>
        <div class="demo-text" v-if="active1 === 0">
          <div class="personData">
            <div class="intro">
              {{personData.Introduction}}
            </div>
          </div>
          <div class="dataList">
            <div class="list">
              <span class="ques">昵称:</span>&emsp; <span class="ans">{{personData.niname}}</span>
            </div>
            <div class="list">
              <span class="ques">性别:</span>&emsp; <span class="ans">{{personData.sex}}</span>
            </div>
            <div class="list">
              <span class="ques">生日:</span>&emsp; <span class="ans">{{personData.birthday}}</span>
            </div>
            <div class="list">
              <span class="ques">地区:</span>&emsp; <span class="ans">{{personData.area}}</span>
            </div>
            <div class="list">
              <span class="ques">印象:</span>&emsp; <span class="ans">{{impression}}</span>
            </div>
          </div>
        </div>
        <div class="demo-text" v-if="active1 === 1">
          <div class="diary" v-for="(value,index) in focusDiary" :key="index">
            <div class="diary-title">
              <p>{{value.title}}</p>
            </div>
            <div class="diary-content">
              <p>{{value.content}}</p>
            </div>
            <div class="date">
              <p>写于{{value.time.year}}年{{value.time.month}}月{{value.time.day}}号{{value.time.hour}}时</p>
            </div>
          </div>
        </div>
        <div class="demo-text" v-if="active1 === 2">
          <div class="diary" v-for="(value,index) in focusStory" :key="index">
            <div class="diary-title">
              <p>{{value.title}}</p>
            </div>
            <div class="diary-content">
              <p>{{value.content}}</p>
            </div>
            <div class="date">
              <p>写于{{value.time.year}}年{{value.time.month}}月{{value.time.day}}号{{value.time.hour}}时</p>
            </div>
          </div>
        </div>
      </mu-container>
  </div>
</template>

<script>
export default {
  data() {
    return{
      active1: 0,
      personData: [],
      focusDiary: [],
      focusStory: [],
      impression: ''
    }
  },
  methods:{
    goBack () {
      this.$router.go(-1);
    }
  },
  mounted () {
    //获取存储的user_id
    const user_id = localStorage.getItem("focus_id");
    // console.log(user_id);

    //个人资料获取
    this.axios({
          method:'get',
          url:'http://localhost:3000/regist/gainPage?user_id=' + user_id,
        }).then( res => {
          this.personData = res.data;
        })

    //发布日记获取
    this.axios({
          method:'get',
          url:'http://localhost:3000/diary/gainPage?user_id=' + user_id,
        }).then( res => {
          this.focusDiary = res.data;
        })

    //发布故事获取
    this.axios({
          method:'get',
          url:'http://localhost:3000/story/gainpage?user_id=' + user_id,
        }).then( res => {
          this.focusStory = res.data;
    })

    //获取印象
    this.impression = localStorage.getItem('impression');
  }
}
</script>
<style lang="less">
  .pg-focusDetails{
    line-height: 1;
    .tab{
      font-size: 16px;
    }
    .bg{
      .return{
        position: absolute;
        z-index: 10;
        .back{
          color: white;
          font-size: 28px;
        }
      }
      position: relative;
      img{
        width: 100%;
        z-index: -10;
      }
    }
    .demo-text{
      width: 90%;
      margin: -5% auto;
      line-height: 1.3;
    }
    .personData{
      .intro{
        text-indent: 32px;
      }
    }
    .diary{
      width: 95%;
      margin: 0px auto 15px;
      border-radius: 8px;
      background: #ffecb3;
      border: 1px solid #ffd600;
      .diary-title{
        font-size: 20px;
        overflow: hidden;
        p{
          margin: 10px;
        }
      }
      .diary-content{
        font-size: 16px;
        overflow: hidden;
        p{
          margin: 0 10px 10px 10px;
        }
      }
      .date{
        font-size: 12px;
        margin-left: 50%;
        color: #37474f;
      }
    }
    .dataList{
      .list{
        margin: 18px 0 0 0;
        .ques{
          font-size: 18px;
          font-weight: bold;
        }
        .ans{
          font-size: 16px;
        }
      }
    }
    .container{
      position: relative;
      height:200px;
      .avatar{
      width: 100px;
      height: 100px;
      border-radius: 8px;
      background: blue;
      margin: -50px 0 0 20px;
      z-index: 10;
      position: relative;
    }
    .exponent{
      position: absolute;
      top: 36%;
      left: 40%;
      font-size: 18px;
    }
    }
  }
</style>
