<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <TeamCard />
      </div>
    </div>
  </div>
</template>

<script>
import TeamCard from "@/components/TeamCard.vue";
export default {
  name: "Team",
  components: { TeamCard },
};
</script>
