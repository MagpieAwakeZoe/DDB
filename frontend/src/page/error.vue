<template>
  <div>
      error
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods:{

  },
  mounted () {
    this.axios({
      method:'get',
      url:'http://localhost:3000/regist/gainData',
      data:{}
    }).then( res => {
      console.log(res);
    })
  }
}
</script>
<style lang="less">

</style>
