<template>
<!-- key值驱动子组件更新 -->
<!-- 给子组件绑定key值，key值设置为可控的变量，操作key值改变，即可刷新子组件 -->
  <div>
    <div>A组件绑定的key值：{{keyValue}}</div>
    <A :key="keyValue"/>
    <a-button type="primary" @click="handleChangeKeyValue">点击改变A组件的key值, A组件会重新刷新</a-button>
  </div>
</template>

<script>
import A from './A.vue';

export default {
  components: {
    A,
  },
  data () {
    return {
      keyValue: 1,
    }
  },
  methods: {
    // 每次点击按钮,keyValue值加1,keyValue变了,A组件就会重新刷新、重新加载
    handleChangeKeyValue() {
      this.keyValue += 1;
    },
  }
}
</script>

<style lang="less" scoped>

</style>
