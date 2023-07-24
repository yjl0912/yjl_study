<template>
  <!-- 使用两个线图实现一条线图的最后一段是虚线的功能-->
  <div id="main"></div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";

export default {
  name: "",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 1、基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("main"));
      // 2、设置option
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          // 线图1：实线
          {
            // 线图1的data
            data: [120, 200, 150, 80, 70, 110],
            type: "line",
            symbol: "triangle",
            symbolSize: 20,
            lineStyle: {
              color: "#5470C6",
              width: 4,
              type: "solid",
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: "#EE6666",
              color: "yellow",
            },
          },
          // 线图2：虚线
          {
            // 线图2的data，在线图1的data基础上增加一条数据（增加的最后一条数据即是虚线部分）
            // 线图2和线图1相同的部分会重叠，线图2比线图1多出的部分即是想要的末尾虚线效果
            data: [120, 200, 150, 80, 70, 110, 130],
            // 也可将线图2的data写成['', '', '', '', '', 110, 130]的格式
            type: "line",
            symbol: "triangle",
            symbolSize: 20,
            lineStyle: {
              color: "#5470C6",
              width: 4,
              type: "dashed",
            },
            itemStyle: {
              borderWidth: 3,
              borderColor: "#EE6666",
              color: "yellow",
            },
          },
        ],
      };
      // 3、绘制图表
      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
#main {
  width: 100%;
  height: 500px;
}
</style>
