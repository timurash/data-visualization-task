<template>
  <Card>
    <template #title> Map view </template>
    <template #content>
      <PointsOnMap />
    </template>
  </Card>
</template>

<script>
import PointsOnMap from "@/components/PointsOnMap";

export default {
  name: "MapView",
  components: { PointsOnMap },
};
</script>
