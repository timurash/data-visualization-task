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
  name: "BtsChartView",
  components: {
    BtsChart,
  },
};
</script>

<style scoped lang="scss">
:deep(.p-card-body) {
  padding: 2rem;
}

:deep(.p-card-content) {
  display: flex;
  justify-content: center;
}
</style>
