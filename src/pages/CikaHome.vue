<template>
  <NavBar />
  <div class="container">
    <div class="images">
      <img
        :src="require('@/assets/home_pantiasuhan.png')"
        alt="Image 1"
        class="image image-left"
      />
      <img
        :src="require('@/assets/home_kebanjiran.jpg')"
        alt="Image 2"
        class="image image-middle"
      />
      <img
        :src="require('@/assets/home_kebakaran.png')"
        alt="Image 3"
        class="image image-right"
      />
    </div>
    <p class="slogan">"Berbagi Cinta, Membangun Harapan"</p>
    <div class="menu">
      <img :src="require('@/assets/home_menolong.jpg')" />
    </div>
    <div class="visi-misi">
      <div class="visi">
        <p class="title-visi">VISI</p>
        <p class="sub-visi">
          Menghubungkan hati para dermawan untuk menciptakan dunia yang peduli
          dan penuh kasih
        </p>
      </div>
      <div class="misi">
        <p class="title-misi">MISI</p>
        <div class="misi-table">
          <div class="misi-item">
            <p>
              <strong>Memfasilitasi Aksi Kebaikan:</strong> Menyediakan platform
              yang mudah digunakan untuk menyalurkan donasi kepada mereka yang
              membutuhkan, memastikan proses yang transparan dan terpercaya.
            </p>
          </div>
          <div class="misi-item">
            <p>
              <strong>Membangun Komunitas Peduli:</strong> Menginspirasi dan
              mengedukasi masyarakat tentang pentingnya berbagi dan beramal,
              serta membangun komunitas yang peduli dan saling mendukung.
            </p>
          </div>
          <div class="misi-item">
            <p>
              <strong>Mendukung Berbagai Program Sosial:</strong> Bermitra
              dengan organisasi dan inisiatif sosial untuk mendukung
              program-program yang berfokus pada pendidikan, kesehatan,
              pemberdayaan ekonomi, dan lingkungan.
            </p>
          </div>
          <div class="misi-item-long">
            <p>
              <strong>Transparansi dan Akuntabilitas:</strong> Menjamin bahwa
              setiap donasi disalurkan dengan tepat dan memberikan laporan yang
              jelas dan terperinci kepada para donatur tentang penggunaan dana
              yang terkumpul.
            </p>
          </div>
          <div class="misi-item-long">
            <p>
              <strong>Inovasi Berkelanjutan:</strong> Terus mengembangkan
              teknologi dan metode baru untuk memudahkan proses donasi, serta
              meningkatkan efektivitas dan efisiensi dalam penyaluran bantuan.
            </p>
          </div>
        </div>
      </div>
     
    </div>
    
  </div>
  <div class="GalangDana">
    <p class="GDtext">
      Satu aksi kecil Anda bisa membawa perubahan besar. Laporkan kejadian yang
      Anda saksikan dan buat kampanye galang dana untuk membantu mereka yang
      membutuhkan. Bergabunglah dalam usaha ini dan berikan kontribusi nyata
      untuk membuat perbedaan!
    </p>
    <button @click="goToGalangDana('/GalangDana')"> Galang dana</button>
  </div>
  <p class="slogan">Donasi Sekarang</p>
  <div class="card-container">
    <CardComponent
      v-for="(card, index) in cards"
      :key="index"
      :imageSrc="card.imageSrc"
      :category="card.category"
      :title="card.title"
      :amount="card.amount"
      :budget="card.budget"
    />
  </div>
  
  <CikaFooter />
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import NavBar from "@/components/NavBar.vue";
import CikaFooter from "@/components/CikaFooter.vue";

