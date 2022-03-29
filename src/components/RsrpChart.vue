<template>
  <Chart type="line" :data="chartData" :options="basicOptions" />
</template>

<script>
import { initialDataset } from "@/datasets";

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
      parsedData: [],
      basicOptions: {
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
            beginAtZero: false,
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
      if (this.selectedBts !== "") {
        return this.parsedData.filter((x) => x.BTS === this.selectedBts);
      } else {
        return this.parsedData;
      }
    },
  },
  mounted() {
    let parsedData = [];

    initialDataset.forEach((x) => {
      const [date, time] = x.Time.split(" ");
      const [day, month, year] = date.split(".");
      const [hour, minutes] = time.split(":");

      const value = new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hour),
        Number(minutes)
      );

      const object = {
        x: value,
        y: Number(x.RSRP),
        BTS: x.BTS,
      };

      parsedData.push(object);
    });

    const uniqueBts = [...new Set(initialDataset.map((x) => x.BTS))];
    const temp = [];

    uniqueBts.forEach((bts) => {
      const count = parsedData.filter((record) => record.BTS === bts).length;
      temp.push({
        name: bts,
        count,
      });
    });
    this.$emit("bts-list-update", temp);

    parsedData.sort((a, b) => new Date(b.x) - new Date(a.x));

    this.parsedData = parsedData;
  },
  methods: {
    onSelectedBtsChange() {
      this.chartData.datasets[0].data = this.parsedData.filter(
        (x) => x.BTS === this.selectedBts
      );
    },
  },
};
</script>

<style scoped lang="scss"></style>
