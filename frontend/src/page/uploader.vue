<template>
  <div class="uploader">
    <form>
      <input type="file" @change="selectImg" ref="uploadImg" class="file" id="file">
      <label for="file" class="btn-file">选择一个文件</label>
      <br>
      <input type="submit" @click="submitImg" class="submit">
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import Message from 'muse-ui-message';
Vue.use(Message);
export default {
  data () {
    return {
      image: null,
      formdata: new FormData(),
      user_id: ''
    }
  },
  methods: {
    selectImg () {
      this.image = this.$refs.uploadImg.files[0];
      this.formdata.append('file',this.image);
      // console.log(this.image);
      // console.log(this.formdata.get('file'));
    },
    submitImg () {
      this.axios({
          method:'put',
          url:'http://localhost:3000/upload/upload/'+this.user_id,
          data: this.formdata,
          headers:{
            'Content-Type': 'multipart/form-data'
          }
      }).then(res=>{
        this.$alert('头像上传成功');
        // console.log(1);
      }).then(() =>{
        // console.log(2);
        this.$router.push('/my');
      }).catch(err=>{
        console.log(err);
      });
    }
  },
  mounted () {
    this.user_id = this.$store.state.user_id;
  }
}
</script>

<style lang="less">
  .uploader{
    .file{
      opacity: 0;
    }
    .btn-file{
      background: #00c853;
      display: block;
      width: 45%;
      height: 40px;
      border-radius: 8px;
      text-align: center;
      line-height: 40px;
      color: white;
      letter-spacing: 1px;
      margin: 0 auto;
    }
    .submit{
      background: #ef6c00;
      display: block;
      width: 100px;
      height: 40px;
      outline: none;
      box-shadow: none;
      border: none;
      border-radius: 8px;
      color: white;
      letter-spacing: 1px;
      margin: 0 auto;
    }
  }
</style>
