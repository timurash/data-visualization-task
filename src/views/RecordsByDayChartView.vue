<template>
  <Card>
    <template #title> Records by day chart </template>
    <template #content>
      <RecordsByDayChart />
    </template>
  </Card>
</template>

<script>
import RecordsByDayChart from "@/components/RecordsByDayChart/RecordsByDayChart";

export default {
  name: "RecordsByDayChartView",
  components: { RecordsByDayChart },
};
</script>

<style scoped></style>
