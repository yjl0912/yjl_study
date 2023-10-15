<template>
<!-- antd-vue的tabs组件,只要标题部分。 通过隐藏内容部分(修改antdv默认样式)来实现 -->
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="tab1">
        tab1 content
      </a-tab-pane>
      <a-tab-pane key="2" tab="tab2">
        tab2 content
      </a-tab-pane>
      <a-tab-pane key="3" tab="tab3">
        tab3 content
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
/deep/ .ant-tabs-content {
  opacity: 0; // 隐藏tabs组件的content内容部分
}
</style>
