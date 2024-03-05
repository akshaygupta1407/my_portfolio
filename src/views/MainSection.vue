<template>
  <div class="main" v-if="!laptop_display">
    <div class="left">
      <h1>Hi, I'm Akshay!</h1>
      <div>I'm a Software Developer and Competitive Programmer.</div>
      <div>Reach out if you'd like to learn more.</div>
      <div class="contactButton">
        <CustButton buttonText="Contact Me" />
      </div>
    </div>
    <div class="right">
      <img src="../assets/portfolio_main.png" alt="" />
    </div>
  </div>
  <div class="main" v-if="laptop_display">
    <div class="right" v-if="laptop_display">
      <img src="../assets/portfolio_main.png" alt="" />
    </div>
    <div class="left">
      <h1>Hi, I'm Akshay!</h1>
      <div>I'm a Software Developer and Competitive Programmer.</div>
      <div>Reach out if you'd like to learn more.</div>
      <div class="contactButton">
        <CustButton buttonText="Contact Me" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CustButton from "../components/CustButton.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

const windowWidth = ref(window.innerWidth);

const laptop_display = ref(windowWidth.value <= 768);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  laptop_display.value = windowWidth.value <= 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .main {
    display: flex;
    flex-direction: row;
    margin: 50px 250px;
    justify-content: space-between;
  }
  .left {
    padding: 40px 0px;
    color: #ffffff;
  }
  .left h1 {
    font-size: 50px;
  }
  .left div {
    font-size: 20px;
    margin: 10px;
  }
  .right img {
    height: 400px;
    width: 400px;
    -webkit-animation: mover 2s infinite alternate;
    animation: mover 2s infinite alternate;
  }
  .contactButton {
    padding: 40px 0px;
  }
}

@media only screen and (max-width: 768px) {
  .left {
    text-align: center;
    padding: 40px 0px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left h1 {
    font-size: 50px;
  }
  .contactButton {
    padding: 20px 0px;
  }
  .left div {
    font-size: 20px;
    margin: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
  .right img {
    height: 300px;
    width: 300px;
    -webkit-animation: mover 2s infinite alternate;
    animation: mover 2s infinite alternate;
  }
}

@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
</style>
