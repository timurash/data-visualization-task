<template>
  <div class="block-header">
    <span class="block-title">Data visualization task</span>
  </div>
  <div class="main-container">
    <nav class="app-sidebar">
      <router-link to="/rsrp-chart">
        <Button>RSRP line chart</Button>
      </router-link>
      <router-link to="/bts-chart">
        <Button>BTS circle chart</Button>
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
};
</script>

<style scoped lang="scss">
.block-header {
  display: flex;
  justify-content: flex-start;
  padding: 1rem 2rem;
  border: 1px solid var(--surface-border);

  .block-title {
    font-size: 21px;
    font-weight: 700;
  }
}

.main-container {
  display: flex;
  justify-content: space-between;

  .app-sidebar {
    width: 30%;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--surface-border);

    button {
      margin: 1rem;
    }
  }

  .app-content {
    flex: 1 0 auto;
  }
}
</style>
