<template>
  <NavBar />
  <div class="profile-page">
    <div class="sidebar">
      <button class="back-button" @click="goBack">←</button>
      <h1>Profile</h1>
      <img :src="profilePicture" class="profile-picture" />
      <p class="sidebar-name">{{ name }}</p>
      <p class="sidebar-username">{{ username }}</p>
    </div>

    <div class="profile-content">
      <div class="title">
        <h2>Profil Saya</h2>
        <p>Kelola informasi profil Anda untuk mengontrol, melindungi, dan mengamankan akun</p>
      </div>

      <form @submit.prevent="saveProfile">
        <div class="form-group">
          <label>Username</label>
          <input type="text" v-model="username" disabled />
        </div>
        <div class="form-group">
          <label>Nama</label>
          <input type="text" v-model="name" required />
        </div>
        <div class="form-group">
          <label>Nomor Telepon</label>
          <input type="tel" v-model="phone_number" pattern="[0-9]{10,15}" title="Nomor telepon harus berisi 10 hingga 15 digit" required />
        </div>
        <div class="form-group">
          <label>Jenis Kelamin</label>
          <div class="gender-group">
            <input type="radio" id="male" value="Laki-laki" v-model="gender" />
            <label for="male">Laki-laki</label>
            <input type="radio" id="female" value="Perempuan" v-model="gender" />
            <label for="female">Perempuan</label>
          </div>
        </div>
        <div class="form-group">
          <label>Tanggal Lahir</label>
          <input type="date" v-model="dob" required />
        </div>
        <div>
          <router-link to="/ChangePassword">Ubah Kata Sandi</router-link>
        </div>

        <div class="form-actions">
          <label class="upload-button">
            Unggah Foto
            <input type="file" @change="uploadImage" ref="imageInput" />
          </label>
          <button type="submit" class="save-button">Simpan</button>
          <button @click="logout" class="logout-button">Logout</button>
        </div>

        <div v-if="profilePicturePreview && !isProfilePictureSaved">
          <img :src="profilePicturePreview" class="profile-picture-preview" />
        </div>
      </form>
    </div>

    <div v-if="showAlert" class="alert-modal">
      <div class="alert-content">
        <p>Profil berhasil disimpan!</p>
        <button class="alert-button" @click="showAlert = false">OK</button>
      </div>
    </div>
  </div>
  <CikaFooter />
</template>

<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue";
import CikaFooter from '@/components/CikaFooter.vue';

