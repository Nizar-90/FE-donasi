<template>
    <div class="forgot-password-container">
      <div class="forgot-password-card">
        <h1 class="title">Forgot Password</h1>
        <p class="subtitle">Enter your email to reset your password</p>
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <label for="email" class="sr-only">Email Address</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="Enter your email address"
              class="input-field"
            />
          </div>
          <button type="submit" class="submit-btn">Send Reset Link</button>
        </form>
        <p class="back-to-login">
          Remember your password? <router-link to="/CikaLogin" class="login-link">Login</router-link>
        </p>
  
        <!-- Alert with Gmail link -->
        <div v-if="showAlert" class="alert">
          <p>Reset link has been sent to {{ email }}!</p>
          <a :href="gmailLink" target="_blank" class="gmail-link">Open Gmail</a>
          <button @click="closeAlert" class="close-alert">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        showAlert: false, // Track the visibility of the alert
      };
    },
    computed: {
      gmailLink() {
        return `https://mail.google.com/mail/u/0/#search/${encodeURIComponent(this.email)}`;
      },
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log("Reset link sent to:", this.email);
        this.showAlert = true; // Show alert after submission
      },
      closeAlert() {
        this.showAlert = false; // Close alert when button is clicked
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    font-family: 'Arial TM Bold', Arial, sans-serif;
  }
  
  .forgot-password-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f5f5f5;
  }
  
  .forgot-password-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
    position: relative;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 14px;
    color: #666666;
    margin-bottom: 30px;
  }
  
  .input-group {
    margin-bottom: 20px;
    position: relative;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  
  .input-field {
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #cccccc;
    background-color: #ffffff;
    font-size: 16px;
    color: #333333;
    box-sizing: border-box;
    transition: border-color 0.3s, background-color 0.3s;
  }
  
  .input-field:focus {
    border-color: #666666;
    background-color: #f9f9f9;
    outline: none;
  }
  
  .submit-btn {
    width: 100%;
    padding: 15px;
    background-color: #eeeeee;
    color: #333333;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #dddddd;
  }
  
  .back-to-login {
    margin-top: 20px;
    font-size: 14px;
    color: #666666;
  }
  
  .login-link {
    color: #333333;
    font-weight: bold;
    text-decoration: none;
  }
  
  .login-link:hover {
    text-decoration: underline;
  }
  
  /* Alert Styling */
  .alert {
    background-color: #f9f9f9;
    color: #333333;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    text-align: center;
  }
  
  .gmail-link {
    color: #333333;
    text-decoration: underline;
    font-weight: bold;
    display: block;
    margin-top: 10px;
  }
  
  .gmail-link:hover {
    color: #666666;
  }
  
  .close-alert {
    background: none;
    border: none;
    color: #666666;
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .close-alert:hover {
    color: #333333;
  }
  </style>