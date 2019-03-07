<template>
  <div class="top-diary-btn">
    <div class="top">
      <p @click="goBack">取消</p>
      <p>2019年02月28日</p>
      <p>完成</p>
    </div>
  </div>
</template>
<script>

export default {
    name: 'topDiaryBtn',
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
    }
  }
</style>
