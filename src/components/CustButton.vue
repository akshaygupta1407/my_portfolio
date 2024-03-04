<template>
  <button>{{ buttonText }}</button>
</template>

<script setup>
defineProps({
  buttonText: String,
});
</script>

<style scoped>
button {
  background-color: #576cbc; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 50px;
}
</style>
