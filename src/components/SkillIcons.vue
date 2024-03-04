<template>
  <div class="skill">
    <div class="skill_circle">
      <!-- <icon :name="name" :color="color" :size="size" class="shiny-icon"></icon> -->
      <img
        :height="size"
        :width="size"
        :src="`https://cdn.simpleicons.org/${name}/${color}`"
        class="shiny-icon"
      />
    </div>
    <div class="skill_label">{{ skillLabel }}</div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  color: String,
  size: String,
  skillLabel: String,
});
</script>

<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.skill_label {
  text-align: center;
  color: #ffffff;
}
.skill_circle {
  height: 80px;
  width: 80px;
  background-color: #19376d;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.shiny-icon {
  animation: shine 2s infinite;
}

@keyframes shine {
  0% {
    filter: brightness(1); /* Start with normal brightness */
  }
  50% {
    filter: brightness(1.5); /* Peak brightness halfway through */
  }
  100% {
    filter: brightness(1); /* Return to normal brightness */
  }
}
</style>
