<template>
  <div class="pg-login">
    <div class="loginarea">
      <div class="email box">
        <input type="text" placeholder="请输入您的邮箱">
      </div>
      <mu-divider></mu-divider>
      <div class="password box">
        <input type="password" placeholder="请输入密码">
      </div>
    </div>
    <div class="loginbtn">
      登录
    </div>
    <div class="bottomlink">
      <span>忘记密码</span><span>&nbsp;|&nbsp;</span><span @click="goRegist">注册账号</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods:{
    goRegist () {
      this.$router.push('/regist');
    }
  },
  mounted () {
    this.axios({
      method:'get',
      url:'http://localhost:3000/regist/gainData',
      data:{}
    }).then( res => {
      console.log(res);
    })
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
