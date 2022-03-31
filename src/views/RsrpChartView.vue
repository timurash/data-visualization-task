<template>
  <Card>
    <template #title> RSRP chart </template>
    <template #content>
      <RsrpChart
        :selected-bts="selectedBts"
        @bts-list-update="onBtsListUpdate"
      />
      <BtsDropdownFilter v-model="selectedBts" :bts-list="btsList" />
    </template>
  </Card>
</template>

<script>
import RsrpChart from "@/components/RsrpChart/RsrpChart";
import BtsDropdownFilter from "@/components/RsrpChart/BtsDropdownFilter";

export default {
  name: "RsrpChartView",
  components: {
    BtsDropdownFilter,
    RsrpChart,
  },
  data() {
    return {
      selectedBts: "",
      btsList: [],
    };
  },

  methods: {
    onBtsListUpdate(btsList) {
      this.btsList = btsList;
    },
  },
};
</script>

<style scoped lang="scss">
:deep(.p-card-body) {
  padding: 2rem;
  height: 100vh;
  min-height: 400px;
  max-height: 700px;
}

:deep(.p-card-content) {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
