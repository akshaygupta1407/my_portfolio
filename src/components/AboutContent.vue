<template>
  <div class="block" :style="gradientStyle">
    <div class="icons">
      <icon
        :name="icon_name"
        color="#5fbcff"
        size="40px"
        class="shiny-icon"
      ></icon>
    </div>
    <div class="right_container">
      <div>
        <h3>{{ title }}</h3>
      </div>
      <div class="content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
defineProps({
  icon_name: String,
  title: String,
  content: String,
});
const gradientStyle = computed(() => ({
  background:
    "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
  borderRadius: "20px",
}));
</script>

<style scoped>
.block {
  display: flex;
  margin-bottom: 10px;
}
.right_container {
  width: 400px;
}
.right_container .content {
  padding-bottom: 15px;
}
.icons {
  margin: 20px 15px;
  padding-top: 15px;
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
