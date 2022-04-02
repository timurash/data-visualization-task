<template>
  <div class="app-header">
    <span>DATA VISUALIZATION</span>
    <Button
      class="p-button-text"
      icon="pi pi-github"
      label="Github"
      @click="goToGithub"
    />
  </div>
  <div class="main-container">
    <nav class="app-sidebar">
      <router-link v-slot="{ isActive }" class="router-link" to="/">
        <Button
          class="p-button-secondary navigation-button"
          :class="isActive ? 'p-button-outlined' : 'p-button-text'"
        >
          Overview
        </Button>
      </router-link>
      <router-link v-slot="{ isActive }" class="router-link" to="/rsrp-chart">
        <Button
          class="p-button-secondary navigation-button"
          :class="isActive ? 'p-button-outlined' : 'p-button-text'"
        >
          RSRP line chart
        </Button>
      </router-link>
      <router-link v-slot="{ isActive }" class="router-link" to="/bts-chart">
        <Button
          class="p-button-secondary navigation-button"
          :class="isActive ? 'p-button-outlined' : 'p-button-text'"
          >BTS circle chart
        </Button>
      </router-link>
      <router-link
        v-slot="{ isActive }"
        class="router-link"
        to="/records-chart"
      >
        <Button
          class="p-button-secondary navigation-button"
          :class="isActive ? 'p-button-outlined' : 'p-button-text'"
          >Records by day chart
        </Button>
      </router-link>
      <router-link v-slot="{ isActive }" class="router-link" to="/bts-map">
        <Button
          class="p-button-secondary navigation-button"
          :class="isActive ? 'p-button-outlined' : 'p-button-text'"
          >BTS points on map
        </Button>
      </router-link>
    </nav>
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goToPage(page) {
      this.$router.push(page);
    },
    goToGithub() {
      window.open(
        "https://github.com/timurash/data-visualization-task",
        "_blank"
      );
    },
  },
};
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border: 1px solid var(--surface-border);
  font-size: 1.5rem;
  font-weight: 700;
}

.main-container {
  display: flex;
  justify-content: space-between;
  flex: 1;

  .app-sidebar {
    min-width: 260px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--surface-border);

    .navigation-button {
      padding: 1rem 2rem;
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

  .app-content {
    flex: 1 1 auto;
    padding: 2rem;
  }
}

.router-link {
  text-decoration: none;

  button {
    width: 100%;
  }

  :deep(.p-button.p-button-secondary:enabled:focus) {
    box-shadow: none;
  }
}
</style>
