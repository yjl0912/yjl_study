// 表格配置项

export const columns = [
  {
    key: 'name',
    dataIndex: 'name',
    // (slots里title定义表头插槽),name列的表头插槽，可以使用插槽自定义name列的表头内容，此时不再需要指定title表头文本
    slots: { title: 'customNameTitle' },
  },
  {
    key: 'age',
    dataIndex: 'age',
    // (scopedSlots里title定义表头插槽),age列的表头插槽，可以使用插槽自定义age列的表头内容，此时不再需要指定title表头文本
    // (scopedSlots里customRender定义单元格内容插槽),age列的单元格内容插槽，可以使用插槽自定义age列的单元格内容
    scopedSlots: { title: 'customAgeTitle', customRender: 'customAgeContent' },
  },
  {
    key: 'address',
    title: '地址',
    dataIndex: 'address',
  },
]