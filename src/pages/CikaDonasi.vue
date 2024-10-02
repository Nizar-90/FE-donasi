    <template>
    <NavBar />
        <div class="container">
        <h1>Buat Donasi Baru</h1>
        <form @submit.prevent="submitDonation" enctype="multipart/form-data">
            <div class="form-group">
            <label for="kategori">Kategori:</label>
            <select v-model="kategori" required>
                <option value="kecelakaan_bencana">Kecelakaan & Bencana</option>
                <option value="kesehatan_pendidikan">Kesehatan & Pendidikan</option>
                <option value="panti_asuhan">Panti Asuhan</option>
            </select>
            </div>
    
            <div class="form-group">
            <label for="judul_donasi">Judul Donasi:</label>
            <input type="text" v-model="judul_donasi" placeholder="Judul donasi..." required />
            </div>
    
            <div class="form-group">
            <label for="alamat">Alamat:</label>
            <input type="text" v-model="alamat" placeholder="Alamat..." required />
            </div>
    
            <div class="form-group">
            <label for="tanggal">Tanggal:</label>
            <input type="date" v-model="tanggal" required />
            </div>
    
            <div class="form-group">
            <label for="deskripsi">Deskripsi:</label>
            <textarea v-model="deskripsi" placeholder="Deskripsi donasi..." required></textarea>
            </div>
    
            <div class="form-group">
            <label for="gambar">Upload Gambar:</label>
            <input type="file" @change="onFileChange" />
            </div>
    
            <button type="submit">Simpan Donasi</button>
        </form>
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
            kategori: '',
            judul_donasi: '',
            alamat: '',
            tanggal: '',
            deskripsi: '',
            gambar: null,  // Untuk menyimpan gambar yang diunggah
        };
        },
        methods: {
        // Fungsi untuk menangani perubahan file input
        onFileChange(e) {
            this.gambar = e.target.files[0];  // Simpan file gambar yang dipilih
        },
    
        // Fungsi untuk submit form donasi
        submitDonation() {
            const formData = new FormData();
            formData.append('kategori', this.kategori);
            formData.append('judul_donasi', this.judul_donasi);
            formData.append('alamat', this.alamat);
            formData.append('tanggal', this.tanggal);
            formData.append('deskripsi', this.deskripsi);
    
            if (this.gambar) {
            formData.append('gambar', this.gambar);  // Tambahkan file gambar jika ada
            }
    
            axios.post('http://127.0.0.1:8000/auth/donations/create/', formData, {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data',
            },
            })
            .then(response => {
                console.log(response);
            alert('Donasi berhasil dibuat!');
            this.$router.push('/cikahome');  // Alihkan ke halaman lain setelah sukses
            })
            .catch(error => {
            console.error('Error:', error);
            alert('Gagal membuat donasi, coba lagi.');
            });
        },
        },
    };
    </script>
    
    <style scoped>
    .container {
        max-width: 600px;
        margin: 0 auto;
    }
    
    h1 {
        text-align: center;
        margin-bottom: 20px;
    }
    
    .form-group {
        margin-bottom: 15px;
    }
    
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    
    input,
    select,
    textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    
    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    </style>
    