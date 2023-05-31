// 表格配置项
export const columns = [
  {
    key: 'name',
    slots: { title: 'customNameTitle' },// name列的表头插槽，可以使用插槽自定义name列的表头内容，此时不再需要指定title表头文本
    dataIndex: 'name',
  },
  {
    key: 'age',
    title: '年龄',
    dataIndex: 'age',
    scopedSlots: { customRender: 'customAgeContent' }, // age列的单元格插槽，可以使用插槽自定义age列的单元格内容
  },
  {
    key: 'address',
    title: '地址',
    dataIndex: 'address',
  },
]