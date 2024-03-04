<template>
  <div class="main">
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
</template>

<script setup>
import CustButton from "../components/CustButton.vue";
</script>

<style scoped>
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
.contactButton {
  padding: 40px 0px;
}

@media only screen and (min-width: 768px) {
  .main {
    flex-direction: row;
    justify-content: space-between;
  }

  .left {
    padding: 40px; /* Restoring padding for larger screens */
    text-align: left; /* Align text to left for larger screens */
  }

  .left h1 {
    font-size: 50px; /* Restoring font size for larger screens */
  }

  .left div {
    font-size: 20px; /* Restoring font size for larger screens */
    margin: 10px; /* Restoring margin for larger screens */
  }
}
</style>
