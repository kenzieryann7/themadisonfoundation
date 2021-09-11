<template>
  <div class="container">
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
  name: "Main",
  components: { LogoCard },
};
</script>
