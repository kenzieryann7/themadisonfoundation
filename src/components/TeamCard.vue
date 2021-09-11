<template>
  <div class="row m-2">
    <div class="col-4 m-3" v-for="team in teamData" :key="team.id">
      <div class="card me-0" style="width: 25rem">
        <img
          v-if="team.image"
          :src="'@/assets/' + team.image"
          class="img-fluid card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ team.name }}</h5>
          <small class="text-muted fw-bold">{{ team.role }}</small>
          <p class="card-text">
            {{ team.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teamJson from "@/data/team.json";

export default {
  name: "TeamCard",
  props: {},
  data: () => {
    return {
      teamData: teamJson,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
