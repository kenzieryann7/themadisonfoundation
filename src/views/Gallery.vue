<template>
  <div class="container-fluid text-dark fw-bold">
    <h1 class="fw-bold mb-3">Gallery</h1>
    <div
      class="row justify-content-center mb-3"
      v-for="pet in petData"
      :key="pet.id"
    >
      <div class="col-md-6">
        <img
          :src="require('@/assets/pets/' + pet.image).default"
          class="img-fluid rounded"
          width="500"
          alt="..."
        />
      </div>
    </div>
  </div>
</template>

<script>
import petJson from "@/data/pet.json";
export default {
  name: "Gallery",
  components: {},
  data: () => {
    return {
      petData: petJson,
    };
  },
};
</script>

<style scoped>
.img {
  height: 340px;
}
</style>
