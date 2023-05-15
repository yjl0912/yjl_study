<template>
  <!-- 表头过滤 自定义过滤菜单 -->
  <div>
    <a-table :data-source="tableData" :columns="columns">
      <!-- 插槽1、自定义过滤菜单的插槽 -->
      <!-- 用得着插槽作用域slot-scop的这几个属性就这么写 -->
      <!-- <template #filterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"> -->
      <!-- 用不着就直接写#filterDropdown -->
      <template #filterDropdown>
        <!-- 自定义的input和checkbox -->
        <a-input ></a-input>
        <a-checkbox-group
          v-model="checkedValue"
          :options="tableData.map(item=>item.name)"
          @change="checkChange"
        />
      </template>
      <!-- 插槽2、自定义过滤的图标按钮 -->
      <template #filterIcon>
        <a-icon type="apple" />
      </template>
      <!-- 插槽3、过滤列的单元格的内容 -->
      <template #customRender="text, record">
        <!-- text是当前单元格的值,record是这一行的值 -->
        <span>{{text}}</span>
        <span style="color:red;">{{record}}</span>  
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      checkedValue:[],
      tableData: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
        },
        {
          key: "2",
          name: "Joe Black",
          age: 42,
        },
        {
          key: "3",
          name: "Jim Green",
          age: 32,
        },
        {
          key: "4",
          name: "Jim Red",
          age: 32,
        },
      ],
      columns: [
        {
          'key': 'name',
          'title': 'name',
          'dataIndex': 'name',
          // 下面三个插槽:
          scopedSlots: {
            filterDropdown: 'filterDropdown', //自定义过滤的菜单
            filterIcon: 'filterIcon', //过滤的图标
            customRender: 'customRender', //表格的单元格内容
          }
        },
        {
          'key': 'age',
          'title': 'age',
          'dataIndex': 'age',
        },
      ]
    };
  },
  methods: {
    checkChange(val) {
      //val和this.checkedValue都是已选择的筛选值
      console.log(val, this.checkedValue,'选中的值');
      // 拿到了筛选的值，重新查询表格数据
      debugger;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
