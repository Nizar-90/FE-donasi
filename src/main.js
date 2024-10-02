import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import halaman
import CikaHome from './pages/CikaHome.vue';
import CikaLogin from './pages/CikaLogin.vue';
import CikaRegister from './pages/CikaRegister.vue';
import CikaKategori from './pages/CikaKategori.vue';
import CikaInbox from './pages/CikaInbox.vue';
import CikaProfile from './pages/CikaProfile.vue';
import CikaRiwayat from './pages/CikaRiwayat.vue';
import KecelakaanBencana from './pages/KecelakaanBencana.vue';
import KesehatanPendidikan from './pages/KesehatanPendidikan.vue';
import PantiAsuhan from './pages/PantiAsuhan.vue';
import FullKategori from './pages/FullKategori.vue';
import CikaDetails from './pages/CikaDetails.vue';
import GalangDana from './pages/GalangDana.vue';
import ChangePassword from './pages/ChangePassword.vue';
import ForgotPass from './pages/ForgotPass.vue'
import CikaProfile2 from './pages/CikaProfile2.vue';
import CikaDonasi from './pages/CikaDonasi.vue';
import CikaKategori2 from './pages/CikaKategori2.vue';
import KecelakaanBencana2 from './pages/KecelakaanBencana2.vue';
import KesehatanPendidikan2 from './pages/KesehatanPendidikan2.vue';
import PantiAsuhan2 from './pages/PantiAsuhan2.vue';
import GalangDana2 from './pages/GalangDana2.vue';

// Definisikan rute
const routes = [
  { path: '/CikaHome', component: CikaHome },
  { path: '/CikaLogin', component: CikaLogin },
  { path: '/CikaRegister', component: CikaRegister },
  { path: '/CikaKategori', component: CikaKategori },
  { path: '/CikaKategori2', component: CikaKategori2 },
  { path: '/CikaInbox', component: CikaInbox },
  { path: '/CikaProfile', component: CikaProfile },
  { path: '/CikaProfile2', component: CikaProfile2 },
  { path: '/CikaRiwayat', component: CikaRiwayat },
  { path: '/KecelakaanBencana', component: KecelakaanBencana },
  { path: '/KesehatanPendidikan', component: KesehatanPendidikan },
  { path: '/PantiAsuhan', component: PantiAsuhan },
  { path: '/FullKategori', component: FullKategori },
  { path: '/CikaDetails', component: CikaDetails },
  { path: '/GalangDana', component: GalangDana },
  { path: '/GalangDana2', component: GalangDana2 },
  { path: '/ChangePassword', component: ChangePassword},
  { path: '/ForgotPass', component: ForgotPass},
  { path: '/CikaDonasi', component: CikaDonasi},
  { path: '/KecelakaanBencana2', component: KecelakaanBencana2 },
  { path: '/KesehatanPendidikan2', component: KesehatanPendidikan2 },
  { path: '/PantiAsuhan2', component: PantiAsuhan2 },

];

// Buat router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Pengecekan token sebelum setiap rute
router.beforeEach((to, from, next) => {
  const publicPages = ['/CikaLogin', '/CikaRegister', '/ForgotPass', '/CikaHome', '/CikaKategori', '/CikaInbox', '/CikaRiwayat', '/KecelakaanBencana2', '/KesehatanPendidikan2', '/PantiAsuhan2', '/FullKategori' ];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    next('/CikaLogin'); 
  } else {
    next(); 
  }
});

// Buat aplikasi Vue
const app = createApp(App);

// Gunakan router
app.use(router);

// Mount aplikasi
app.mount('#app');
