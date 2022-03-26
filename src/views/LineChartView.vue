<template>
  <Card>
    <template #header> RSRP chart </template>
    <template #content>
      <RsrpChart />
    </template>
  </Card>
</template>

<script>
import RsrpChart from "@/components/RsrpChart";
export default {
  name: "LineChart",
  components: {
    RsrpChart,
  },
};
</script>

<style scoped></style>
