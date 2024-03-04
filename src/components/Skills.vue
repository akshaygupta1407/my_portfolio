<template>
  <div class="row">
    <SkillIcon name="html5" color="#E34F26" size="50px" skillLabel="HTML" />
    <SkillIcon name="css3" color="#1572B6" size="50px" skillLabel="CSS" />
    <SkillIcon
      name="javascript"
      color="#F7DF1E"
      size="50px"
      skillLabel="Javascript"
    />
  </div>
  <div class="row">
    <SkillIcon name="python" color="#3776AB" size="50px" skillLabel="python" />
    <SkillIcon name="c++" color="#00599C" size="50px" skillLabel="C++" />
    <SkillIcon name="c" color="#A8B9CC" size="50px" skillLabel="C" />
  </div>
  <div class="row">
    <SkillIcon name="vue.js" color="#4FC08D" size="50px" skillLabel="Vue.js" />
    <SkillIcon name="php" color="#777BB4" size="50px" skillLabel="PHP" />
    <SkillIcon
      name="laravel"
      color="#FF2D20"
      size="50px"
      skillLabel="Laravel"
    />
  </div>
  <div class="row">
    <SkillIcon
      name="flutter"
      color="#02569B"
      size="50px"
      skillLabel="Flutter"
    />
    <SkillIcon
      name="firebase"
      color="#FFCA28"
      size="50px"
      skillLabel="Firebase"
    />
    <SkillIcon name="mysql" color="#4479A1" size="50px" skillLabel="MySQL" />
  </div>
</template>

<script setup>
import SkillIcon from "../components/SkillIcons.vue";
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
}
</style>
