<template>
  <div class="container">
    <div class="right">
      <div v-if="!showRegister">
        <h1>Register</h1>
        <form @submit.prevent="register" enctype="multipart/form-data">
          <div class="form-group">
            <label for="name"></label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Nama..."
              required
            />
          </div>
          <div class="form-group">
            <label for="username"></label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="username..."
              required
            />
          </div>
          <div class="form-group">
            <label for="no_telepon"></label>
            <input
              type="text"
              id="no_telepon"
              v-model="no_telepon"
              placeholder="no telepon..."
              required
            />
          </div>
          <div class="form-group">
            <label for="email"></label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="email..."
              required
            />
          </div>
          <div class="form-group">
            <label for="password"></label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="password..."
              @input="validatePassword" 
              required
            />
            <!-- Tampilkan pesan error jika password tidak valid -->
            <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
          </div>
          <div class="form-group">
            <label for="image">Upload Profile Picture</label>
            <input
              type="file"
              id="image"
              @change="handleImageUpload"
            />
          </div>
          <!-- Tombol akan tetap aktif meskipun password tidak valid -->
          <button type="submit">Sign Up</button>
        </form>
        <!-- Menampilkan pesan sukses register -->
        <p v-if="registerSuccess" class="success-message">Registration successful!</p>
      </div>
      <div v-if="showRegister">
        <h1>Login</h1>
        <form @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="loginEmail"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="loginPassword"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Masuk</button>
        </form>
        <p>
          Belum punya akun?
          <a href="#" @click="showRegister = false">Daftar dulu</a>
        </p>
      </div>
    </div>
    <div class="left">
      <img
        :src="require('@/assets/login.png')"
        alt="Image 1"
        class="image"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserRegister',
  data() {
    return {
      name: '',
      username: '',
      email: '',
      no_telepon: '',
      password: '',
      image: null, // Tambahkan untuk mengunggah gambar
      showRegister: false,
      registerSuccess: false, // Variabel untuk menandai sukses register
      passwordError: '', // Variabel untuk menampung pesan error password
      loginEmail: '',
      loginPassword: ''
    };
  },
  methods: {
    // Menyimpan file gambar yang diunggah ke state
    handleImageUpload(event) {
      this.image = event.target.files[0];
    },
    // Fungsi validasi password
    validatePassword() {
      const password = this.password;
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Kriteria: min 8 karakter, ada huruf kecil, besar, dan angka
      if (!regex.test(password)) {
        this.passwordError =
          'Password harus minimal 8 karakter, dan mengandung huruf kecil, besar, dan angka.';
      } else {
        this.passwordError = ''; // Reset error jika password valid
      }
    },
    register() {
      // Set registerSuccess menjadi false di awal
      this.registerSuccess = false;

      let formData = new FormData();
      formData.append('first_name', this.name);
      formData.append('username', this.username);
      formData.append('email', this.email);
      formData.append('phone_number', this.no_telepon);
      formData.append('password', this.password);
      if (this.image) {
        formData.append('image', this.image); // tambahkan file gambar
      }

      axios.post('http://127.0.0.1:8000/auth/register/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        if (response && response.data) {
          this.registerSuccess = true; // Set registerSuccess jadi true
          console.log(response.data.token);
        } else {
          alert('Unexpected response format');
        }
      })
      .catch(error => {
        if (error.response && error.response.data) {
          alert('Registration failed');
          console.log(error.response.data);
        } else {
          alert('Unexpected error');
          console.log(error);
        }
      });
    },
    submitLogin() {
      // Implement login logic here
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap');
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #eeee;
}

.left {
  background-color: #ffffff;
  border-radius: 20% 0% 0% 20%;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image {
  width: 50%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.right {
  width: 40%;
  padding: 55px;
}

h1, h2 {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Arial Rounded MT Bold', sans-serif;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
  padding: 3px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

input {
  width: 90%;
  padding: 10px;
  border: 1px solid #B9B9B9;
  background-color: #B9B9B9; 
  border-radius: 5px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

button {
  width: 20%;
  padding: 10px;
  margin-left: 15.5vw;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

p {
  text-align: center;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

a {
  color: #4f95ff;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

/* Style pesan error */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

/* Style pesan sukses */
.success-message {
  color: green;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
}
</style>
