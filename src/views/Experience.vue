<template>
  <div class="container">
    <div class="title">
      <h2>EXPERIENCE</h2>
    </div>
    <div class="skill_exp_container">
      <div class="skills">
        <Skills />
      </div>
      <div class="exp">
        <ExperienceBox />
      </div>
    </div>
  </div>
</template>

<script setup>
import Skills from "../components/Skills.vue";
import ExperienceBox from "../components/ExperienceBox.vue";
</script>

<style scoped>
.container {
  margin: 0px 250px;
}
h2 {
  color: white;
}
.title {
  padding-top: 30px;
}
.skill_exp_container {
  display: flex;
  justify-content: space-between;
}
.skills {
  width: 35%;
}
.exp {
  width: 50%;
}
</style>
