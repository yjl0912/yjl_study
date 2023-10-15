<template>
<!-- 自定义tab（标题版+内容部分）,点击事件和动态样式:class和v-if三者配合实现 -->
  <div>
    <div class="title-container">
      <div :class="{'title':true, 'active': clickedTab==='tab1'}" @click="clickTab('tab1')">tab1</div>
      <div :class="{'title':true, 'active': clickedTab==='tab2'}" @click="clickTab('tab2')">tab2</div>
      <div :class="{'title':true, 'active': clickedTab==='tab3'}" @click="clickTab('tab3')">tab3</div>
      <!-- {{clickedTab}} -->
    </div>
    <div class="content-container">
      <div v-if="clickedTab==='tab1'">tab1的内容部分</div>
      <div v-if="clickedTab==='tab2'">tab2的内容部分</div>
      <div v-if="clickedTab==='tab3'">tab3的内容部分</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickedTab: 'tab1', //默认tab1
    }
  },
  methods: {
    clickTab(tab) {
      this.clickedTab = tab;
    },
  }
}
</script>

<style lang="less" scoped>
.title-container {
  width: 500px;
  height: 50px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  .title {
    width: 100px;
    height: 50px;
    background-color: #bfa;
    color: aqua;
  }
  .active {
    color: red;
  }
}
.content-container {
  width: 500px;
  height: 350px;
  background-color: pink;
}
</style>
