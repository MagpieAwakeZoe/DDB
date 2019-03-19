<template>
  <div class="pg-search">
    <mu-container>
      <mu-paper class="demo-paper" :z-depth="1">
        
      </mu-paper>
    </mu-container>
  </div>
</template>
<script>
export default {
  name: 'Search',
  props: {
          fixed: {
              type: Boolean,
              default: false
          }
  }
}
</script>
<style lang="less">
  .pg-search{
    .demo-paper{
      width: 100%;
    }
    .container{
      padding: 0;
      .mu-tabs-center{
        height: 40px;
      }
    }
  }
</style>
