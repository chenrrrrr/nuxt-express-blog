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
  async asyncData({app}){
    let bing = await app.$axios.get('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
    return { bing: `http://s.cn.bing.net${bing.data.images[0].url}` }
  },
  data() {
    return {
      html_title:'后台 - 登入',
      vm_username: '',
      vm_password: '',
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
      let res = await this.$axios.post('/api/admin/user/login',{username:this.vm_username,password:this.vm_password})
      if(res.data.code === 0){
        console.log(1)
      }
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
