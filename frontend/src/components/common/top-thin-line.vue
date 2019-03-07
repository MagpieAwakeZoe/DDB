<template>
  <div class="co-top-thin-line">
    <mu-container>
      <mu-paper class="demo-paper" :z-depth="1">123</mu-paper>
    </mu-container>
  </div>
</template>

<script>
export default {
    name: 'topThinLine',
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
    .co-top-thin-line{

    }
</style>
