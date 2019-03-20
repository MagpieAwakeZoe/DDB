<template>
  <div class="pg-login">
    <div class="loginarea">
      <div class="email box">
        <input type="text" placeholder="请输入您的邮箱" v-model="formData.email">
      </div>
      <mu-divider></mu-divider>
      <div class="password box">
        <input type="password" placeholder="请输入密码" v-model="formData.password">
      </div>
    </div>
    <div class="loginbtn" @click="submit">
      登录
    </div>
    <div class="bottomlink">
      <span>忘记密码</span><span>&nbsp;|&nbsp;</span><span @click="goRegist">注册账号</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from 'muse-ui-toast';
Vue.use(Toast);
export default {
  data() {
    return{
      formData:{
        email:'',
        password:'',
        status:'',
        user_id: ''
      }
    }
  },
  methods:{
    goRegist () {
      this.$router.push('/regist');
    },
    submit () {
        this.axios({
          method:'post',
          url:'http://localhost:3000/regist/login',
          data:{
            email:this.formData.email,
            password:this.formData.password
          }
        }).then( res => {
          this.user_id = res.data.content._id;
          this.status = res.data.status;
          if (this.status === 1){
            Toast.info('登录成功');
            this.$store.commit('onlineStatus');   //登录成功后登录状态由-1变成1
            this.$store.commit({    //登录成功之后把用户名,用户id存到store里
              type: "saveUserName",
              userName: this.formData.email
            });

            this.$store.commit({    //登录成功之后把用户id存到store里
              type: "saveUserId",
              user_id: this.user_id
            });
            this.$router.push('/community');
          } else if (this.status === 2) {
            Toast.error('密码输入错误');
          } else if (this.status === 0) {
            Toast.error('用户名错误');
          }
        })
    }
  }
}
</script>
<style lang="less">
  .pg-login{
    .loginarea{
      width: 90%;
      height: 80px;
      background:#eeeeee;
      border-radius: 8px;
      margin: 30% auto;
      .box{
        input{
          border: none;
          background: transparent;
          width: 100%;
          height: 40px;
          outline: none;
          padding: 2px;
          padding-left:10px;
        }
        input::-webkit-input-placeholder{
          font-size: 13px;
          color: #757575;
        }
      }
    }
  .loginbtn{
    margin: 0 auto;
    text-align: center;
    background: #40c4ff;
    color: white;
    width: 90%;
    height: 40px;
    line-height: 40px;
    border-radius: 8px;
    letter-spacing: 4px;
  }
  .bottomlink{
    font-size: 12px;
    color:gray;
    text-align: center;
    margin: 70% 0 0 0;
  }
 }
</style>