export default {
  name: "CikaDonasi",
  components: {
    NavBar,
    CikaFooter,
  },
  data() {
    return {
      username: '',
      name: '',
      email: '',
      phone_number: '',
      gender: '',
      dob: '',
      profilePicture: '',
      profilePicturePreview: null,
      isProfilePictureSaved: false,
      showAlert: false,
      formErrors: {},
    };
  },
  methods: {
    async fetchUserData() {
      try {
        const token = localStorage.getItem('token');

        // Jika token tidak ada, arahkan pengguna ke halaman login
        if (!token) {
          console.log('Token not found, redirecting to login page.');
          this.$router.push('/cikalogin');
          return;
        }

        // Melakukan request untuk mendapatkan data user
        const response = await axios.get('http://127.0.0.1:8000/auth/user/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        const userData = response.data;

        // Set data user hanya jika ada respons yang valid
        this.username = userData?.username || 'Anonymous';
        this.name = `${userData?.first_name || ''} ${userData?.last_name || ''}`.trim();
        this.email = userData?.email || 'No email provided';
        this.phone_number = userData?.phone_number || 'No phone number';
        this.gender = userData?.gender || 'Not specified';
        this.dob = userData?.dob || 'Not provided';
        this.profilePicture = userData?.image || 'default-profile.png'; // Default jika gambar tidak ada

      } catch (error) {
        console.error('Error fetching user data:', error);

        // Jika token tidak valid atau expired, arahkan ke halaman login
        if (error.response && error.response.status === 401) {
          console.log('Unauthorized, redirecting to login page.');
          localStorage.removeItem('token'); // Hapus token yang tidak valid
          this.$router.push('/cikalogin'); // Redirect ke halaman login
        }
      }
    },

    async saveProfile() {
      this.formErrors = {};
      const isValid = this.validateForm();
      if (!isValid) return;

      try {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('phone_number', this.phone_number);
        formData.append('gender', this.gender);
        formData.append('dob', this.dob);

        const imageFile = this.$refs.imageInput?.files?.[0];
        if (imageFile) {
          formData.append('image', imageFile);
        } else {
          console.log("No image file selected");
        }

        await axios.put('http://127.0.0.1:8000/auth/profile/update/', formData, {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });

        this.showAlert = true;
        this.isProfilePictureSaved = true;
      } catch (error) {
        console.error('Error updating profile:', error);
      }
      console.log(this.$refs.imageInput?.files);
    },
    async logout() {
      const token = localStorage.getItem('token');
      try {
        await axios.post('http://127.0.0.1:8000/auth/logout/', {}, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        localStorage.removeItem('token');
        this.$router.push('/cikalogin');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    },

    validateForm() {
      let isValid = true;
      if (!this.name.trim()) {
        this.formErrors.name = 'Nama tidak boleh kosong';
        isValid = false;
      }
      if (!this.phone_number.trim() || !this.validatePhone(this.phone_number)) {
        this.formErrors.phone_number = 'Nomor telepon harus berisi 10 hingga 15 digit';
        isValid = false;
      }
      if (!this.dob) {
        this.formErrors.dob = 'Tanggal lahir tidak boleh kosong';
        isValid = false;
      }
      return isValid;
    },
    validatePhone(phone) {
      const re = /^[0-9]{10,15}$/;
      return re.test(phone);
    },
    uploadImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePicturePreview = URL.createObjectURL(file);
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    this.fetchUserData();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap");

* {
  font-family: 'Raleway', sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  padding-right: 15vw;
}

.profile-page {
  display: flex;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.sidebar {
  width: 25%;
  background-color: #ffffff;
  padding: 40px;
  border-right: 1px solid #e0e0e0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.back-button {
  color: #000000;
  background: none;
  padding-right: 45vw;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: color 0.3s;
}

.back-button:hover {
  color: #555555;
}

.sidebar h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.sidebar-name {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 10px 0;
}

.sidebar-username {
  font-size: 16px;
  color: #777;
}

.profile-picture {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #e0e0e0;
}

.profile-content {
  width: 75%;
  padding: 40px;
}

.title {
  margin-bottom: 30px;
}

.title h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
}

.title p {
  color: #777;
}

.form-group {
  margin-bottom: 30px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 600;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group input[type="date"],
.form-group input[type="password"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s;
}

.form-group input[type="text"]:focus,
.form-group input[type="email"]:focus,
.form-group input[type="tel"]:focus,
.form-group input[type="date"]:focus,
.form-group input[type="password"]:focus {
  border-color: #000000;
  outline: none;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.edit-link {
  font-size: 14px;
  color: #000000;
  text-decoration: none;
  margin-left: 10px;
  transition: color 0.3s;
}

.edit-link:hover {
  color: #555555;
  text-decoration: underline;
}

.gender-group {
  display: flex;
  gap: 20px;
}

.gender-group input[type="radio"] {
  margin-right: 5px;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}

.upload-button {
  background-color: #000000;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-button:hover {
  background-color: #333333;
}

.upload-button input[type="file"] {
  display: none;
}

.save-button {
  background-color: #000000;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.save-button:hover {
  background-color: #333333;
}

.profile-picture-preview {
  margin-top: 20px;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 2px solid #000000;
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
  background: #000000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.alert-button:hover {
  background-color: #333333;
}

.logout-button {
  background-color: #ff0000; /* Merah untuk tombol logout */
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #cc0000; /* Warna lebih gelap saat hover */
}
</style>
