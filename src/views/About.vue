<template>
  <div class="container">
    <div class="title">
      <h2>ABOUT</h2>
    </div>
    <div class="about">
      <div class="left">
        <img src="../assets/About_img.png" alt="" />
      </div>
      <div class="right">
        <div class="about_content">
          <div>
            <AboutContent
              icon_name="arrow-pointer"
              title="Frontend Developer"
              content="I'm a front-end developer with experience in building responsive and
      optimized sites."
            />
          </div>
          <div>
            <AboutContent
              icon_name="server"
              title="Backend Developer"
              content="I'm a backend developer proficient in designing scalable and efficient server-side solutions."
            />
          </div>
          <div>
            <AboutContent
              icon_name="database"
              title="Database Developer"
              content="I have experience in database development, ensuring efficient data management and seamless integration."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutContent from "../components/AboutContent.vue";
</script>

<style scoped>
h2 {
  color: white;
}
@media only screen and (min-width: 768px) {
  .container {
    background-color: #091019;
    margin: 0px 200px;
    border-radius: 40px;
  }

  .title {
    margin: 0px 50px;
    padding-top: 30px;
  }
  .about {
    display: flex;
  }

  .right {
    color: white;
    margin-left: 100px;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
  }

  .left img {
    height: 400px;
    width: 400px;
    -webkit-animation: mover 2s infinite alternate;
    animation: mover 2s infinite alternate;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    background-color: #091019;
    margin: 0px -10px;
    margin-bottom: 5px;
  }
  .title {
    margin: 0px 15px;
    padding-top: 30px;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }

  .left img {
    height: 300px;
    width: 300px;
    -webkit-animation: mover 2s infinite alternate;
    animation: mover 2s infinite alternate;
  }
  .right {
    color: white;
    margin-top: 5px;
    margin: 0px 10px;
    margin-bottom: 5px;
  }
  .about {
    padding-bottom: 10px;
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
