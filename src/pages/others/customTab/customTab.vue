<template>
<!-- 自定义tab（只要标题版）,点击事件配合动态样式:class实现 -->
  <div>
    <div class="title-container">
      <div :class="{'title':true, 'active': clickedTab==='tab1'}" @click="clickTab('tab1')">tab1</div>
      <div :class="{'title':true, 'active': clickedTab==='tab2'}" @click="clickTab('tab2')">tab2</div>
      <div :class="{'title':true, 'active': clickedTab==='tab3'}" @click="clickTab('tab3')">tab3</div>
      <!-- {{clickedTab}} -->
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
  height: 500px;
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
</style>
