<template>
  <div class="row m-2">
    <div class="col-4 m-3">
      <div class="card me-0" style="width: 25rem">
        <img
          v-if="teamImage"
          :src="'@/assets/team/' + teamImage"
          class="img-fluid card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title fw-bold">{{ teamName }}</h5>
          <small class="text-muted fw-bold">{{ teamRole }}</small>
          <p class="card-text">
            {{ teamDescription }}
          </p>
        </div>
      </div>
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
<style scoped></style>
