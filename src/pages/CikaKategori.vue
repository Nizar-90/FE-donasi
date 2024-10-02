<template>
  <NavBar />
  <div class="container">
    <div class="card-container">
      <div
        class="card"
        v-for="(category, index) in categories"
        :key="index"
        @click="goToCategory(category.link)"
      >
        <img :src="category.image" :alt="category.title" class="card-image" />
        <h2>{{ category.title }}</h2>
      </div>
    </div>

    <div class="info-section">
      <div class="info-item">
        <div class="info-text">
          <p>
            {{ infoText1 }}
          </p>
        </div>
        <img
          :src="require('@/assets/home_pantiasuhan.png')"
          alt="Image 1"
          class="info-image"
        />
      </div>
      <div class="info-item reverse">
        <img
          :src="require('@/assets/home_pantiasuhan.png')"
          alt="Image 2"
          class="info-image"
        />
        <div class="info-text">
          <p>
            {{ infoText2 }}
          </p>
        </div>
      </div>
    </div>

    <div class="motivasi-text">
      <p class="text-1">
        {{ motivasiText }}
      </p>
      <button @click="goToCategory('/FullKategori')">Donasi Sekarang</button>
    </div>

    <div class="testimonials">
      <h2>Cerita dari Mereka yang Terlibat</h2>
      <div
        class="testimonial"
        v-for="(testimony, index) in testimonials"
        :key="index"
      >
        <blockquote>
          <p>{{ testimony.text }}</p>
          <footer>- {{ testimony.author }}</footer>
        </blockquote>
      </div>
    </div>

    <div class="cta-section">
      <h2>Bergabunglah dengan Kami dalam Misi Ini</h2>
    </div>
  </div>
  <CikaFooter />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CikaFooter from "@/components/CikaFooter.vue";

export default {
  name: "CikaKategori",
  components: {
    NavBar,
    CikaFooter,
  },
  data() {
    return {
      categories: [
        {
          title: "Kecelakaan & Bencana",
          image: require("@/assets/home_kebanjiran.jpg"),
          link: "/KecelakaanBencana2",
        },
        {
          title: "Kesehatan & Pendidikan",
          image: require("@/assets/home_kebanjiran.jpg"),
          link: "/KesehatanPendidikan2",
        },
        {
          title: "Panti Asuhan",
          image: require("@/assets/home_kebanjiran.jpg"),
          link: "/PantiAsuhan2",
        },
      ],
      infoText1: "Indonesia adalah negara yang terletak di Cincin Api Pasifik, yang membuatnya sangat rentan terhadap bencana alam seperti gempa bumi, letusan gunung berapi, dan tsunami. Selain itu, bencana alam ini sering kali berdampak besar pada masyarakat dan infrastruktur, memerlukan perhatian dan bantuan yang signifikan.",
      infoText2: "Kesehatan dan pendidikan juga menjadi fokus penting di Indonesia. Program-program kesehatan seperti vaksinasi dan upaya pencegahan penyakit berusaha untuk meningkatkan kualitas hidup warga. Pendidikan merupakan hak dasar yang penting untuk mempersiapkan generasi mendatang dalam menghadapi tantangan masa depan.",
      motivasiText: "Setiap langkah kecil kita dapat menciptakan perubahan besar. Dengan memahami dan bertindak terhadap tantangan yang dihadapi masyarakat, kita tidak hanya membantu mereka saat ini, tetapi juga membentuk masa depan yang lebih baik. Bergabunglah dalam upaya ini dan jadilah bagian dari solusi. Bersama, kita dapat membuat perbedaan yang nyata!",
      testimonials: [
        {
          text: "Program ini telah membantu kami dengan sangat baik, menyediakan dukungan yang kami butuhkan saat krisis.",
          author: "Sari, Warga Terkena Bencana",
        },
        {
          text: "Inisiatif kesehatan ini membuat perbedaan besar dalam hidup saya dan keluarga saya.",
          author: "Budi, Peserta Program Kesehatan",
        },
      ],
    };
  },
  methods: {
    goToCategory(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inria+Serif:wght@400;700&display=swap");

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vw;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2vw;
}

.card {
  width: 20vw;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: 15vw;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

h2 {
  font-family: "Raleway";
  font-size: 1.5rem;
  margin: 1rem 0;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
  margin-top: 5vw;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.info-image {
  width: 40%;
  height: auto;
  border-radius: 10px;
}

.info-text {
  width: 60%;
}

.testimonials {
  margin-top: 3rem;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  max-width: 800px;
}

.testimonials h2,
.cta-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.testimonials blockquote {
  font-size: 1rem;
  line-height: 1.6;
  border-left: 4px solid #007bff;
  padding-left: 1rem;
  margin-bottom: 1rem;
}

.cta-section {
  text-align: center;
  margin-top: 5vw;
  margin-bottom: 5vw;
}

.motivasi-text {
  background: url("@/assets/kategori_bg1.jpeg") no-repeat center center;
  background-size: cover;
  position: fixed;
  width: 100vw;
  height: 20vw;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 0;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: rgb(0, 0, 0);
  margin-top: 5vw;
  flex-direction: column;
}

.text-1 {
  margin-top: 6vw;
  font-size: 18px;
  font-family: "Inria Serif";
}

.motivasi-text button {
  background-color: #050505;
  color: #fff;
  border: none;
  padding: 1vw;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
}

.motivasi-text button:hover {
  background-color: #3a4046;
}

@media (max-width: 768px) {
  .container {
    margin-top: 10vw;
    padding: 0 2vw;
  }

  .info-item {
    flex-direction: column;
  }

  .info-image {
    width: 100%;
  }

  .info-text {
    width: 100%;
  }

  .card {
    width: 80vw;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    margin-top: 7vw;
    padding: 0 5vw;
  }

  .card {
    width: 30vw;
  }
}
</style>
