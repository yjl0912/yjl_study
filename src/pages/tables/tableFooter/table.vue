<template>
  <div>
    <a-table
      :data-source="tableData"
      :columns="columns"
      :rowKey="record=>record.id"
      :bordered="true"
    >
    <!-- 表格footer，一般用来写表格的底部合计行，可以直接使用插槽写法自定义表格footer -->
    <template #footer>
      <ul style="list-style:none;margin:0;padding:0;display:flex;">
        <!-- 使用无序列表遍历表格配置项columns，生成表格尾部那一行的所有列 -->
        <li 
          v-for="col in columns" 
          :key="col.dataIndex" 
          :style="{
            // width是重点。要与表格配置对象columns里每列的width保持一致，才能对齐
            // 为了方便，取总宽度的三分之一。实际要对应上表格配置对象columns里每列的width，不然表格尾部与上边表格的边框对不齐
            width: '33.33vw',
            border: '1px solid red',
          }"
        >
          <!-- 展示每列计算好的合计数据 -->
          {{totalRowData[col.dataIndex]}}
        </li>
      </ul>
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
      tableData,
      columns,
      // 计算好表格合并行数据
      totalRowData: this.getTotalRowData(),
    };
  },
  methods: {
    getTotalRowData() {
      let name = '总计';
      let age = 0;
      let address = '';
      tableData.forEach(item=>{
        age += item.age;
        address += item.address;
      });
      return {
        name,
        age,
        address,
      }
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .ant-table-footer {
  border: 0;
  padding: 0;
}
</style>
