<template>
  <div class="pg-regist">
    <mu-container class="main-container">
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" help-text="" prop="email" :rules="usernameRules">
          <mu-text-field v-model="validateForm.email" prop="email" placeholder="邮箱名"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
            <mu-text-field type="password" v-model="validateForm.password" prop="password" placeholder="3-10位数字或者字母"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="isAgree" :rules="argeeRules">
          <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">注册</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
    <div class="loginanchor">
      <u @click="goLogin">已有账号，去登录</u>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '须填写您的邮箱'},
        { validate: (val) => /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val), message: '请输入正常的邮箱格式'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
      validateForm: {
        email: '',
        password: '',
        isAgree: false
      }
    }
  },
  methods:{
     submit () {
      this.$refs.form.validate().then((result) => {
        // console.log('form valid: ', result);
        this.axios({
          method:'post',
          url:'http://localhost:3000/regist/data',
          data:{
            email:this.validateForm.email,
            password:this.validateForm.password
          }
        }).then(()=>{
          this.$router.push('/login');
        })
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        email: '',
        password: '',
        isAgree: false
      };
    },
    goLogin () {
      this.$router.push('/login');
    }
  }
}
</script>
<style lang="less">
  .pg-regist{
    .main-container{
      margin:90px auto 10px;
      width: 80%;
    }
    .mu-text-field-input::-webkit-input-placeholder{
      font-size: 13px;
    }
    .loginanchor{
      width: 100px;
      color: gray;
      font-size: 12px;
      margin: 0 auto;
    }
  }
</style>
