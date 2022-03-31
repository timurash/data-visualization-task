<template>
  <div class="filter-container">
    <label>Filter data on BTS:</label>
    <Dropdown
      :model-value="modelValue"
      class="filter-dropdown"
      placeholder="Select option"
      :options="btsList"
      scroll-height="400px"
      option-value="name"
      option-label="name"
      @change="onValueChange"
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
      @click="onValueChange('')"
    />
  </div>
</template>

<script>
export default {
  name: "BtsDropdownFilter",
  props: {
    btsList: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: () => "",
    },
  },
  emits: ["update:modelValue"],
  computed: {
    isClearFilterButtonDisabled() {
      return !this.modelValue?.length;
    },
  },
  methods: {
    getOptionLabel(slotProps) {
      return (
        slotProps.option.name + " (" + slotProps.option.count + " records)"
      );
    },
    onValueChange(value) {
      this.$emit("update:modelValue", value.value);
    },
  },
};
</script>

<style scoped lang="scss">
.filter-container {
  font-size: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  label {
    margin-right: 0.5rem;
  }

  .filter-dropdown {
    flex: 1;
    text-align: start;
    width: 50%;
  }

  button {
    margin-left: 0.5rem;
  }
}
</style>
