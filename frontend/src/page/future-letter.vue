<template>
  <div class="pg-future-letter">
    <div class="show-letter">
      <div class="top">
        <img src="../assets/images/top.jpg" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span>{{futureLetter.title}}</span>
        </div>
        <div class="letter">
          <span>{{futureLetter.content}}</span>
        </div>
        <div class="date">
          <span>{{futureLetter.year}}年{{futureLetter.month}}月{{futureLetter.day}}日{{futureLetter.hour}}:{{futureLetter.minute}}</span>
        </div>
      </div>
      <div class="bottom">
        <img src="../assets/images/bottom.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      futureLetter: ''
    }
  },
  methods:{

  },
  mounted () {
    this.futureLetter = JSON.parse(localStorage.getItem('futureLetter'));
    // console.log(this.futureLetter);
  }
}
</script>
<style lang="less">
  .pg-future-letter{
    .show-letter{
      line-height: 0;
      .top{
        img{
          width: 100%;
        }
      }
      .content{
        color: white;
        width: 100%;
        min-height: 178px;
        background: #273c6b;
        .title{
          width: 80%;
          height: 30px;
          // background: red;
          margin: 0 auto 5%;
          line-height: 30px;
          font-size: 18px;
          span{
            padding-left: 5%;
          }
        }
        .letter{
          font-size: 13px;
          width: 80%;
          // background: pink;
          line-height: 1.5;
          margin: 0 auto;
          letter-spacing: 2px;
          span{
            padding: 0 0 0 5%;
          }
        }
        .date{
          font-size: 12px;
          width: 80%;
          // background: pink;
          line-height: 1.5;
          margin: 5% 0 0 45%;
          letter-spacing: 2px;
          span{
            padding: 0 0 0 5%;
          }
        }
      }
      .bottom{
        img{
          width: 100%;
        }
      }
    }
  }
</style>
