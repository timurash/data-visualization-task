<template>
  <Card>
    <template #title> BTS chart (TOP-3 by count) </template>
    <template #content>
      <BtsChart />
    </template>
  </Card>
</template>

<script>
import BtsChart from "@/components/BtsChart";
export default {
  name: "PieChartView",
  components: {
    BtsChart,
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .p-card-body {
    padding: 2rem;
  }

  .p-card-content {
    display: flex;
    justify-content: center;
  }

  .p-card-title {
    text-align: start;
  }
}
</style>
