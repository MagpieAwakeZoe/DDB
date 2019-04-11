<template>
  <div class="pg-my">
    <mu-container>
      <mu-paper class="demo-paper" :z-depth="1">
        <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
          <div><p style="color:black;">我&nbsp;的</p></div>
        </mu-tabs>
      </mu-paper>
      <div class="demo-text" v-if="active1 === 0">
        <div class="message-container">
           <div class="head-tab">
             <div class="head-container">
             <div class="avantar" @click="toUpload">
               <img :src="imgURL" alt="">
             </div>
             <div class="account">
               <div class="email">
                 <p>{{userData.email}}</p>
               </div>
               <div class="niname">
                 <p>昵称:    {{userData.niname}}</p>
               </div>
             </div>
             </div>
           </div>
           <div class="mylist">
            <!-- <mu-paper :z-depth="1" class="demo-list-wrap"> -->
              <mu-list>
                <mu-list-item button :ripple="false" class="mu-li">
                  <mu-list-item-action>
                    <mu-icon value="account_box"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title @click="goPersonalData">个人中心</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-icon value="play_arrow"></mu-icon>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button :ripple="false" class="mu-li">
                  <mu-list-item-action>
                    <mu-icon value="alarm"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title @click="writeDiary">每日提醒写故事</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-icon value="play_arrow"></mu-icon>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button :ripple="false" class="mu-li">
                  <mu-list-item-action>
                    <mu-icon value="drafts"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title @click="goLetter">未来的信</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-icon value="play_arrow"></mu-icon>
                  </mu-list-item-action>
                </mu-list-item>
                <mu-list-item button :ripple="false" class="mu-li">
                  <mu-list-item-action>
                    <mu-icon value="cached"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title @click="goRubbish">回收站</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-icon value="play_arrow"></mu-icon>
                  </mu-list-item-action>
                </mu-list-item>
                 <mu-list-item button :ripple="false" class="mu-li">
                  <mu-list-item-action>
                    <mu-icon value="star"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title @click="goFavourite">我的收藏</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-icon value="play_arrow"></mu-icon>
                  </mu-list-item-action>
                </mu-list-item>
                 <mu-list-item button :ripple="false" class="mu-li">
                  <mu-list-item-action>
                    <mu-icon value="face"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title @click="goImpression">印象</mu-list-item-title>
                  <mu-list-item-action>
                    <mu-icon value="play_arrow"></mu-icon>
                  </mu-list-item-action>
                </mu-list-item>
                <div class="gray"></div>
                <mu-list-item button :ripple="false" class="mu-li quit">
                  <mu-list-item-title class="quit-text" @click="quitAccount">退出账号</mu-list-item-title>
                </mu-list-item>
              </mu-list>
            <!-- </mu-paper> -->
           </div>
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
      active1: 0,
      user_id: null,
      imgURL: '',
      avatar: '',
      userData: []
    };
  },
  methods: {
    quitAccount () {
      //进行一些操作和处理
      localStorage.removeItem('vuex');
      this.$router.push('/login');
    },
    goPersonalData () {
      this.$router.push('/personalData');
    },
    goLetter () {
      this.$router.push('/future');
    },
    goRubbish () {
      this.$router.push('/rubbish');
    },
    goFavourite () {
      this.$router.push('/favourite');
    },
    goImpression () {
      this.$router.push('/impression');
    },
    writeDiary () {
      this.$router.push('/setTime');
    },
    toUpload () {
      this.$router.push('/uploader');
    }
  },
  mounted () {
    this.avatar = this.$store.state.avatar;
    // console.log(this.avatar)
    this.user_id = this.$store.state.user_id;
    // console.log(this.user_id)
    this.axios({
      method:'get',
      url:'http://localhost:3000/regist/gainPage?user_id=' + this.user_id
    }).then(res=>{
      this.userData = res.data;
      let URL = res.data.avatar;
      this.imgURL = 'http://localhost:3000' + URL;
      // console.log(this.imgURL);
      //将头像存储在vuex中
      this.$store.commit({
          type: "saveAvatar",
          avatar: this.imgURL
      });
    })
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
      height: 100vh - 50px;
      background:#f5f5f5;
      .head-tab{
        width: 100%;
        height: 100px;
        background: #ffffff;
        overflow: hidden;
        .head-container{
          width: auto;
          height: 60px;
          // background: yellow;
          margin: 20px 0 0 0;
          overflow: hidden;
          .avantar{
            width: 60px;
            height: 60px;
            border-radius:8px;
            float: left;
            margin: 0 0 0 20px;
            img{
              width: 60px;
              height: 60px;
              border-radius:8px;
            }
          }
          .account{
            width: 200px;
            height: 60px;
            // background:gray;
            float: left;
            margin: 0 0 0 20px;
            .email{
              p{
                margin: 5px;
                padding: 0;
                font-size: 16px;
              }
            }
            .niname{
              p{
                margin: 8px 5px 5px 5px;
                padding: 0;
                font-size: 12px;
                color: rgb(117,117,117);
              }
            }
          }
        }
      }
      .mylist{
        margin-top: 16px;
        width: 100%;
        height: 400px;
        background: white;
        .gray{
          width: 100%;
          height: 50px;
          background: rgb(245,245,245);
        }
        .quit{
          .quit-text{
            text-align: center;
            color: red;
          }
        }
        .mu-li::after{
          content:'';
          width: 100%;
          height: 1px;
          display: block;
          background: #f5f5f5;
        }
      }
    }
  }
</style>
