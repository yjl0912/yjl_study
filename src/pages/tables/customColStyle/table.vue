<template>
  <div>
    <a-table
      :data-source="tableData"
      :columns="columns"
      :rowKey="record=>record.id"
    >
    </a-table>
  </div>
</template>

<script>
import { tableData } from './data.js';
import { columns } from './columns.js';

export default {
  data() {
    return {
      tableData,
      columns,
    };
  },
};
</script>

<style lang="less" scoped>
// 列的样式，因为使用样式的地方不在当前组件里，所以用样式穿透（深度选择器）的写法
/deep/ .custom-class1 {
  border: 1px solid red;
  color: red;
}
/deep/ .custom-class2 {
  border: 1px solid blue;
  color: blue;
}
</style>
