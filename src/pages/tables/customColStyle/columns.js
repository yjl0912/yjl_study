// 表格配置项
export const columns = [
  {
    key: 'name',
    title: '姓名',
    dataIndex: 'name',
    class: 'custom-class1',  // 自定义某一列样式，在该列配置项写class或者className即可
  },
  {
    key: 'age',
    title: '年龄',
    dataIndex: 'age',
  },
  {
    key: 'address',
    title: '地址',
    dataIndex: 'address',
    className: 'custom-class2', // 自定义某一列样式，在该列配置项写class或者className即可
  },
]