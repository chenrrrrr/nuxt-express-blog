<template>
  <div class="sidebar sidebar-l">
    {{hitokoto}} 
  </div>
</template>

<script>

export default {
  async asyncData({app}) {
    let yiyan = await app.$axios.get('https://v1.hitokoto.cn/?encode=json')
    return { hitokoto: yiyan.data.hitokoto }
  }
}
</script>

<style lang="less" scoped>

</style>
