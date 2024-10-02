<template>
  <NavBar />
  <div class="category-container">
    <p class="title">PROGRAM</p>
    <h1>Panti Asuhan</h1>
    <p class="sub-title">
      Bencana Datang Tanpa Diduga, Uluran Tangan Anda Adalah Harapan Mereka
    </p>

    <div class="info-section">
      <div class="info-item">
        <img
          :src="require('@/assets/anak_pantiasuhan.jpg')"
          alt="Image 1"
          class="info-image"
          id="info-image"
        />
        <div class="info-text">
          <p>
            Kecelakaan dan bencana sering kali datang tiba-tiba, meninggalkan
            luka dan kehilangan. Namun, dengan kepedulian kita bersama, mereka
            tidak akan menghadapi semuanya sendirian. Mari kita wujudkan dunia
            yang lebih peduli dengan memberikan donasi untuk mereka yang
            membutuhkan. Setiap kontribusi Anda membawa sinar terang dalam
            kegelapan mereka.
          </p>
        </div>
      </div>
    </div>
    <h1>Donasi Sekarang</h1>
  </div>
  <div class="card-container">
    <CardComponent
      v-for="(card, index) in cards"
      :key="index"
      :imageSrc="card.gambar"
      :category="card.kategori"
      :title="card.judul_donasi"
      :amount="card.jumlah_total_donasi"
      :budget="10000000"
    />
  </div>
<CikaFooter />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CardComponent from "@/components/CardComponent.vue";
import CikaFooter from "@/components/CikaFooter.vue";
import axios from "axios";

export default {
  name: "PantiAsuhan",
  components: {
    NavBar,
    CardComponent,
    CikaFooter,
  },
  data() {
    return {
      cards: [], // Data from API will be stored here
    };
  },
  methods: {
    fetchDonations() {
      // Request to fetch donations for 'kecelakaan_bencana'
      axios
        .get("http://127.0.0.1:8000/auth/donations/?kategori=panti_asuhan")
        .then((response) => {
          this.cards = response.data; // Store data in cards
        })
        .catch((error) => {
          console.error("Error fetching donations:", error);
        });
    },
  },
  mounted() {
    this.fetchDonations(); // Fetch donations when the component is mounted

    const img = document.getElementById("info-image");
    img.addEventListener("mouseover", function () {
      this.src = require("@/assets/anak_pantiasuhan2.jpg");
    });
    img.addEventListener("mouseout", function () {
      this.src = require("@/assets/anak-sekolah.jpg");
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.category-container {
  margin-top: 9vw;
  text-align: center;
}

.title {
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  color: rgb(94, 92, 92);
  margin-bottom: 1vw;
}

h1 {
  color: black;
  font-family: "Raleway", sans-serif;
  margin: 1vw 0;
}

.sub-title {
  font-family: "Raleway", sans-serif;
  margin-top: -1vw;
  margin-bottom: 2vw;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.info-image {
  width: 80vw;
  height: auto;
}

.info-text {
  width: 100%;
  max-width: 700px;
  text-align: center;
  margin-top: 1rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1vw;
}
</style>
