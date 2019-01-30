<!-- 搜索框 -->
<template>
  <div class="v-input" :style="{'width':width}">
    <input :type="type" :placeholder="placeholder" :style="{'text-align':ta}" @input="handleInput">
    <i :class="icon"></i>
  </div>
</template>

<script>
export default {
  model:{
    prop: 'value',
    event: 'input'
  },
  props: {
    value: String,
    type: String,
    placeholder: String,
    width:String,
    icon:String,
    ta:{
      default:'',
      type:String
    }
  },
  methods: {
    handleInput(e){
      this.$emit('input',e.target.value)
    }
  }
}
</script>

<style lang='less' scoped>
.v-input{
  display: flex;
  transition:all .25s;
  border:1px solid #f2f2f2;
  background: #fff;
  color:#777777;
  border-radius: 30px;
  input{
    border:none;
    outline: none;
    padding: 6px 0;
    text-indent: 10px;
    width: 100%;
    border-radius: 30px;
  }
  i{
    padding: 4px 10px 0 5px;
  }
}

</style>