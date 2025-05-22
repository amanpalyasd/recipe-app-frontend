<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <a class="navbar-brand fst-italic text-white" href="#">
       
        Food Recipe</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
          <router-link to="/login" class="btn btn-outline-primary me-2">Login</router-link>
          <router-link to="/register" class="btn btn-outline-primary">Register</router-link>
         
      <router-link v-if="role === 'USER'" to="/foods">Foods</router-link>
        </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>

</style>