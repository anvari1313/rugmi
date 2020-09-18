<template>
  <div class="image-container">
    <img v-for="image in allImages" :key="image.id" :src="image.link" alt="image.name"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "ImageList",
  computed: mapGetters(['allImages']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  }
}
</script>

<style scoped>
.image-container{
  column-count: 3;
  column-width: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>