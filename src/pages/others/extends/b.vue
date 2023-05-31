<script>
import A from './a.vue';

export default {
  extends: A,
  methods: {
    // 重写a组件的handleClick方法,修改变量值为3
    // handleClick() {
    //   this.testValue = 3;
    // }
  }
}
</script>

