<template>
  <div class="container text-dark fw-bold">
    <div class="row">
      <div class="col">
        <LogoCard />
      </div>
    </div>
  </div>
</template>

<script>
import LogoCard from "@/components/LogoCard.vue";

export default {
  name: "Mission",
  components: { LogoCard },
};
</script>

<style scoped>
.img {
  width: 430px;
}
</style>
