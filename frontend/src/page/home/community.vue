<template>
  <div class="co-community">
    <mu-container>
      <!-- 顶部轮播图 -->
      <mu-carousel hide-controls class="topCarousel">
        <mu-carousel-item>
          <img :src="carouselImg2">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg3">
        </mu-carousel-item>
         <mu-carousel-item>
          <img :src="carouselImg4">
        </mu-carousel-item>
        <mu-carousel-item>
          <img :src="carouselImg5">
        </mu-carousel-item>
      </mu-carousel>

      <!-- 中标题 -->
      <div class="title-container">
        <div class="middle hot-topic">
          <p>心情</p>
        </div>
        <div class="middle my-diary">
          <p>热门话题</p>
        </div>
        <div class="middle evening-page">
          <p>故事集</p>
        </div>
      </div>

      <!-- tab标签页 -->
      <mu-tabs
        :value.sync="active1"
        inverse
        color="secondary"
        text-color="rgba(0, 0, 0, .54)"
        left
        class="tab-title"
      >
        <mu-tab class="tab-cell" :class="{bigfont:isSelected1}" ref="last" @click="titleFocus1">最新</mu-tab>
        <mu-tab class="tab-cell" :class="{bigfont:isSelected2}" ref="focus" @click="titleFocus2">关注</mu-tab>
        <mu-tab class="tab-cell" :class="{bigfont:isSelected3}" ref="sift" @click="titleFocus3">精选</mu-tab>
        <mu-tab class="tab-cell" :class="{bigfont:isSelected4}" ref="story" @click="titleFocus4">故事</mu-tab>
        <mu-icon size="26" value="search" class="search" @click="toSearch"></mu-icon>
      </mu-tabs>
      <div class="tab-text tab0" v-if="active1 === 0">
        <div class="new">
        <mu-card class="card" v-for="(value,index) in newPage" :key="index">
          <mu-card-header class="header">
            <div style="display:flex">
            <mu-avatar slot="avatar">
              <img src="../../assets/images/avat.jpg">
            </mu-avatar>
            <div class="author">
              <div class="niname">{{value.niname}}</div>
              <div class="email">{{value.author}}</div>
            </div>
            </div>
            <div class="focus" @click="focus(value)">
              <span style="color:#fff">+</span>关注
            </div>
          </mu-card-header>
          <!-- TODO:timeago控件 -->
          <div class="timer">
            <p>一个月前</p>
          </div>
          <mu-card-text style="margin-top:-4%;font-size:13px;" @click="details(value)">
            {{value.content}}
          </mu-card-text>
          <div class="user-tag">
            <mu-icon value="thumb_up"></mu-icon><span>{{value.thumbsNum}}</span>
            <mu-icon value="edit"></mu-icon><span>{{value.commentsNum}}</span>
            <mu-icon value="grade"></mu-icon><span>{{value.collectionNum}}</span>
          </div>
        </mu-card>
        </div>
      </div>
      <div class="tab-text" v-if="active1 === 1">
        <!-- <template v-if="focusList.length === 0">
          <div class="tab1">
          <p>还没有关注哦！</p>
          </div>
        </template> -->
        <template>
          <div class="focusList">
              <mu-list style="background:red">
                <mu-list-item button :ripple="false" class="mu-li">
                  <mu-list-item-action>
                    <mu-icon value="account_box"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title>个人中心</mu-list-item-title>
                  <mu-list-item-action>
                    <div style="font-size:14px;">取消关注</div>
                  </mu-list-item-action>
                </mu-list-item>
              </mu-list>
          </div>
        </template>
      </div>
      <div class="tab-text tab2" v-if="active1 === 2">
        <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
        <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
        <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
        <p>“也许吧，未来……给你了。”</p>
      </div>
      <div class="tab-text tab3" v-if="active1 === 3">
        <div class="new">
          <div class="story" @click="storyDetails(story)" v-for="(story,index1) in newStory" :key="index1">
            <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;box-shadow:none;background:rgb(250,250,250);">
              <mu-card-header title="Myron Avatar" sub-title="sub title">
                <mu-avatar slot="avatar">
                  <img src="../../assets/images/avat.jpg">
                </mu-avatar>
              </mu-card-header>
              <!-- TODO:timeago控件 -->
              <div class="timer">
                <h3>{{story.title}}</h3>
              </div>
              <mu-card-text style="margin-top:-4%;font-size:13px;">
                {{story.content}}
              </mu-card-text>
              <p class="bottom-msg">已有239人阅读&emsp;&emsp;{{story.commentsNum}}评论&emsp;&emsp;&emsp;故事写于{{story.time.year}}年{{story.time.month}}月{{story.time.day}}日</p>
            </mu-card>
          </div>
        </div>
      </div>
    </mu-container>
  </div>
</template>

