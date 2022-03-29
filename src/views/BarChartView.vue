<template>
  <Card>
    <template #title> Records by day chart </template>
    <template #content>
      <RecordsByDayChart />
    </template>
  </Card>
</template>

<script>
import RecordsByDayChart from "@/components/RecordsChart";

export default {
  name: "BarChartView",
  components: { RecordsByDayChart },
};
</script>

<style scoped></style>
