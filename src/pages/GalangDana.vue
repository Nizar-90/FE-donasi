<template>
  <NavBar />
  <div class="contact-container">
    <div class="contact-card">
      <h2>Isi Data Diri Anda</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            type="text"
            id="nama"
            v-model="name"
            placeholder="nama"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            id="telepon"
            v-model="telepon"
            placeholder="no telepon"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            id="pekerjaan"
            v-model="pekerjaan"
            placeholder="pekerjaan"
          />
        </div>
        <div class="form-group">
          <textarea
            id="tempatKerja"
            v-model="tempatKerja"
            placeholder="nama sekolah/tempat kerja"
          ></textarea>
        </div>
        <button class="submit" type="submit">Submit</button>
      </form>
    </div>
    <div class="info-card info-card1">
      <h2>Pilih Kategori Galang Dana</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="kategori">Kategori Galang Dana:</label>
          <div class="checkbox-group">
            <input
              type="checkbox"
              id="kategori1"
              value="Kecelakaan Dan Bencana"
              v-model="categories"
            />
            <label for="kategori1">Donasi Kecelakaan Dan Bencana</label>
          </div>
          <div class="checkbox-group">
            <input
              type="checkbox"
              id="kategori2"
              value="Kesehatan Dan Pendidikan"
              v-model="categories"
            />
            <label for="kategori2">Donasi Kesehatan Dan Pendidikan</label>
          </div>
          <div class="checkbox-group">
            <input
              type="checkbox"
              id="kategori3"
              value="Panti Asuhan"
              v-model="categories"
            />
            <label for="kategori3">Donasi Panti Asuhan</label>
          </div>
        </div>
      </form>
    </div>
    <div class="info-card info-card2">
      <h2>Baca dan beri tanda syarat penggalangan di bawah ini</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <div class="checkbox-group">
            <input type="checkbox" id="syarat1" v-model="terms" />
            <label for="syarat1"
              >Pemilik rekening bertanggung jawab atas penggunaan dana yang
              diterima dari galang dana ini.</label
            >
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="syarat2" v-model="terms" />
            <label for="syarat2"
              >Kamu sebagai penggalang dana bertanggung jawab atas permintaan
              pencairan dan pelaporan penggunaan dana.</label
            >
          </div>
        </div>
      </form>
    </div>
  </div>
  <CikaFooter />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CikaFooter from "@/components/CikaFooter.vue";

export default {
  name: "GalangDana",
  components: {
    NavBar,
    CikaFooter,
  },
  data() {
    return {
      name: "",
      telepon: "",
      pekerjaan: "",
      tempatKerja: "",
      categories: [],
      terms: [],
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log("Name:", this.name);
      console.log("Telepon:", this.telepon);
      console.log("Pekerjaan:", this.pekerjaan);
      console.log("Tempat Kerja:", this.tempatKerja);
      console.log("Categories:", this.categories);
      console.log("Terms:", this.terms);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

.contact-container {
  margin-top: 8vw; /* Ensure the navbar is not overlapped */
  margin-bottom: 5vw;
  display: flex;
  justify-content: space-between;
  padding: 40px;
}

.contact-card,
.info-card1,
.info-card2 {
  width: 30%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Styles for the first card (contact-card) */
.contact-card h2 {
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

input[type="text"],
textarea {
  width: 90%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 0.3s ease;
}

textarea {
  resize: vertical;
  height: 100px;
}

input[type="text"]:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

.submit {
  width: 100%;
  padding: 12px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.submit:hover {
  background-color: #600000;
}

/* Styles for the second card (info-card1) */
.info-card1 h2 {
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox-group input[type="checkbox"] {
  width: auto;
  margin-right: 10px;
}

/* Styles for the third card (info-card2) */
.info-card2 h2 {
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox-group input[type="checkbox"] {
  width: auto;
  margin-right: 10px;
}
</style>