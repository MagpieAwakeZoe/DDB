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
        <mu-list textline="two-line">
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <mu-list-item-title>Ali Connors</mu-list-item-title>
              <mu-list-item-sub-title>
                I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
              </mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>15 min</mu-list-item-after-text>
              <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <mu-list-item-title>me, Scrott, Jennifer</mu-list-item-title>
              <mu-list-item-sub-title>
                Wish I could come, but I'm out of town this weekend.
              </mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>2 hr</mu-list-item-after-text>
              <mu-checkbox color="yellow700" v-model="selects" value="value2"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <mu-list-item-title>Sandra Adams</mu-list-item-title>
              <mu-list-item-sub-title>
                Do you have Paris recommendations? Have you ever been?
              </mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>6 hr</mu-list-item-after-text>
              <mu-checkbox color="yellow700" v-model="selects" value="value3"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <mu-list-item-title>Trevor Hansen</mu-list-item-title>
              <mu-list-item-sub-title>
                Have any ideas about what we should get Heidi for her
              </mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-list-item-after-text>12 hr</mu-list-item-after-text>
              <mu-checkbox color="yellow700" v-model="selects" value="value4"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
            </mu-list-item-action>
          </mu-list-item>
          <mu-divider></mu-divider>
          <mu-list-item avatar :ripple="false" button>
            <mu-list-item-content>
              <mu-list-item-title>Britta Holt</mu-list-item-title>
              <mu-list-item-sub-title>
                We should eat this: Grate, Squash, Corn, and tomatillo Tacos.
              </mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action >
              <mu-list-item-after-text>18hr</mu-list-item-after-text>
              <mu-checkbox color="yellow700" v-model="selects" value="value5"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
            </mu-list-item-action>
          </mu-list-item>
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
      selects: []
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1);
    }
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
  }
}
</style>
