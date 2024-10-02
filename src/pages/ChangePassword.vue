<template>
    <div class="change-password-page">
      <div class="container">
        <h1>Ubah Kata Sandi</h1>
        <form @submit.prevent="changePassword">
          <div class="form-group">
            <label for="old-password">Masukkan Password Lama</label>
            <input type="password" id="old-password" v-model="oldPassword" required />
          </div>
          <div class="form-group">
            <label for="new-password">Masukkan Password Baru</label>
            <input type="password" id="new-password" v-model="newPassword" required />
          </div>
          <div class="form-group">
            <label for="confirm-password">Konfirmasi Password Baru</label>
            <input type="password" id="confirm-password" v-model="confirmPassword" required />
            <p v-if="passwordMismatch" class="error-text">Password baru dan konfirmasi tidak cocok</p>
          </div>
          <div class="form-actions">
            <button type="submit" class="submit-button">Ubah Password</button>
          </div>
        </form>
        <div v-if="showAlert" class="alert-modal">
          <div class="alert-content">
            <p>Password berhasil diubah!</p>
            <button class="alert-button" @click="showAlert = false">OK</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        showAlert: false,
        passwordMismatch: false,
      };
    },
    methods: {
      changePassword() {
        if (this.newPassword !== this.confirmPassword) {
          this.passwordMismatch = true;
          return;
        }
        this.passwordMismatch = false;
        // Here, you would normally handle the password change logic
        this.showAlert = true;
        // Reset form fields
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
      },
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
  
  * {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .change-password-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  
  .container {
    background: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }
  
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #333;
  }
  
  .form-group input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    color: #333;
    transition: border-color 0.3s;
  }
  
  .form-group input:focus {
    border-color: #000;
    outline: none;
  }
  
  .error-text {
    color: red;
    font-size: 14px;
    margin-top: 8px;
  }
  
  .form-actions {
    display: flex;
    justify-content: center;
  }
  
  .submit-button {
    background-color: #000000;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .alert-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .alert-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .alert-button {
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
    margin-top: 10px;
  }
  
  .alert-button:hover {
    background-color: #0056b3;
  }
  </style>