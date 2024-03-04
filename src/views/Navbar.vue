<template>
  <div class="navbar">
    <div class="nav-left">
      <h2>Portfolio</h2>
    </div>
    <div class="nav-right">
      <ul class="nav-list">
        <li><h3>About</h3></li>
        <li><h3>Experience</h3></li>
        <li><h3>Projects</h3></li>
        <li><h3>Contact</h3></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  color: white;
}
.nav-list {
  display: flex;
  list-style: none;
}
.nav-left {
  padding: 0 20px;
  margin: 0 20px;
}
.nav-list li {
  padding: 0 20px;
  margin: 0 20px;
}
</style>
