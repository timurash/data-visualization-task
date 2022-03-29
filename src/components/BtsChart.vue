<template>
  <Chart
    :height="400"
    type="pie"
    :data="chartData"
    :options="basicOptions"
    style="width: 50%"
  />
</template>

<script>
import { initialDataset } from "@/datasets";

export default {
  name: "BtsChart",
  data() {
    return {
      values: [],
      labels: [],
      parsedData: [],
      basicOptions: {
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 50,
              color: "#495057",
            },
          },
        },
        layout: {
          padding: {
            top: 0,
          },
        },
        legend: {
          labels: {
            padding: {
              top: 500,
            },
          },
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
            data: this.values,
          },
        ],
      };
    },
  },
  mounted() {
    const counts = {};

    initialDataset.forEach((record) => {
      counts[record.BTS] = counts[record.BTS] ? counts[record.BTS] + 1 : 1;
    });

    const countsArray = [];

    Object.keys(counts).forEach((key) => {
      countsArray.push({
        name: key,
        count: counts[key],
      });
    });

    countsArray.sort((a, b) => b.count - a.count);

    const slicedCountsArray = countsArray.slice(0, 3);

    slicedCountsArray.forEach((x) => {
      this.values.push(x.count);
      this.labels.push(x.name);
    });
  },
};
</script>

<style scoped></style>
