<script>
import { login } from '../services/apiService';


export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitLogin() {

      alert(`Logging in with email: ${this.username}`);
      // Implement your login logic here
      const response = login(this.username,this.password);
      console.log(response);
      
    },
  },
};
</script>

<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h2 class="mb-4 text-center">Login</h2>
    <form @submit.prevent="submitLogin">
      <div class="mb-3">
        <label for="username" class="form-label">username</label>
        <input
          type="text"
          id="text"
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
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
  </div>
</template>


