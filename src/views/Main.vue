<template>
  <div class="container text-dark fw-bold">
    <div class="row">
      <div class="col">
        <LogoCard />
      </div>
    </div>
    <div class="row">
      <div class="col p-0">
        <img
          src="@/assets/pets/pet1.png"
          class="img-thumbnail img-fluid img me-2 mb-2 shadow"
          alt="..."
        /><img
          src="@/assets/pets/pet2.png"
          class="img-thumbnail img-fluid img me-2 mb-2 shadow"
          alt="..."
        />
        <img
          src="@/assets/pets/pet3.png"
          class="img-thumbnail img-fluid img mb-2 shadow"
          alt="..."
        />
      </div>
    </div>
  </div>
</template>

<script>
import LogoCard from "@/components/LogoCard.vue";

export default {
  name: "Main",
  components: { LogoCard },
};
</script>

<style scoped>
.img {
  width: 430px;
}
</style>
