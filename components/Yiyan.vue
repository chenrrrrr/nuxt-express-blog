<!-- Yiyan -->
<template>
  <div>{{yiyan}}</div>
</template>

<script>
export default {
  data () {
    return {
      yiyan: ''
    };
  },
  mounted() {
    this.getYiyan()
  },
  methods:{
    async getYiyan(){
      let [yiyan,print,i,timer] = ['','',0,null]
      try{
        yiyan = await this.$axios.get('https://v1.hitokoto.cn/?encode=json')
        print = `${yiyan.data.hitokoto} — ${yiyan.data.from}`
      }catch(e){
        if(e){
          print = '你从来没有见过如此标准的十五字 — 亚里士多德'
        }
      }
      timer = setInterval(()=>{
        if( i < print.length ){
          this.yiyan += print[i]
          i++
        }else{
          clearInterval(timer)
        }
      },200)
    } 
  }
}
</script>
