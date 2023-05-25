<template>
  <!-- 动态增减表单项的表单校验 + pattern自定义正则校验 --> 
  <!-- 动态行增减校验的关键点是prop的写法   :prop="'list.'+ index + '.name'"    :prop="'list.' + index + '.age'"  -->
  <!-- 动态行自定义正则校验的关键点是rules里面要配置pattern, 此外rules也要写成数组形式 -->
  <!-- rules=[
    {required: true, message: '请输入姓名', trigger: 'blur'}, 
    {pattern: /^[\u4e00-\u9fa5]+$/, message: '请输入汉字', trigger: 'blur'}  // 此行为pattern自定义正则校验
  ] -->
  <div>
    <a-form-model 
      ref="theForm" 
      :model="theForm"
    >
      <div class="row" v-for="(item, index) in theForm.list" :key="item.id">
        <a-form-model-item 
          :prop="'list.'+ index + '.name'" 
          label="姓名" 
          :rules="[
            {required: true, message: '请输入姓名', trigger: 'blur'}, 
            {pattern: /^[\u4e00-\u9fa5]+$/, message: '请输入汉字', trigger: 'blur'},
          ]"
        > 
          <a-input v-model="item.name"></a-input>
        </a-form-model-item>
        <a-form-model-item 
          :prop="'list.' + index + '.age'" 
          label="年龄"
          :rules="[
            {required: true, message: '请输入年龄', trigger: 'blur'},
            {pattern: /^[0-9]*$/, message: '请输入数字', trigger: 'blur'},
          ]"
        >
          <a-input v-model="item.age"></a-input>
        </a-form-model-item>
      </div>
    </a-form-model>
    <a-button type="primary" @click="addNewFormRow">点击新增一行表单</a-button>
    <a-button type="primary" @click="validateNewForm">点击表单校验</a-button>
    <!-- form表单的数据源显示在此处，方便查看 -->
    <div>{{theForm.list}}</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      theForm: {
        list: [
          {id: 1, name: '王大虎', age: 16},
          {id: 2, name: '王二虎', age: 15},
        ]
      }
    };
  },
  methods: {
    // 新增一行表单
    addNewFormRow() {
      let newItem = {
        id: Date.now(), //保证id唯一就行
        name: '',
        age: null,
      }
      this.theForm.list.push(newItem);
    },
    // 表单校验
    validateNewForm() {
      this.$refs.theForm.validate(valid=>{
        if (valid) {
          alert('校验成功');
        } else {
          alert('校验失败');
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.row {
  width: 50%;
  display: flex;
  background-color: #bfa;
  /deep/ .ant-form-item {
    display: flex;
  }
}
</style>
