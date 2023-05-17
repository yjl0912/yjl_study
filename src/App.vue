<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view/> -->
    <!-- <Table />
    <TreeSelected /> -->
    <Form />
  </div>
</template>
<script>
import Table from './pages/tables/filter/table.vue';
import TreeSelected from './pages/a-select/treeSelect.vue';
import Form from './pages/a-form-model/form.vue';

export default {
  name: '',
  components: {
    Table,
    TreeSelected,
    Form,
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
