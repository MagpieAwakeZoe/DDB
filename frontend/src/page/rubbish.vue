<template>
  <div class="pg-rubbish">
    <header>
      <mu-icon value="arrow_back" class="mu-icon" @click="goBack"></mu-icon>
      <span>回收站</span>
      <span style="padding-right:6%;color:#2196f3">&emsp;</span>
    </header>
    <div id="main">
      <div class="list">
      <mu-paper :z-depth="1" class="demo-list-wrap">
        <mu-list textline="two-line" class="listGroup">
          <div class="rubbishList" v-for="(item,index) in rubbish" :key="index">
            <mu-list-item avatar :ripple="false" button>
              <mu-list-item-content>
                <mu-list-item-title>{{item.title}}</mu-list-item-title>
                <mu-list-item-sub-title>
                  {{item.content}}
                </mu-list-item-sub-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
          </div>


        </mu-list>
      </mu-paper>
      </div>
      <div class="nolist">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selects: [],
      rubbish: []
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  },
  mounted () {
    const user_id = this.$store.state.user_id;
      this.axios({
        method:'get',
        url:'http://localhost:3000/rubbish/gainPage?user_id='+user_id,
      }).then( res => {
        this.rubbish = res.data;
        // console.log(this.rubbish);
      })
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
.pg-rubbish {
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
    top: 50px;
    position: absolute;
    z-index: 10;
    bottom: 60px;
    width: 90%;
    max-width: 375px;
    margin: 5%;
    box-shadow:none;
    .listGroup{
      min-height: 490px;
      border-radius: 6px;
      // background: #e0f7fa;
      background: rgba(233, 255, 38, 0.1);
    }
  }
}
</style>
