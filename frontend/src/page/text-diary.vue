<template>
  <div class="pg-text-diary">
    <topDiaryBtn></topDiaryBtn>
    <div class="title">
      <input type="text" placeholder="标题">
    </div>
    <div class="main-body">
      <textarea placeholder="请输入"></textarea>
    </div>
  </div>
</template>

<script>
import topDiaryBtn from "@/components/common/top-diary-btn.vue"
export default {
  components:{
    topDiaryBtn
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

    };
  }
}
</script>
<style lang="less">
  .pg-text-diary{
    .title{
      input{
        border: none;
        outline: 0;
        color: transparent;
        text-shadow:0 0 0 #000000;
        background: transparent;
        font-size: 20px;
        padding: 8px;
      }
    }
    .main-body{
      textarea{
        width: 100%;
        min-height: 600px;
        border: none;
        outline: 0;
        color: transparent;
        text-shadow:0 0 0 #000000;
        background: transparent;
        font-size: 14px;
        padding: 0px 8px 10px 10px;
      }
    }
  }
</style>
