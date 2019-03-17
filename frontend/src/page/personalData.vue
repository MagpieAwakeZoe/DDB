<template>
  <div class="pg-personalData">
    <header>
      <mu-icon value="arrow_back" class="mu-icon" @click="goBack"></mu-icon>
      <span>个人资料</span>
      <!-- <mu-icon value="star" class="mu-icon" style="visibility:hidden;"></mu-icon> -->
      <span style="padding-right:6%;color:#2196f3" @click="finish">完成</span>
    </header>
    <div id="main">
      <mu-container>
        <mu-form :model="form">
          <mu-form-item prop="input" label="昵称">
            <mu-text-field v-model="form.niname"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="input" label="性别">
            <mu-text-field v-model="form.sex"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="date" label="生日">
            <mu-date-input v-model="form.birthday" type="dateTime" actions></mu-date-input>
          </mu-form-item>
          <mu-form-item prop="input" label="地区">
            <mu-text-field v-model="form.area"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="textarea" label="简介">
            <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.Introduction"></mu-text-field>
          </mu-form-item>
        </mu-form>
      </mu-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        niname: '',
        sex: '',
        birthday: '',
        area: '',
        Introduction: ''
      }
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    finish () {
      //存储用户昵称到vuex仓库
      this.$store.commit({
          type: "saveNiname",
          niname: this.form.niname,
      });
      const user_id = this.$store.state.user_id;
      // console.log(user_id);
      // console.log(this.form);
      this.axios({
        method:'put',
        url:'http://localhost:3000/regist/data/'+ user_id,
        data:{
          niname: this.form.niname,
          sex: this.form.sex,
          birthday: this.form.birthday,
          area: this.form.area,
          Introduction: this.form.Introduction
        }
      }).then( res => {
        console.log(res);
      });
    }
  },
  mounted () {
    //展示个人资料
        const user_id = this.$store.state.user_id;
        // console.log(user_id);
        this.axios({
          method:'get',
          url:'http://localhost:3000/regist/gainPage?user_id=' + user_id,
        }).then( res => {
          this.form = res.data;
          // console.log(this.form);
        })
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
.pg-personalData {
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
    .title{
      margin-left: 9%;
      font-size: 16px;
      font-weight: 600;
      p{
        margin: 0;
        padding: 0 0 6px 0 ;
      }
    }
    .text{
      width:90%;
      margin:auto;
      margin-top:-4%;
      font-size:14px;
      letter-spacing: 1px;
    }
  }
}
</style>
