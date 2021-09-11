<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="my-5" v-for="team in teamData" :key="team.id">
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
