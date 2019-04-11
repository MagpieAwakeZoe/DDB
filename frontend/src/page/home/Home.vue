<template>
  <div class="pg-home">
      <router-view></router-view>
      <thin-line></thin-line>
      <!-- 底部导航 -->
      <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import carouselImg2 from "@/assets/images/carousel2.jpg";
import carouselImg3 from "@/assets/images/carousel3.jpg";
import bottomNav from "@/components/common/bottom-nav.vue"
import thinLine from "@/components/common/thin-line.vue"
import Vue from 'vue'
import Message from 'muse-ui-message';
Vue.use(Message);
export default {
  data() {
    return {
      carouselImg2,
      carouselImg3,
      active1:0,
      isSelected1:true,
      isSelected2:false,
      isSelected3:false,
      isSelected4:false,
      nowAllSecond: '',
      futureTime: '',
      timer: null
    };
  },
  components: {
      bottomNav,
      thinLine
  },
  methods: {
    //待优化
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
    setTimer () {
      // console.log(this.futureTime);
      // console.log(this.nowAllSecond);
      let timeDiffPlus =  this.futureTime - this.nowAllSecond;
      console.log('还有' + timeDiffPlus + '秒收到来信');
      if (timeDiffPlus > 0) {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
        Message.alert('您收到一封未来的信', '提示');
        this.$router.push('/future-letter')
        },timeDiffPlus * 1000);
      } else {
        clearTimeout(this.timer);
      }
    }
  },
  mounted () {
    let now = new Date();
    let nowHour = now.getHours();
    let nowMinute = now.getMinutes();
    let nowSecond = now.getSeconds();
    this.nowAllSecond = nowHour * 3600 + nowMinute * 60 + nowSecond;
    // console.log(this.nowAllSecond);
    this.futureTime = localStorage.getItem('futureTime');
    clearTimeout(this.timer);
    this.setTimer();
  }
};
</script>
<style lang="less">
.pg-home{
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
    // background: red;
    .middle {
      float: left;
      height: 45px;
      background-color: yellow;
      margin: 7px 4px 8px 4px;
      border-radius: 6px;
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
}
</style>
