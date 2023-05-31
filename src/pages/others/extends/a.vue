<template>
  <!-- 组件b继承了组件a, b可以使用a的模板标签、变量、方法等
  如果b组件逻辑与a组件逻辑不同，在b组件重写不同的地方即可，会直接覆盖。
  但是如果b组件template模板标签与a组件不同，需要完全重写template模板标签 -->
  <div>
    <div>变量值{{testValue}}</div>
    <a-button type="primary" @click="handleClick">点击修改变量值</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testValue: 1,
    }
  },
  methods: {
    // 修改变量值为2
    handleClick() {
      this.testValue = 2;
    }
  }
}
</script>

<style lang="less" scoped>

</style>
