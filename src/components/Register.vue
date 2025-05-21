<script>
import axios from 'axios';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      user: {
        username: '',
        password: '',
        role: 'ROLE_USER',
      },
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:8080/auth/register', this.user);
        this.successMessage = "Registration successful! Please login.";
        this.errorMessage = '';
        this.user = {
          username: '',
          email: '',
          password: '',
          role: 'ROLE_USER',
        };
      } catch (error) {
        this.errorMessage = error.response?.data?.message || 'Registration failed.';
        this.successMessage = '';
      }
    },
  },
};
</script>

<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h2 class="mb-4 text-center">Register</h2>
    <form @submit.prevent="registerUser">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          id="username"
          class="form-control"
          v-model="user.username"
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
          v-model="user.password"
          placeholder="Enter password"
          required
        />
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role</label>
        <select
          id="role"
          class="form-select"
          v-model="user.role"
          required
        >
          <option value="ROLE_USER">User</option>
          <option value="ROLE_CHEF">Chef</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary w-100">Register</button>
    </form>
    <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
    <p v-if="successMessage" class="text-success mt-3">{{ successMessage }}</p>
  </div>
</template>


