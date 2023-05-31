<template>
  <div>
    <div>父组件中的testValue值：{{testValue}}</div>
    <a-button type="primary" @click="handleClick">点击按钮,修改props值</a-button>
  </div>
</template>

<script>
export default {
  props: {
    testValue: {
      type: Number,
      required: true,
    }
  },
  methods: {
    handleClick() {
      this.$emit('update:testValue', 2); // .sync修改props值的写法
    },
  }
}
</script>

<style lang="less" scoped>

</style>