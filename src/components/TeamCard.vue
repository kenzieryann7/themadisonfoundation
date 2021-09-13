<template>
  <div class="card m-2 shadow-lg border border-2 border-dark">
    <img
      v-if="teamImage"
      :src="require('@/assets/team/' + teamImage).default"
      class="img-fluid img-height"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title fw-bold mb-0">{{ teamName }}</h5>
      <small class="text-muted fw-bold">{{ teamRole }}</small>

      <p class="card-text text-start mt-3">
        {{ teamDescription }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    teamName: String,
    teamRole: String,
    teamImage: String,
    teamDescription: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-height {
  width: 100%;
}
</style>
