<template>
  <div class="co-thin-line">

  </div>
</template>

<script>
export default {
    name: 'thinLine',
    props: {
        fixed: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .co-thin-line{
      width: 100%;
      height: 1px;
      display: block;
      position: fixed;
      bottom: 50px;
      transform: scale(2,1);
      background-color:#eeeeee;
    }
</style>
