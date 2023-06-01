<template>
  <div>
    <a-table
      :data-source="tableData"
      :columns="columns"
      :rowKey="record=>record.id"
    >
    <!-- 插槽自定义表头内容 -->
      <template #customNameTitle>
        <span style="color:red">使用插槽自定义的name列表头</span>
      </template>
    <!-- 插槽自定义表头内容 -->
      <template #customAgeTitle>
        <span style="color:blue">使用插槽自定义的age列表头</span>
      </template>
    <!-- 插槽自定义表格某列单元格td内容 -->
      <template #customAgeContent="text, row"> 
        <!-- 插槽的第一个参数text为当前单元格的值,第二个参数row为这一行的数据 -->
        <span style="color:#bfa">{{text}}</span>
        <span style="color:orange">{{row}}</span>
      </template>
    </a-table>
  </div>
</template>

<script>
import { tableData } from './data.js';
import { columns } from './columns.js';

export default {
  data() {
    return {
      tableData: tableData,
      columns,
    }
  },
};
</script>

<style lang="less" scoped>

</style>
