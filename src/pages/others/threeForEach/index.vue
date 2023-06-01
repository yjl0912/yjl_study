<template>
  <!-- 开发过程中，经常会写三层forEach循环取出数据，可以使用递归代替三层forEach的写法 -->
  <div>{{list}}</div>
</template>

<script>
export default {
  data() {
    return {
      // testData是有三层子元素的数组
      testData: [
        {
          title: "一级元素",
          children: [
            {
              title: "二级元素",
              children: [
                {
                  title: "三级元素",
                  children: [],
                  value: "目标值1",
                },
              ],
            },
          ],
        },
        {
          title: "一级元素",
          children: [
            {
              title: "二级元素",
              children: [
                {
                  title: "三级元素",
                  children: [],
                  value: "目标值2",
                },
              ],
            },
          ],
        },
      ],
      list: [],
    };
  },
  mounted() {
    // 需求：取出testData所有的第三层子元素的value值,存放到数组list里面

    // 法一：三层forEach取出value目标值(缺点：三层循环写法不美观，且浪费性能)
    // this.threeForEach()

    // 法二：递归写法取代三层forEach写法
    let recursion = (arr) => {
      arr.forEach(item => {
        if (item.title === '三级元素') {
          this.list.push(item.value);
        };
        if (item.children && item.children.length) {
          recursion(item.children);
        };
      });
    };

    recursion(this.testData);

  },
  methods: {
    threeForEach() {
      this.testData.forEach(l1Item => {
        l1Item.children.forEach(l2Item => {
          l2Item.children.forEach(l3Item => {
            this.list.push(l3Item.value);
          });
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
