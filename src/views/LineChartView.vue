<template>
  <Card>
    <template #title>
      RSRP chart
      <div class="filter-container">
        <label>Filter data on BTS:</label>
        <Dropdown
          v-model="selectedBts"
          class="filter-dropdown"
          placeholder="Select option"
          :options="btsList"
          scroll-height="400px"
          option-value="name"
        >
          <template #value="slotProps">
            <span v-if="slotProps?.value">
              {{ slotProps?.value }}
            </span>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
          <template #option="slotProps">
            <span>{{ getOptionLabel(slotProps) }}</span>
          </template>
        </Dropdown>
        <Button
          class="p-button-text"
          icon="pi pi-times-circle"
          :disabled="isClearFilterButtonDisabled"
          @click="onFilterClear"
        />
      </div>
    </template>
    <template #content>
      <RsrpChart
        :selected-bts="selectedBts"
        @bts-list-update="onBtsListUpdate"
      />
    </template>
  </Card>
</template>

<script>
import RsrpChart from "@/components/RsrpChart";

export default {
  name: "LineChartView",
  components: {
    RsrpChart,
  },
  data() {
    return {
      selectedBts: "",
      btsList: [],
    };
  },
  computed: {
    isClearFilterButtonDisabled() {
      return !this.selectedBts.length;
    },
  },
  methods: {
    onBtsListUpdate(btsList) {
      this.btsList = btsList;
    },
    onFilterClear() {
      this.selectedBts = "";
    },
    getOptionLabel(slotProps) {
      return (
        slotProps.option.name + " (" + slotProps.option.count + " records)"
      );
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .p-card-body {
    padding: 2rem;
  }

  .p-card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.filter-container {
  font-size: 1rem;
  width: 35%;
  padding: 1rem;
  display: flex;
  align-items: center;

  label {
    margin-right: 0.5rem;
  }

  .filter-dropdown {
    flex: 1;
    text-align: start;
  }

  button {
    margin-left: 0.5rem;
  }
}
</style>
