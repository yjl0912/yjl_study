<template>
  <!-- 自定义规则的表单校验 -->
  <div class="container">
    <a-form-model 
      ref="messageForm" 
      :model="messageForm"
      :rules="messageFormRules"
    >
      <a-form-model-item
        label="姓名"
        prop="name"
      >
        <a-input v-model="messageForm.name"></a-input>
      </a-form-model-item>
      <a-form-model-item
        label="手机号"
        prop="phone"
      >
        <a-input v-model="messageForm.phone"></a-input>
      </a-form-model-item>
    </a-form-model>
    <a-button type="primary" @click="validateForm">点击表单校验</a-button>
    <!-- form表单的数据源显示在此处，方便查看 -->
    <div>{{messageForm}}</div>
  </div>
</template>

<script>
// 手机号的自定义校验规则
let phoneRule = (rule, value ,callback) => {
  let reg = /^1[3-9]\d{9}$/;  // 手机号的正则
  if (!value) {
    // 空值，验证不通过
    callback(new Error('手机号不能为空'));
  } else {
    if (reg.test(value)) {
      // 符合手机号的正则，验证通过
      // alert('手机号验证通过');
      callback();
    } else {
      // 不符合手机号的正则，验证不通过
      callback(new Error('请输入正确格式的手机号'));
    }
  }
};

export default {
  name: "",
  data() {
    return {
      messageForm: {
        name: '王大虎',
        phone: '15011112222'
      },
      messageFormRules: {
        name: [{required: true, trigger: 'blur', message: '请输入姓名'}],
        phone: [{required: true, trigger: 'blur', validator: phoneRule}],
        // phoneRule是手机号的自定义校验规则, 
        // 使用自定义正则校验时，此处不需要再配置message，否则会默认使用message，就不会使用phoneRule回调函数callback里面的提示信息了
      },
    };
  },
  methods: {
    // 表单校验
    validateForm() {
      this.$refs.messageForm.validate(valid=>{
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
.container {
  width: 50%;
  background-color: #bfa;
  /deep/ .ant-form-item {
    display: flex;
    .ant-form-item-label {
      width: 100px;
    }
  }
}
</style>
