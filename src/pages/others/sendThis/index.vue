<template>
<!-- 发送当前组件的this到其他的js文件，供js文件使用 -->
  <div></div>
</template>

<script>
import sendThis from './index.js';

export default {
  data() {
    return {
      name: '姓名',
      age: '年龄',
    }
  },
  mounted() {
    sendThis(this);
  },
}
</script>

<style lang="less" scoped>

</style>
