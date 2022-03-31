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
      <Button
        class="p-button-text p-button-secondary navigation-button"
        @click="goToPage('/')"
        >Overview
      </Button>
      <Button
        class="p-button-text p-button-secondary navigation-button"
        @click="goToPage('/rsrp-chart')"
        >RSRP line chart
      </Button>
      <Button
        class="p-button-text p-button-secondary navigation-button"
        @click="goToPage('/bts-chart')"
        >BTS circle chart
      </Button>
      <Button
        class="p-button-text p-button-secondary navigation-button"
        @click="goToPage('/records-chart')"
        >Records by day chart
      </Button>
      <Button
        class="p-button-text p-button-secondary navigation-button"
        @click="goToPage('/bts-map')"
        >BTS points on map
      </Button>
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
      padding: 1.2rem 2.3rem;
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

  .app-content {
    flex: 1 0 auto;
  }
}
</style>
