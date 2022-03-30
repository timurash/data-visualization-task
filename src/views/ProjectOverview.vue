<template>
  <Card>
    <template #title> Project overview </template>
    <template #content>
      <p>
        In this project, based on some dataset, implemented data visualization
        in 4 types
      </p>
      <ul class="ul-list">
        <li class="enum">Line chart</li>
        <li class="enum">Circle chart</li>
        <li class="enum">Bar chart</li>
        <li class="enum">Map with points</li>
      </ul>
      <h3>Github repository</h3>
      <h3>Initial dataset file</h3>
      <h3>Technical stack</h3>
      <ul class="ul-list">
        <li class="enum">Vue 3 + Vue CLI + Vue Router 4</li>
        <li class="enum">PrimeVue 3</li>
        <li class="enum">Chart.js 3</li>
        <li class="enum">Vue Yandex Maps</li>
      </ul>
    </template>
  </Card>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped lang="scss">
:deep(.p-card-body) {
  padding: 2rem;
}

:deep(.p-card-content) {
  padding: 2rem;
}
</style>
