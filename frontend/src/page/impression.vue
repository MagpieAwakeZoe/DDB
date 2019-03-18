<template>
  <div class="pg-impression">
    <header>
      <mu-icon value="arrow_back" class="mu-icon" @click="goBack"></mu-icon>
      <span>自我评价</span>
      <span style="padding-right:6%;color:#2196f3">&emsp;</span>
    </header>
    <div id="main">
      <div class="impress-co">
        <div class="life impress">
          <div class="container m1" id="select">
            <mu-chip class="demo-chip" color="#ffe082"  v-for="(value,index) in AllSectionB" :key="index">{{value}}</mu-chip>
          </div>
        </div>
      </div>
      <div class="life impress" @click="section1">
        <div class="container m1">
          <mu-chip class="demo-chip" color="#fce4ec" data-index="乐观">乐观</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="正义">正义</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="独立">独立</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="自律">自律</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="吃货">吃货</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="积极向上">积极向上</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="自信满满">自信满满</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="充满爱心">充满爱心</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="乐观">乐观</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="正义">正义</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="独立">独立</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="自律">自律</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="吃货">吃货</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="积极向上">积极向上</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="自信满满">自信满满</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="充满爱心">充满爱心</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="乐观">乐观</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="正义">正义</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="独立">独立</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="自律">自律</mu-chip>
          <mu-chip class="demo-chip" color="#fce4ec" data-index="吃货">吃货</mu-chip>
        </div>
      </div>
      <div class="community impress" @click="section1">
         <div class="container m2">
           <!-- #e3f2fd -->
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="乐观">乐观</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="正义">正义</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="独立">独立</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="自律">自律</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="吃货">吃货</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="积极向上">积极向上</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="自信满满">自信满满</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="充满爱心">充满爱心</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="乐观">乐观</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="正义">正义</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="独立">独立</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="自律">自律</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="吃货">吃货</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="积极向上">积极向上</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="自信满满">自信满满</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="充满爱心">充满爱心</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="乐观">乐观</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="正义">正义</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="独立">独立</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="自律">自律</mu-chip>
          <mu-chip class="demo-chip" color="#e3f2fd" data-index="吃货">吃货</mu-chip>
        </div>
      </div>
      <div class="work impress" @click="section1">
         <div class="container m3">
           <!-- #dcedc8 -->
          <mu-chip class="demo-chip" color="#dcedc8" data-index="乐观">乐观</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="正义">正义</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="独立">独立</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="自律">自律</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="吃货">吃货</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="积极向上">积极向上</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="自信满满">自信满满</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="充满爱心">充满爱心</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="乐观">乐观</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="正义">正义</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="独立">独立</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="自律">自律</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="吃货">吃货</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="积极向上">积极向上</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="自信满满">自信满满</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index=">充满爱心">充满爱心</mu-chip>
          <mu-divider style="margin:5px;opacity:0"></mu-divider>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="乐观">乐观</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="正义">正义</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="独立">独立</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="自律">自律</mu-chip>
          <mu-chip class="demo-chip" color="#dcedc8" data-index="吃货">吃货</mu-chip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AllSection: [],
      AllSectionB: []
    };
  },
  methods: {
    //去重
    uniq(array){
    var temp = []; //一个新的临时数组
    for(var i = 0; i < array.length; i++){
        if(temp.indexOf(array[i]) == -1){
            temp.push(array[i]);
        }
    }
    return temp;
    },
    goBack () {
      this.$router.go(-1);
    },
    section1 (e) {
      let dom = e.target;
      let index = dom.getAttribute("data-index");
      if (index != null && this.AllSectionB.length < 7) {
        this.AllSection.push(index);
        this.AllSectionB = this.uniq(this.AllSection);
        console.table(this.AllSectionB);
      }
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
.pg-impression {
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
    // bottom: 60px;
    width: 90%;
    max-width: 375px;
    margin: 5%;
    box-shadow:none;
    .impress-co{
        height: 100px;
        background: #eceff1;
        border-radius: 12px;
        #select{
          .demo-chip{
            border: 1px solid #ff8f00;

            margin: -5px 3px 15px 0;
          }
          .mu-inverse{
            color: #f57c00;
          }
        }
    }
      .life{
        // background: aqua;
      }
      .community{
        // background: purple;
      }
      .work{
        // background: green;
      }
      .impress{
        height: 240px;
        overflow: hidden;
        .container{
          width: 90%;
          height: 90%;
          margin: 5%;
          border-radius: 12px;
        }
        .m1{
          .demo-chip{
            border: 1px solid #f48fb1;
          }
          .mu-inverse{
            color: #f48fb1;
          }
        }
        .m2{
          .demo-chip{
            border: 1px solid #64b5f6;
          }
          .mu-inverse{
            color: #64b5f6;
          }
        }
        .m3{
          .demo-chip{
            border: 1px solid #8bc34a;
          }
          .mu-inverse{
            color: #8bc34a;
          }
        }

      }

  }
}
</style>
