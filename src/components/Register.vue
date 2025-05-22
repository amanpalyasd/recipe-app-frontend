
<script>
import { register } from '../services/apiService';


export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submitRegister() {

      alert(`Logging in with username & password: ${this.username}`);
      // Implement your login logic here
      const response = register(this.username,this.password);
      console.log(response);

    }
  }
};
</script>

<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h2 class="mb-4 text-center">Register</h2>
    <form @submit.prevent="submitRegister">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          id="username"
          class="form-control"
          v-model="username"
          placeholder="Enter username"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          v-model="password"
          placeholder="Enter password"
          required
        />
      </div>
      
      <button type="submit" class="btn btn-primary w-100">Register</button>
    </form>
    <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
    <p v-if="successMessage" class="text-success mt-3">{{ successMessage }}</p>
  </div>
</template>


