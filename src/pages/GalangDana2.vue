<template>
  <NavBar />
  <div class="donasi-container">
    <div class="donasi-card">
      <h2>Isi Data Donasi</h2>
      <form @submit.prevent="submitDonation">
        <div class="form-group">
          <label for="existingDonation">Pilih Judul Donasi yang Sudah Ada:</label>
          <select v-model="selectedDonation" @change="populateFields" required>
            <option value="" disabled>Pilih Donasi</option>
            <option v-for="donation in donations" :key="donation.id" :value="donation.id">
              {{ donation.judul_donasi }}
            </option>
          </select>
        </div>
        
        <div class="form-group">
          <input
            type="number"
            v-model="jumlahDonasi"
            placeholder="Jumlah Donasi"
            required
          />
        </div>
        
        <div class="form-group">
          <input
            type="text"
            v-model="alamat"
            placeholder="Alamat"
            required
          />
        </div>
        
        <div class="form-group">
          <input
            type="date"
            v-model="tanggal"
            required
          />
        </div>
        
        <div class="form-group">
          <textarea
            v-model="deskripsi"
            placeholder="Deskripsi Donasi"
            required
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="kategori">Pilih Kategori:</label>
          <select v-model="kategori" required>
            <option value="" disabled>Pilih Kategori</option>
            <option value="kecelakaan_bencana">Kecelakaan & Bencana</option>
            <option value="kesehatan_pendidikan">Kesehatan & Pendidikan</option>
            <option value="panti_asuhan">Panti Asuhan</option>
          </select>
        </div>

        <button type="submit" class="submit">Submit Donasi</button>
      </form>
    </div>
  </div>
  <CikaFooter />
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
import CikaFooter from "@/components/CikaFooter.vue";

export default {
  name: "DonasiInput",
  components: {
    NavBar,
    CikaFooter,
  },
  data() {
    return {
      donations: [], // Daftar donasi yang sudah ada
      selectedDonation: null, // ID donasi yang dipilih
      judulDonasi: "",
      jumlahDonasi: "",
      alamat: "",
      tanggal: "",
      deskripsi: "",
      kategori: "",
    };
  },
  created() {
    this.fetchDonations(); // Ambil data donasi saat komponen dimuat
  },
  methods: {
    async fetchDonations() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/auth/donations/");
        this.donations = response.data; // Simpan data donasi ke variabel
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    },
    populateFields() {
      const selected = this.donations.find(d => d.id === this.selectedDonation);
      if (selected) {
        this.judulDonasi = selected.judul_donasi;
        this.alamat = selected.alamat;
        this.tanggal = selected.tanggal;
        this.deskripsi = selected.deskripsi;
        this.kategori = selected.kategori;
      }
      
    },
    async submitDonation() {
      const donationData = {
        id: this.selectedDonation, // ID donasi untuk update
        jumlah_total_donasi: this.jumlahDonasi,
      };

      try {
        const token = localStorage.getItem('token'); // Ambil token dari localStorage
        const response = await axios.post("http://127.0.0.1:8000/auth/donations/input/", donationData, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        alert("Donasi berhasil ditambahkan!");
        console.log(response.data);
      } catch (error) {
        console.error("Error submitting donation:", error);
        alert("Terjadi kesalahan saat mengirim donasi.");
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

.donasi-container {
  margin-top: 8vw;
  margin-bottom: 5vw;
  display: flex;
  justify-content: center;
  padding: 40px;
}

.donasi-card {
  width: 40%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.donasi-card h2 {
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

input[type="text"],
input[type="number"],
input[type="date"],
textarea,
select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
  background-color: #fff;
  transition: border-color 0.3s ease;
}

textarea {
  resize: vertical;
  height: 100px;
}

input:focus,
textarea:focus,
select:focus {
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
</style>
