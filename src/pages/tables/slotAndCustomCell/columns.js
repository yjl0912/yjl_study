// 表格配置项


//给某列配置customRender: addressRenderContent,此列每个单元格都会执行一次addressRenderContent方法
let addressRenderContent = (value, row, index) => {  // value为当前单元格的值, row为当前单元格所在行数据, index为当前行下标
  return {
    children: '自定义的单元格内容----' + value , // children参数自定义单元格渲染内容, 相当于插槽自定义内容，此处也可以使用jsx语法自定义单元格内容
    attrs: {  // attrs参数设置此单元格的行rowSpan、列合并colSpan属性
      rowSpan: row.rowSpan,
    },
  }
}

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
    customRender: addressRenderContent,
  },
]