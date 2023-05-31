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
    <!-- 插槽自定义表格某列单元格td内容 -->
      <template #customAgeContent="text, row"> 
        <!-- 插槽的第一个参数text为当前单元格的值,第二个参数row为这一行的数据 -->
        <span style="color:#bfa">{{text}}</span>
        <span style="color:orange">{{row}}</span>
      </template>
    <!-- 插槽自定义表格某列单元格td内容 -->
      <template #customAddressContent>
        <span>123</span>
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
      tableData: this.addRowSpan(),
      columns,
    }
  },
  methods: {
    // 处理表格数据,生成行合并的rowSpan,并添加到表格数据中。
    addRowSpan() {
      return tableData.map(item=>{
        let rowSpan = null;
        if (item.id === 1) {
          rowSpan = 2;
        } else if (item.id === 2) {
          rowSpan = 0;
        } else if (item.id === 3) {
          rowSpan = 1;
        }
        return {
          ...item,
          rowSpan,
        };
      });
    },
  },
};
</script>

<style lang="less" scoped>

</style>
