<template>
  <div class="container text-dark fw-bold">
    <h1 class="fw-bold mb-3">Meet the Team</h1>

    <div class="row row-cols-md-5 g-2">
      <div
        class="col-md justify-content-center"
        v-for="team in teamData"
        :key="team.id"
      >
        <div class="">
          <TeamCard
            :teamName="team.name"
            :teamRole="team.role"
            :teamImage="team.image"
            :teamDescription="team.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import teamJson from "@/data/team.json";
import TeamCard from "@/components/TeamCard.vue";
export default {
  name: "Team",
  components: { TeamCard },
  data: () => {
    return {
      teamData: teamJson,
    };
  },
};
</script>
