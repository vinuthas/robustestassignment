<template>
  <nav id="nav" class="navbar navbar-expand-sm navbar-dark mb-3">
    <div class="container">
      <router-link to="/" class="navbar-brand">PostLite</router-link> 
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background: #1a1d24;
}
.navbar-nav a{
  color: #fff;
  padding: 0 15px;
  display: block;
}
</style>
