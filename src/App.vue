<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- <Table />
    <TreeSelected />
    <Form /> -->
    <!-- <Form2 /> -->
    <!-- <Form3 /> -->
    <!-- <Father /> -->
    <!-- <ExtendsDemo /> -->
    <KeyUpdateComponent />
  </div>
</template>
<script>
import Table from './pages/tables/filter/table.vue';
import TreeSelected from './pages/a-select/treeSelect.vue';
import Form from './pages/a-form-model/form.vue';
import Form2 from './pages/a-form-model/form2.vue';
import Form3 from './pages/a-form-model/form3.vue';
import Father from './pages/others/father.vue';
import ExtendsDemo from './pages/others/extends/index.vue';
import KeyUpdateComponent from './pages/others/keyUpdateComponent/index.vue';

export default {
  name: '',
  components: {
    Table,
    TreeSelected,
    Form,
    Form2,
    Form3,
    Father,
    ExtendsDemo,
    KeyUpdateComponent,
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
