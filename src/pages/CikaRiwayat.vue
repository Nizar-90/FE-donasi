<template>
  <div>
    <NavBar />
    <div class="container">
      <h1 class="page-title">Riwayat Aktivitas</h1>
      <div class="riwayat-list">
        <div
          class="riwayat-item"
          v-for="(item, index) in riwayatItems"
          :key="index"
        >
          <img :src="item.imageSrc" alt="Riwayat Image" class="riwayat-image" />
          <div class="riwayat-details">
            <p class="riwayat-title">{{ item.title }}</p>
            <p class="riwayat-lecation">{{ item.location }}</p>
            <p class="riwayat-activityType">{{ item.activityType }}</p>
            <p class="riwayat-date">{{ item.date }}</p>
            <p class="riwayat-description">{{ item.description }}</p>
            <p class="riwayat-count">{{ item.count }}</p>
            <p class="riwayat-status">{{ item.status }}</p>
          </div>
        </div>
      </div>
    </div>
    <CikaFooter />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CikaFooter from "@/components/CikaFooter.vue";

export default {
  name: "CikaRiwayat",
  components: {
    NavBar,
    CikaFooter,
  },
  data() {
    return {
      riwayatItems: [
        {
          title: "Donasi Kecelakaan dan Bencana",
          date: "12 Agustus 2024",
          description:
            "Donasi yang disalurkan untuk membantu korban kecelakaan.",
          location: "kabupaten Ciliin, Provinsi Jawa Barat", // Lokasi kegiatan
          activityType: "Kecelakaan Kebakaran", // Jenis aktivitas
          count: "Rp. 2.000.000",
          status: "Selesai", // Status aktivitas
          imageSrc: require("@/assets/home_kebakaran.png"),
        },
        {
          title: "Donasi Kecelakaan dan Bencana",
          date: "25 Juli 2024",
          description:
            "Dukungan untuk korban bencana alam banjir sedalam 1 meter.",
          location: "Baleendah, Kabupaten Bandung selatan",
          activityType: "Bencana Alam Banjir",
          count: "Rp. 300.000",
          status: "Berlangsung",
          imageSrc: require("@/assets/home_kebanjiran.jpg"),
        },
        {
          title: "Donasi Kesehatan dan pendidikan",
          date: "5 Juni 2024",
          description:
            "Partisipasi dalam kegiatan sosial bulanan rumah sakit Muhammadiyah.",
          location: "Kota Bandung",
          activityType: "Kesehatan",
          count: "Rp. 1.000.000",
          status: "Selesai",
          imageSrc: require("@/assets/home_menolong.jpg"),
        },
        {
          title: "Donasi untuk Kesehatan dan Pendidikan",
          date: "25 Juli 2024",
          description:
            "Dukungan untuk program pembangunan gedung sekolah yang rusak.",
          location: "New York, Los Angels",
          activityType: "Pendidikan",
          count: "Rp. 1.500.000",
          status: "Berlangsung",
          imageSrc: require("@/assets/home_disaster.png"),
        },
        {
          title: "Donasi Panti Asuhan",
          date: "25 Juli 2024",
          description: "Dukungan untuk program Panti Asuhan Ceria Sangat Amat.",
          location: "San Francis cokkk",
          activityType: "Panti Asuhan",
          count: "Rp. 10.000.000",
          status: "Berlangsung",
          imageSrc: require("@/assets/home_pantiasuhan.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Arial TM Bold", Arial, sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vw;
  padding: 2vw;
}

.page-title {
  font-family: "Raleway";
  font-size: 30px;
  text-align: center;
  margin-bottom: 2vw;
}

.riwayat-list {
  width: 80vw;
  margin-top: 2vw;
}

.riwayat-item {
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid transparent;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 1vw 0;
  padding: 1vw;
}

.riwayat-image {
  width: 20vw;
  border-radius: 5px;
  height: auto;
  margin-right: 2vw;
}

.riwayat-details {
  flex: 1;
}

.riwayat-title {
  font-family: "Raleway";
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 1vw;
}

.riwayat-date {
  font-family: "Raleway";
  font-size: 16px;
  margin-bottom: 0.5vw;
}

.riwayat-description {
  font-family: "Raleway";
  font-size: 14px;
}

@media (max-width: 768px) {
  .container {
    margin-top: 10vw;
    padding: 0 2vw;
  }

  .riwayat-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .riwayat-image {
    width: 100%;
    margin-bottom: 1vw;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    margin-top: 7vw;
    padding: 0 5vw;
  }
}
</style>
