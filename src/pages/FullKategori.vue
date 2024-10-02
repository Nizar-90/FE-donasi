<template>
  <NavBar />
  <div class="container">
    <!-- Mulai Slider -->
    <div class="slider">
      <div
        class="slides"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div class="slide" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Slider Image" />
        </div>
      </div>
    </div>
    <!-- Selesai Slider -->

    <div class="info-section">
      <p class="info-item">
        Indonesia, dengan kekayaan alamnya yang melimpah, juga menghadapi
        tantangan besar berupa bencana alam yang kerap melanda. Dari gempa bumi
        yang mengguncang berbagai wilayah hingga banjir yang merendam pemukiman,
        setiap tahun negara ini harus berhadapan dengan ujian berat. Di daerah
        pegunungan, tanah longsor sering kali merusak infrastruktur dan memutus
        akses jalan, sementara di pesisir, gelombang tsunami pernah menyapu
        bersih permukiman dan meninggalkan luka mendalam bagi warganya.<br /><br />
        Bencana yang terjadi bukan hanya mengakibatkan kerugian material, tetapi
        juga kehilangan jiwa, dan trauma yang mendalam bagi para korban. Meski
        demikian, di tengah segala duka dan tantangan, selalu muncul harapan dan
        semangat kebersamaan. Rakyat Indonesia dikenal dengan semangat gotong
        royong yang tak kenal lelah dalam membantu sesama di saat-saat sulit.
        Bantuan datang dari berbagai penjuru, baik dari dalam negeri maupun luar
        negeri, menunjukkan betapa kuatnya solidaritas dan empati antar sesama
        manusia.<br /><br />
        Pemerintah dan berbagai organisasi terus berupaya untuk meningkatkan
        mitigasi bencana, memperkuat infrastruktur, serta membangun kesadaran
        masyarakat akan pentingnya kesiapsiagaan. Setiap bencana yang terjadi
        memberikan pelajaran berharga bagi Indonesia untuk terus beradaptasi dan
        memperbaiki diri dalam menghadapi tantangan di masa depan
      </p>
    </div>

    <div class="card-donate">
      <div class="left">
        <p class="slogan">Kontribusi andalah yang membuat kami terus maju</p>
      </div>
      <div class="image-container">
        <img :src="require('@/assets/anak_pantiasuhan2.jpg')" />
      </div>
    </div>


    <div class="full-kategori">
      <p class="title-kategori">KECELAKAAN & BENCANA</p>
      <div class="card-container">
        <CardComponent
          v-for="(card, index) in kecelakaanBencanaCards"
          :key="index"
          :imageSrc="card.gambar"
          :category="card.kategori"
          :title="card.judul_donasi"
          :amount="card.jumlah_total_donasi"
          :budget="5000000" 
        />
      </div>
      <router-link to="/KecelakaanBencana2" style="text-decoration: none; color: blue; margin-left:83vw; font-family: 'Raleway', sans-serif;"> Lihat semua</router-link>

      <p class="title-kategori">KESEHATAN & PENDIDIKAN</p>
      <div class="card-container">
        <CardComponent
          v-for="(card, index) in kesehatanPendidikanCards"
          :key="index"
          :imageSrc="card.gambar"
          :category="card.kategori"
          :title="card.judul_donasi"
          :amount="card.jumlah_total_donasi"
          :budget="50000" 
        />
      </div>
      <router-link to="/KesehatanPendidikan2" style="text-decoration: none; color: blue; margin-left:83vw; font-family: 'Raleway', sans-serif;"> Lihat semua</router-link>

      <p class="title-kategori">PANTI ASUHAN</p>
      <div class="card-container">
        <CardComponent
          v-for="(card, index) in pantiAsuhanCards"
          :key="index"
          :imageSrc="card.gambar"
          :category="card.kategori"
          :title="card.judul_donasi"
          :amount="card.jumlah_total_donasi"
          :budget="50000" 
        />
      </div>
      <router-link to="/PantiAsuhan2" style="text-decoration: none; color: blue; margin-left:83vw; font-family: 'Raleway', sans-serif;"> Lihat semua</router-link>
    </div>
    <CikaFooter />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CardComponent from "@/components/CardComponent.vue";
import CikaFooter from "@/components/CikaFooter.vue";
import axios from "axios";

export default {
  name: "FullKategori",
  components: {
    NavBar,
    CardComponent,
    CikaFooter,
  },
  data() {
    return {
      currentSlide: 0,
      images: [
        require("@/assets/anak_pantiasuhan2.jpg"),
        require("@/assets/sekolah_roboh.jpg"),
        require("@/assets/layanan_kesehatan.jpg"),
      ],
      autoSlideInterval: null,
      kecelakaanBencanaCards: [],
      kesehatanPendidikanCards: [],
      pantiAsuhanCards: [],
    };
  },
  methods: {
    fetchDonations() {
      // Fetch data for each category
      axios
        .get("http://127.0.0.1:8000/auth/donations/?kategori=kecelakaan_bencana")
        .then((response) => {
          this.kecelakaanBencanaCards = response.data; // Store data for kecelakaan & bencana
        })
        .catch((error) => {
          console.error("Error fetching Kecelakaan & Bencana donations:", error);
        });

      axios
        .get("http://127.0.0.1:8000/auth/donations/?kategori=kesehatan_pendidikan")
        .then((response) => {
          this.kesehatanPendidikanCards = response.data; // Store data for kesehatan & pendidikan
        })
        .catch((error) => {
          console.error("Error fetching Kesehatan & Pendidikan donations:", error);
        });

      axios
        .get("http://127.0.0.1:8000/auth/donations/?kategori=panti_asuhan")
        .then((response) => {
          this.pantiAsuhanCards = response.data; // Store data for panti asuhan
        })
        .catch((error) => {
          console.error("Error fetching Panti Asuhan donations:", error);
        });
    },
    nextSlide() {
      if (this.currentSlide < this.images.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.images.length - 1;
      }
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 3000); // Ganti 3000 dengan waktu yang Anda inginkan (3000ms = 3 detik)
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    },
  },
  mounted() {
    this.fetchDonations(); // Fetch donations when the component is mounted
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap");
.card-donate {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-container {
  margin-left: 20vw;
  width: 60vw;
  height: 35vw;
  border-radius: 30% 0% 0 30%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-size: cover;
  margin-top: 5vw;
}
.image-container img {
  width: 45vw;
  margin-left: 4vw;
  margin-top: 4.7vw;
  border-radius: 30% 0% 0 30%;
}
.slogan {
  font-family: "Arial TM Bold", sans-serif;
  font-size: 30px;
  color: rgb(0, 0, 0);
  font-weight: 700;
  margin-left: 10vw;
}
.info-section {
  display: flex;
  flex-direction: column;
  margin-left: 10vw;
  gap: 1rem;
}
.title-kategori {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: rgb(94, 92, 92);
  margin-left: 10vw;
}
.info-item {
  width: 100%;
  max-width: 700px;
  text-align: left;
  margin-top: 1rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 5.7vw;
}

.slider {
  width: 100%;
  overflow: hidden;
  margin-top: 10vw;
  margin-left: 10vw;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

img {
  width: 78vw;
  height: auto;
}
.full-kategori {
  margin-bottom: 5vw;
}
@media (max-width: 768px) {
  .container {
    margin-top: 10vw;
    padding: 0 2vw;
  }

  p {
    font-size: 6vw;
  }

  .card-container {
    flex-direction: column;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    margin-top: 7vw;
    padding: 0 5vw;
  }

  p {
    font-size: 5vw;
  }

  .card-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
