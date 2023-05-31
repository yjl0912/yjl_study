<template>
  <!-- props传参的值在子组件只能使用，不能修改。
  但props传参使用.sync修饰符可以在子组件修改props的值，并且父组件会同步更新。
  写法为this.$emit('update:传入的变量名', 要改成的值)。 -->
  <div>
    <div>父组件中的testValue值：{{testValue}}</div>
    <Child :testValue.sync="testValue"/>
  </div>
</template>

<script>
import Child from './child.vue';

export default {
  components: {
    Child,
  },
  data() {
    return {
      testValue: 1,
    }
  }
}
</script>

<style lang="less" scoped>

</style>