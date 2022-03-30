<template>
  <Card>
    <template #title> BTS points on map </template>
    <template #content>
      <PointsOnMap />
    </template>
  </Card>
</template>

<script>
import PointsOnMap from "@/components/BtsMap";

export default {
  name: "BtsMapView",
  components: { PointsOnMap },
};
</script>

<style scoped lang="scss">
:deep(.p-card-body) {
  padding: 2rem;
}
</style>
