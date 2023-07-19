<template>
  <!-- 通过配置markArea（标域）里的data实现：一个echarts图展示近两年的不同数据，两年有不同的高亮颜色-->
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
        title: {
          text: "近两年的用电量分布图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "22年7月",
            "22年8月",
            "22年9月",
            "22年10月",
            "22年11月",
            "22年12月",
            "23年1月",
            "23年2月",
            "23年3月",
            "23年4月",
            "23年5月",
            "23年6月",
          ],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} W",
          },
          axisPointer: {
            snap: true,
          },
        },
        series: [
          {
            name: "Electricity",
            type: "line",
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 420],
            // 重点：
            // markArea为图表标域，常用于标记图表中某个范围的数据
            markArea: {
              // 其中data是markArea的重点配置内容
              data: [
                // 2022下半年的标域配置
                [
                  {
                    name: "2022年下半年用电分布",
                    itemStyle: {
                      color: "pink",
                    },
                    xAxis: "22年7月",
                  },
                  {
                    xAxis: "22年12月",
                  },
                ],
                // 2023上半年的标域配置
                [
                  {
                    name: "2023年上半年用电分布",
                    itemStyle: {
                      color: "#bfa",
                    },
                    xAxis: "23年1月",
                  },
                  {
                    xAxis: "23年6月",
                  },
                ],
              ],
              // 其中data还有别的写法
              // data: [
              //   [
              //     {
              //       name: "平均值到最大值",
              //       type: "average",
              //     },
              //     {
              //       type: "max",
              //     },
              //   ],

              //   [
              //     {
              //       name: "两个坐标之间的标域",
              //       coord: [10, 20],
              //     },
              //     {
              //       coord: [20, 30],
              //     },
              //   ],
              //   [
              //     {
              //       name: "60分到80分",
              //       yAxis: 60,
              //     },
              //     {
              //       yAxis: 80,
              //     },
              //   ],
              //   [
              //     {
              //       name: "所有数据范围区间",
              //       coord: ["min", "min"],
              //     },
              //     {
              //       coord: ["max", "max"],
              //     },
              //   ],
              //   [
              //     {
              //       name: "两个屏幕坐标之间的标域",
              //       x: 100,
              //       y: 100,
              //     },
              //     {
              //       x: "90%",
              //       y: "10%",
              //     },
              //   ],
              // ],
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
