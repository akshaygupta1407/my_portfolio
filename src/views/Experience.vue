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
h2 {
  color: white;
}
@media only screen and (min-width: 768px) {
  .container {
    margin: 0px 250px;
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
}
/* @media only screen and (max-width: 768px) {
  .container {
    margin: 0px -10px;
  }
} */
</style>
