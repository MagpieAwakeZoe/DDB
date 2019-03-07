<template>
  <div class="top-diary-btn">
    <div class="top">
      <p @click="goBack">取消</p>
      <p>{{date.year}}年{{date.month}}月{{date.day}}日{{date.hour}}点</p>
      <p>&nbsp;&nbsp;</p>
    </div>
  </div>
</template>
<script>

export default {
    name: 'topDiaryBtn',
    data () {
      return {
        date:{
          year: new Date().getFullYear(),
          month: new Date().getMonth()+1,
          day: new Date().getDate(),
          hour: new Date().getHours()
        }
      }
    },
    props: {
        fixed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
      goBack () {
        this.$router.go(-1);
      }
    },
    mounted () {
      // console.log(this.date.year);
      this.$store.commit({    //存时间
              type: "saveYear",
              year: this.date.year
      });
      this.$store.commit({    //存时间
              type: "saveMonth",
              month: this.date.month
      });
      this.$store.commit({    //存时间
              type: "saveDay",
              day: this.date.day
      });
      this.$store.commit({    //存时间
              type: "saveHour",
              hour: this.date.hour
      });
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .top-diary-btn{
    .top{
      box-shadow:#cccccc 0px 0px 6px;
      padding: 1px 4% 1px 4%;
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      letter-spacing: 1px;
    }
  }
</style>
