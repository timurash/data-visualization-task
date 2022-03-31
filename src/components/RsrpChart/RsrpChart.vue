<template>
  <Chart
    type="line"
    :data="chartData"
    :options="chartOptions"
    class="chart-flex"
  />
</template>

<script>
import { initialDataset } from "@/datasets";
import { prepareDataForRsrpChart, getBtsInfoFromDataset } from "@/utils";

export default {
  name: "RsrpChart",
  props: {
    selectedBts: {
      type: String,
      required: false,
      default: () => "",
    },
  },
  emits: {
    "bts-list-update": null,
  },
  data() {
    return {
      preparedDataset: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "RSRP value",
            },
          },
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        datasets: [
          {
            backgroundColor: "#42A5F5",
            data: this.datasetData,
          },
        ],
      };
    },
    datasetData() {
      if (this.selectedBts === "") {
        return this.preparedDataset;
      } else {
        return this.preparedDataset.filter((x) => x.BTS === this.selectedBts);
      }
    },
  },
  mounted() {
    this.preparedDataset = prepareDataForRsrpChart(initialDataset);

    this.updateBtsList();
  },
  methods: {
    updateBtsList() {
      const btsList = getBtsInfoFromDataset(initialDataset);

      this.$emit("bts-list-update", btsList);
    },
  },
};
</script>

<style scoped lang="scss">
.chart-flex {
  flex: 1;
}
</style>