export default {
  name: "CikaHome",
  components: {
    CardComponent,
    NavBar,
    CikaFooter,
  },
  data() {
    return {
      cards: [
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam longsor",
          title: "Kisah Pilu Sang Ayah Yang Kehilangan Rumah",
          amount: "Rp. 2,835,000",
          budget: 50000,
        },
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam banjir",
          title: "Banjir Besar di Kota",
          amount: "Rp. 1,500,000",
          budget: 15000,
        },
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam gempa",
          title: "Gempa Bumi Menghancurkan",
          amount: "Rp. 3,000,000",
          budget: 7000000,
        },
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam gempa",
          title: "Gempa Bumi Menghancurkan",
          amount: "Rp. 3,000,000",
          budget: 7000000,
        },
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam gempa",
          title: "Gempa Bumi Menghancurkan",
          amount: "Rp. 3,000,000",
          budget: 7000000,
        },
        {
          imageSrc: require("@/assets/home_disaster.png"),
          category: "bencana alam gempa",
          title: "Gempa Bumi Menghancurkan",
          amount: "Rp. 300,000",
          budget: 700900,
        },
      ],
    };
  },
  methods: {
    goToGalangDana(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vw;
  padding: 0 5vw;
}

.images {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 2vw;
}

.image {
  width: 30vw;
  height: auto;
}

.image-left {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.image-middle {
  border-radius: 0px;
}

.image-right {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.slogan {
  font-family: "Raleway";
  font-size: 30px;
  text-align: center;
}
p {
  font-family: "Raleway";
  font-size: 15px;
  text-align: center;
}

.menu img {
  width: 80vw;
  margin-top: 2vw;
}

.visi-misi {
  width: 80vw;
  margin-top: 2vw;
}

.visi,
.misi {
  margin-bottom: 2vw;
}

.title-visi,
.title-misi {
  font-family: "Raleway";
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 1vw;
}

.sub-visi {
  font-family: "Raleway";
  font-size: 18px;
  text-align: center;
  margin-bottom: 1vw;
}

.misi-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.misi-item {
  width: 25%;
  background-color: white;
  border: 1px solid transparent;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 0.4vw;
  padding: 1vw;
}

.misi-item-long {
  width: 40%;
  background-color: white;
  border: 1px solid transparent;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 0.4vw;
  padding: 1vw;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -1vw;
  margin-bottom: 5vw;
}
.GalangDana {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("@/assets/home_kebanjiran.jpg");
  background-size: cover;
  color: rgb(255, 255, 255);
  margin-top: 2vw;
  margin-bottom: 5vw;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.GDtext {
  font-family: 'Raleway', sans-serif;
  width: 100%;
  max-width: 700px;
  text-align: center;
  margin-top: 1rem;
  font-size: 25px;
}

.GalangDana button {
  width: 20%;
  padding: 10px;
  background-color: white;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 3vw;
  font-weight: bold;
  transform: background-color;
}
.GalangDana button:hover{
  background-color: #a19f9f;
}
@media (max-width: 768px) {
  .visi-misi {
    width: 90vw;
    margin-top: 5vw;
  }

  .misi-item,
  .misi-item-long {
    width: 100%;
  }

  .title-visi,
  .title-misi {
    font-size: 6vw;
  }

  .sub-visi {
    font-size: 5vw;
  }

  .misi-table {
    flex-direction: column;
    align-items: center;
  }

  .misi-item {
    margin: 2vw 0;
    width: 100%;
  }

  .misi-item-long {
    margin: 2vw 0;
    width: 100%;
  }
  .container {
    margin-top: 10vw;
    padding: 0 2vw;
  }

  .images {
    flex-direction: column;
  }

  .image {
    width: 100%;
    margin-bottom: 2vw;
  }

  .image-left,
  .image-middle,
  .image-right {
    border-radius: 5px;
  }

  p {
    font-size: 6vw;
  }

  .menu {
    flex-direction: column;
  }

  .menu-item {
    margin: 2vw 0;
  }

  .card-container {
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    margin-top: 7vw;
    padding: 0 5vw;
  }

  .images {
    flex-direction: row;
  }

  .image {
    width: 30vw;
  }

  p {
    font-size: 5vw;
  }

  .menu {
    flex-direction: row;
  }

  .menu-item {
    margin: 1vw;
  }

  .card-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .visi-misi {
    width: 85vw;
    margin-top: 4vw;
  }

  .misi-item {
    width: 48%;
  }

  .misi-item-long {
    width: 98%;
  }

  .title-visi,
  .title-misi {
    font-size: 5vw;
  }

  .sub-visi {
    font-size: 4vw;
  }
}
</style>
