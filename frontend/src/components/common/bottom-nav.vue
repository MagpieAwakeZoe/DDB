<template>
  <div class="co-bottom-nav">
    <div class="bottom-nav">
      <mu-bottom-nav>
        <mu-bottom-nav-item title="社区" icon="home" to="/community"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="日记" icon="book" to="/diary"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="写日记" icon="face" to="/write"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="消息" icon="message" to="/message"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="我的" icon="account_box" to="/my"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
  </div>
</template>

<script>
export default {
    name: 'bottomNav',
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
.co-bottom-nav{
  width: 100%;
  .bottom-nav{
    position: fixed;
    bottom: 0;
    width: 90%;
    height: 50px;
    background: transparent;
    margin: 0 0 0 16px;
    .mu-bottom-nav{
      background-color: #fcfafa;
      .mu-bottom-item{
        min-width: 72px;
        color:#ff6f00;
        background-color: #fcfafa;
      }
      .mu-bottom-item-text{
        font-size: 6px;
      }
    }
  }
}
</style>
