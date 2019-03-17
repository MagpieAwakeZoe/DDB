<template>
  <div>
      error
  </div>
</template>

<script>
export default {
  data() {
    return{
      user_id:""
    }
  },
  methods:{

  },
  mounted () {
    const user_id = this.$store.state.user_id;
    console.log(user_id);
    this.axios({
      method:'get',
      url:'http://localhost:3000/diary/gainPage?user_id='+user_id,
    }).then( res => {
      console.log(res);
    })
    // console.log(this.$store.state);
  }
}
</script>
<style lang="less">

</style>
