<template>
  <Card>
    <template #header> BTS chart </template>
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

<style scoped></style>
