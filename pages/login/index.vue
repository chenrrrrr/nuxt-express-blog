<template>
  <div class="login" :style="{background:'url('+bing+') 100% 100% no-repeat'}">
    <div class="list">
      <v-input v-model="vm_username" placeholder="用户名" type="text" width="100%" icon="fa fa-user" ta="center"></v-input>
      <v-input v-model="vm_password" placeholder="密码" type="password" width="100%" icon="fa fa-lock" ta="center" @keydown.native="handleTapEnter"></v-input>
      <button class="btn br30" @click="handleLogin">登入</button>
    </div>
  </div>
</template>
<script>
import Input from '@/components/Input'
export default {
  head () {
    return {
      title: `${this.html_title}`,
      meta: [
        { hid: 'description', name: 'description', content: "chenrrrrr的博客后台" }
      ],
    }
  },
  mounted(){
    this.getBing()
  },
  data() {
    return {
      html_title:'后台 - 登入',
      vm_username: '',
      vm_password: '',
      bing:'',
    };
  },
  components:{
    'v-input':Input
  },
  methods:{
    handleTapEnter(e){
      if(e.keyCode === 13){
        this.handleTapEnter();
      }
    },
    async handleLogin(){
      let res = await axios.post('/api/admin/user/login',{username:this.vm_username,password:this.vm_password})
      if(res.data.code === 0){
        this.$router.replace('/admin')
      }
    },
    async getBing(){
      let bing = await this.$axios.get('/api/admin/util/bing')
      this.bing = bing.data
    }
  }
};
</script>
<style lang="less" scoped>
.login{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .list{
    width: 250px;
    padding: 20px;
    .v-input{
      margin-bottom: 20px;
    }
  }
}
</style>
