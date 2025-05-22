<script>
import { login } from '../services/apiService';
import { jwtDecode } from 'jwt-decode';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
  async submitLogin() {
  try {
    const response = await login(this.username, this.password);
    const decoded = jwtDecode(response.token);
    const token = response.token;
    console.log("role::",decoded.role);
    
    const role = decoded.role;
    // Save to sessionStorage
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('role', role);
    // Navigate based on role
    if (role === 'ROLE_ADMIN') {
      this.$router.push('/dashboard');
    } else if (role === 'ROLE_USER') {
      this.$router.push('/dashboard');
    }

  } catch (error) {
    // console.error("Invalid login", error);
    // alert("Login failed: Invalid username or password");
  }
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