<script>
import carouselImg2 from "@/assets/images/carousel4.png";
import carouselImg3 from "@/assets/images/carousel5.png";
import carouselImg4 from "@/assets/images/carousel6.png";
import carouselImg5 from "@/assets/images/carousel7.png";
export default {
  name: 'Community',
  props: {
          fixed: {
              type: Boolean,
              default: false
          }
  },
  data() {
    return {
      title:'',
      subTitle:'',
      carouselImg2,
      carouselImg3,
      carouselImg4,
      carouselImg5,
      active1:0,
      isSelected1:true,
      isSelected2:false,
      isSelected3:false,
      isSelected4:false,
      //最新日记
      newPage: [],
      newStory: [],
      focusList: []

    };
  },
  methods: {
    //TODO:待优化
    titleFocus1 () {
      this.isSelected1 = false;
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected1 = !this.isSelected1;
    },
    titleFocus2 () {
      this.isSelected1 = false;
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected2 = !this.isSelected2;
    },
    titleFocus3 () {
      this.isSelected1 = false;
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected3 = !this.isSelected3;
    },
    titleFocus4 () {
      this.isSelected1 = false;
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected4 = !this.isSelected4;
    },
    toSearch () {
      this.$router.push('/search');
    },
     details (value) {
      // 存储到本地
      localStorage.setItem('page_detail',JSON.stringify(value));
      this.$router.push({
        path: '/details'
      });
    },
    storyDetails (story) {
      // 存储到本地
      localStorage.setItem('story_detail',JSON.stringify(story));
      this.$router.push({
        path: '/storyDetails'
      });
    },
    focus (value) {
      // console.log(value);
      this.axios({
      method:'post',
      url:'http://localhost:3000/focus/data',
      data: {
        niname: value.niname,
        user_id: value.user_id
      }
    }).then( res => {
      console.log(res);
    })
    }
  },
  mounted () {
    this.axios({
      method:'get',
      url:'http://localhost:3000/diary/gainData'
    }).then( res => {
      this.newPage = res.data;
      // console.log(this.newPage);
    })


    //获取故事
    this.axios({
      method:'get',
      url:'http://localhost:3000/story/gainData'
    }).then( res => {
      this.newStory = res.data;
      // console.log(this.newStory);
    })
  }
};
</script>
<style lang="less">
// .mu-secondary-text-color{
//   color:#ff6f00;
// }
.co-community{
  .mu-carousel-indicator-icon{
    display: none;
  }
  .topCarousel {
    width: 94%;
    height: 100px;
    margin: 2% 0 0 3%;
    border-radius: 12px;
  }

  .title-container {
    width: 94%;
    height: 60px;
    margin: 2% 0 0 3%;
    .middle {
      border: 1px solid rgb(241, 48, 68);
      float: left;
      height: 45px;
      background: url("../../assets/images/btn1.png");
      margin: 7px 4px 8px 4px;
      border-radius: 6px;
      p{
        color: rgb(241, 48, 68);
        font-weight: 600;
        text-align: center;
        letter-spacing: 2px;
      }
    }
    .hot-topic {
      width: 20%;
    }
    .my-diary {
      width: 40%;
    }
    .evening-page {
      width: 30%;
    }
  }

  .tab-text{
    padding-bottom: 56px;
  }
  .tab1{
    background: url("../../assets/images/title-bg.png") no-repeat;
    min-height: 340px;
    text-align: center;
    p{
      color: rgb(72,75,80);
      padding: 20% 0 0 0;
      font-size: 18px;
      letter-spacing: 2px;
    }
  }
  .card{
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
    box-shadow:none;
    background:rgb(250,250,250);
  }
  .tab-title{
    width: 94%;
    margin: 15px 0 5px 3%;
    position: sticky;
    top: 0;
    .tab-cell{

    }
    .search{
      margin: 3px 0 0 12px;
    }
  }

  .tab-text{
    width: 88%;
    margin: 15px 6% 5px 6%;
  }

  .bigfont{
    font-size: 17px;
    font-weight: 800;
  }
  .new{
    .timer{
      width: 100%;
      height: 20px;
      // background: red;
      margin-top: -8%;
      padding-left: 5%;
      font-size: 12px;
      color: #cccccc;
      h3{
        // font-weight: normal;
        color: black;
        letter-spacing: 1px;
      }
    }
    .header{
      display: flex;
      justify-content: space-between;
      .author{
        .niname{
          font-size: 16px;
          margin: 0 0 3px 0;
        }
        .email{
          font-size: 12px;
          color: #78909c;
        }
      }
      .focus{
        font-size: 12px;
        width: 60px;
        height: 22px;
        background: #03a9f4;
        line-height: 22px;
        border-radius: 6px;
        margin: 10px 0 0 0px;
        text-align: center;
        color: white;
        border: 1px solid #cccccc;
        letter-spacing: 2px;
      }
    }
    .bottom-msg{
      padding: 0;
      font-size: 8px;
      color: #c0c0c0;
      width: 100%;
      margin-left: 5%;
      margin-top: -4%;
    }
    .user-tag{
      width: 100%;
      margin-left: -5%;
      color: #cccccc;
      transform:scale(0.8,0.8);
      .material-icons{
        vertical-align: middle;
      }
      span{
        display: inline-block;
        vertical-align: middle;
        padding: 0 30px 0 4px;
      }
    }
  }
}
</style>
