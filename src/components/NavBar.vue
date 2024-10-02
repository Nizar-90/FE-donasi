<template>
  <div class="navbar">
    <nav>
      <div class="brand">
        <img :src="logoSrc" :alt="logoAlt" />
        <span class="app-name">{{ appName }}</span>
      </div>
      <ul :class="['nav-list', { open: isMenuOpen }]">
        <router-link to="/CikaHome" style=" text-decoration: none; color: inherit;"><li>Beranda</li></router-link>
        <router-link to="/CikaKategori" style="text-decoration: none; color: inherit;"><li>Kategori</li></router-link>
        <router-link to="/CikaInbox" style="text-decoration: none; color: inherit;"><li>Inbox</li></router-link>
        <router-link to="/CikaRiwayat" style="text-decoration: none; color: inherit;"><li>Riwayat</li></router-link>
        <router-link to="/GalangDana" style="text-decoration: none; color: inherit;"><li>Galang Dana</li></router-link>
        <router-link v-if="isLoggedIn" to="/CikaDonasi" style="text-decoration: none; color: inherit;"><li>Tambah Donasi</li></router-link>
        <li>
          <router-link to="/FullKategori">
            <button class="btnDonate">Donate</button>
          </router-link>
        </li>
        <!-- Tampilkan tombol profil jika user sudah login -->
        <li v-if="isLoggedIn">
          <router-link to="/CikaProfile2">
            <button class="btnProfile">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                  d="M20.8333 21.875C20.8333 20.4213 20.8333 19.6944 20.6539 19.103C20.2499 17.7713 19.2078 16.7292 17.8762 16.3252C17.2847 16.1458 16.5578 16.1458 15.1041 16.1458H9.8958C8.44208 16.1458 7.71522 16.1458 7.12377 16.3252C5.7921 16.7292 4.75 17.7713 4.34604 19.103C4.16663 19.6944 4.16663 20.4213 4.16663 21.875M17.1875 7.8125C17.1875 10.4013 15.0888 12.5 12.5 12.5C9.91112 12.5 7.81246 10.4013 7.81246 7.8125C7.81246 5.22367 9.91112 3.125 12.5 3.125C15.0888 3.125 17.1875 5.22367 17.1875 7.8125Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </router-link>
        </li>
        <!-- Tampilkan tombol logout jika user sudah login -->
        <li v-if="isLoggedIn">
          <button class="btnLogout" @click="logout">Logout</button>
        </li>

        <!-- Tampilkan tombol login jika user belum login -->
        <li v-else>
          <router-link to="/CikaLogin">
            <button class="btnProfile">
              Login
            </button>
          </router-link>
        </li>
      </ul>
      <div class="hamburger" @click="toggleMenu">
        &#9776;
      </div>
    </nav>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: "NavBar",
  data() {
    return {
      logoSrc: require("@/assets/logo_cika.png"),
      logoAlt: "logo_ch",
      appName: "CiKa",
      isLoggedIn: false,
      isMenuOpen: false, // To track if the menu is open
    };
  },
  mounted() {
    // Cek status login saat komponen dimuat
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token; // Set isLoggedIn true jika token ada
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
    },
    logout() {
      const token = localStorage.getItem('token');

      if (!token) {
        // Jika token tidak ada, redirect ke halaman login
        this.isLoggedIn = false;
        this.$router.push('/CikaLogin'); 
        return;
      }

      // Melakukan request logout ke API backend
      axios.post('http://127.0.0.1:8000/auth/logout/', {}, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(response => {
        // Jika logout berhasil, hapus token dan redirect ke halaman login
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        this.$router.push('/CikaLogin');
        console.log('Logout successful:', response.data);
      })
      .catch(error => {
        console.error('Logout failed:', error);
        // Tambahkan logika jika logout gagal, misalnya menampilkan pesan error
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap");

body {
  font-family: "Arial Rounded MT Bold", sans-serif;
}

.navbar {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  width: 100vw;
  height: 3.5vw;
  font-family: "Arial Rounded MT Bold", sans-serif;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.brand {
  display: flex;
  align-items: center;
}

.brand img {
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
}

.app-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-list {
  display: flex;
  list-style: none;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-right: 5vw;
}

.nav-list li {
  margin: 0 1rem;
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
}

.nav-list > li > router-link {
  text-decoration: none; 
  color: inherit;
}

.btnLogout {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.btnDonate {
  width: 70px;
  height: 25px;
  color: white;
  background: #000000;
  border-radius: 5px;
  border: none;
}

.btnProfile {
  background: transparent;
  border: none;
}

.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
}

/* Media Query for smaller screens */
@media (max-width: 768px) {
  .nav-list {
    display: none;
    flex-direction: column;
    background-color: #ffffff;
    position: absolute;
    top: 3.5rem;
    right: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .nav-list.open {
    display: flex;
  }

  .nav-list li {
    margin: 0.5rem 0;
    text-align: center;
  }

  .hamburger {
    display: block;
    margin-right: 10%;
  }

  .navbar {
    height: auto;
  }
}
</style>
