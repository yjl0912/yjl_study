<template>
  <!-- 类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用TreeSelect。 -->
  <!-- 自定义菜单图标  -->
  <div>
    <a-tree-select
      v-model="value"
      style="width: 100%"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder="Please select"
      allow-clear
      tree-default-expand-all
    >
    <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
      <a-tree-select-node key="random" :selectable="false" value="leaf1" title="my leaf" />
      <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
    </a-tree-select-node>
  </a-tree-select>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {

    }
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
//展开的背景图设置
/deep/ .ant-select-tree-switcher_open {
  width: 50px !important;
  height: 50px !important;
  background: url(../../assets/black.jpg) no-repeat !important;
 }
 //关闭的背景图设置
 /deep/ .ant-select-tree-switcher_close {
  width: 50px !important;
  height: 50px !important;
  background: url(../../assets/logo.png) no-repeat !important;
 }
 // 原本的小三角隐藏（透明度设置为0）
 /deep/ .ant-select-switcher-icon {
  opacity: 0 !important;
 }
</style>
