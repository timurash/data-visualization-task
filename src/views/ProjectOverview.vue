<template>
  <Card>
    <template #title> Project overview</template>
    <template #content>
      <h3>Description</h3>
      <p>
        This is a personal project to improve developer skills. Here you can
        find 4 types of visualization, based on one dataset:
      </p>
      <ul>
        <li>Line chart</li>
        <li>Circle chart</li>
        <li>Bar chart</li>
        <li>Map with points</li>
      </ul>
      <h3>Technology stack</h3>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank"
            >Vue 3 + Vue CLI + Vue Router</a
          >
        </li>
        <li>
          <a href="https://www.primefaces.org/primevue/#/" target="_blank"
            >PrimeVue 3</a
          >
        </li>
        <li>
          <a href="https://www.chartjs.org/" target="_blank">Chart.js 3</a>
        </li>
        <li>
          <a href="https://vue-yandex-maps.github.io/guide/" target="_blank"
            >Vue Yandex Maps</a
          >
        </li>
      </ul>
    </template>
  </Card>
</template>

<script>
export default {
  name: "ProjectOverview",
};
</script>

<style scoped lang="scss">
a,
a:visited,
a:active {
  color: inherit;
  text-decoration: none;
}

ul li {
  padding: 0.25rem;
}

:deep(.p-card-body) {
  padding: 2rem;
}

:deep(.p-card-content) {
  padding: 2rem;
  text-align: left;
}
</style>
