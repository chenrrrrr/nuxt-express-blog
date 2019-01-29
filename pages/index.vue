<template>
  <div class="sidebar sidebar-l">
    <nuxt-link to="/yiyan">一言</nuxt-link>
    {{res}}
  </div>
</template>

<script>

export default {
  async asyncData({app}) {
    let res = await app.$axios.post('/api/user/getData')
    return { res:res.data }
  }
}
</script>

<style lang="less" scoped>

</style>

