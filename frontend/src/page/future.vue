<template>
  <div class="pg-future">
    <div id="main">
      <div class="bg">
        <div class="letter">
          <div class="title">
            <p><input type="text" placeholder="输入标题" v-model="futureMail.title"></p>
          </div>
          <div class="content">
            <p><textarea name="" id="" cols="36" rows="12" placeholder="写点什么吧" v-model="futureMail.content"></textarea></p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <mu-icon value="arrow_back" class="mu-icon" @click="goBack"></mu-icon>
      <div class="time">
        <mu-date-input  icon="today" v-model="futureMail.date" type="dateTime" label-float full-width landscape></mu-date-input>
      </div>
      <div class="save" @click="sendMail">发送</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Message from 'muse-ui-message';
Vue.use(Message);
export default {
  data() {
    return {
      futureMail: {
        futureSeconds: '',
        title: '',
        content: '',
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
        date: ''
      }
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    sendMail () {
      // console.log(this.futureMail.pastDate);
      localStorage.setItem('futureLetter',JSON.stringify(this.futureMail));
      // console.log(this.futureMail.futureSeconds);
      this.futureMail.futureSeconds = this.futureSeconds = this.futureMail.date.getHours() * 3600 + this.futureMail.date.getMinutes() * 60 + this.futureMail.date.getSeconds();
      localStorage.setItem('futureTime',this.futureMail.futureSeconds);
      // console.log(localStorage.getItem('futureTime'));
      this.$alert('您的信已寄出');
      this.$router.go(-1);

    }
  },
  mounted () {
    let date = new Date();
    this.futureMail.year = date.getFullYear();
    this.futureMail.month = date.getMonth();
    this.futureMail.day = date.getDate();
    this.futureMail.hour = date.getHours();
    this.futureMail.minute = date.getMinutes();
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
.pg-future {
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
    top: 0px;
    position: absolute;
    z-index: 10;
    bottom: 60px;
    width: 100%;
    // margin: 5%;
    box-shadow:none;
    .bg{
      width: 100%;
      height: 100%;
      background: url('../assets/images/letter.jpg') no-repeat;
      background-size: cover;
      position: relative;
      .letter{
        width: 80%;
        height: 50%;
        // background: red;
        position: absolute;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 70%;
        padding: 1em;
        border: 1px solid transparent;
        background:
        linear-gradient(white, white) padding-box,
        repeating-linear-gradient(-45deg,
          pink 0, pink 25%, white 0, white 50%
        ) 0 / .6em .6em;
        .title p,.content p{
          margin: 10px 0 0 10px;
          padding: 0;
        }
        .title p input{
          border: 0;
          outline: 0;
          font-weight: bold;
        }
        .content p textarea{
          border: 0;
          outline: 0;
          font-size: 12px;
        }
      }
    }
  }
  .footer{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 10%;
    background: rgb(255,135,155);
    position: absolute;
    z-index: 12;
    top: 90%;
    .mu-icon{
      margin: 5% 0 0 0;
      color: white;
    }
    .save{
      margin: 6% 0 0 0;
      color: white;
    }
    .mu-text-field-input{
      margin-top:7%;
      color: white;
      width: 145px;
    }
    .mu-input{
      padding-bottom: 0;
    }
  }
}
</style>
