<template>
  <div class="exp_box" :style="gradientStyle">
    <div class="logo">
      <img src="../assets/recruit_crm_logo.png" alt="" />
    </div>
    <div class="content">
      <div class="title">
        <h3>Trainee Software Engineer, Recruit CRM</h3>
      </div>
      <div class="duration">Oct, 2023 - Present</div>
      <div class="description">
        <ul>
          <li>Engaged in Recruit CRM training.</li>
          <li>Migrated Data into Database.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="exp_box" :style="gradientStyle">
    <div class="logo">
      <img src="../assets/bel_logo.png" alt="" />
    </div>
    <div class="content">
      <div class="title">
        <h3>Software Engineer Intern, Bharat Electronics Ltd.</h3>
      </div>
      <div class="duration">May, 2023 - July, 2023</div>
      <div class="description">
        <ul>
          <li>Developed software as part of the Kavach program.</li>
          <li>
            Build software modules for extracting data between TCAS systems.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="exp_box" :style="gradientStyle">
    <div class="logo">
      <img src="../assets/bytelearn_logo.png" alt="" />
    </div>
    <div class="content">
      <div class="title">
        <h3>SWE Intern, Bytelearn.com</h3>
      </div>
      <div class="duration">Dec, 2022 - March, 2023</div>
      <div class="description">
        <ul>
          <li>Customized Python code with Jinja for math chatbot.</li>
          <li>Created chatbot Mathemeatics Algorithms from scratch.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="exp_box" :style="gradientStyle">
    <div class="logo">
      <img src="../assets/asilverse_logo.png" alt="" />
    </div>
    <div class="content">
      <div class="title">
        <h3>Flutter Developer Intern, Asilverse Ltd.</h3>
      </div>
      <div class="duration">May, 2021 - June, 2021</div>
      <div class="description">
        <ul>
          <li>Worked on creating a Flutter App from scratch.</li>
          <li>Accomplished CRUD operations in the CAMP app using Firebase.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const gradientStyle = computed(() => ({
  background:
    "linear-gradient(to right, rgb(25, 55, 109,0.5),rgb(25, 55, 109,0))",
  borderRadius: "20px",
}));
</script>

<style scoped>
body {
  background-color: rgb(25, 55, 109, 1);
}
.exp_box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.content {
  color: #ffffff;
}
.duration {
  margin-top: -20px;
  color: silver;
}
.description {
  margin-top: -10px;
}
img {
  height: 50px;
  width: 50px;
  margin-left: 20px;
}
.logo {
  width: 20%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  width: 87%;
  float: right;
}
</style>
