<template>
  <!-- 一个canvas渲染两个echarts图（可以做联动等等），
  原理和echarts的折柱混合一样，不同的图在series配置自己的配置对象即可 -->
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: ["Temperature"],
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Temperature",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        // 通过grid调整左侧主图（图一折线图）的位置
        grid: {
          width: '50%',
          height: '80%',
        },
        // series配置多图
        series: [
          // 1)折线图的配置
          {
            name: "Temperature",
            type: "line",
            yAxisIndex: 0,
            tooltip: {
              valueFormatter: function (value) {
                return value + " °C";
              },
            },
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
          // 2) 半环形（饼图）的配置
          {
            name: " Round",
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "70%"],
            // 通过bottom、right等调整右侧（图二饼图）的位置
            bottom: "30%",
            right: "-60%",
            startAngle: 180,
            label: {
              show: true,
              formatter(param) {
                return param.name + " (" + param.percent * 2 + "%)";
              },
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
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
  border: 1px solid #bfa;
}
</style>
