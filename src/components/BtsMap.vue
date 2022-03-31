<template>
  <yandex-map
    v-if="isDataParsed"
    :coords="[0, 0]"
    :settings="settings"
    :controls="controls"
    :show-all-markers="true"
    :zoom="9"
    ymap-class="ymap-class"
  >
    <ymap-marker
      v-for="(marker, index) in markers"
      :key="index"
      :coords="marker"
      :marker-id="index"
      :balloon-template="getBalloonTemplate(marker)"
    />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { initialDataset } from "@/datasets";

export default {
  name: "BtsMap",
  components: { yandexMap, ymapMarker },
  data() {
    return {
      isDataParsed: false,
      controls: ["zoomControl"],
      markers: [],
      settings: {
        controls: [],
        lang: "en_US",
      },
    };
  },
  mounted() {
    const uniqueBtsCoordinates = {};

    initialDataset.forEach((record) => {
      if (!uniqueBtsCoordinates[record.BTS]) {
        uniqueBtsCoordinates[record.BTS] = [record.Latitude, record.Longitude];
      }
    });

    this.markers = Object.values(uniqueBtsCoordinates);
    this.isDataParsed = true;
  },
  methods: {
    getBalloonTemplate(coordinates) {
      return `
        <p>Point coordinates:</p>
        <p>Latitude: ${coordinates[0]}</p>
        <p>Longitude: ${coordinates[1]}</p>
      `;
    },
  },
};
</script>

<!--suppress CssUnusedSymbol -->
<style>
.ymap-class {
  height: 600px;
}
</style>
