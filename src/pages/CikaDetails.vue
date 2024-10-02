<!-- CikaDetails -->
<template>
    <div class="fundraiser-page">
      <button class="back-button" @click="goBack">←</button>
      <img
        :src="require('@/assets/kebanjiran.jpg')"
        alt="Fundraiser Image"
        class="header-image"
      />
      <section class="fundraiser-details">
        <h2>200 orang rumah nya terendam banjir, 187 berhasil di evakuasi.</h2>
        <p class="amount-collected">Rp{{ collectedAmount.toLocaleString() }}</p>
        <p class="goal-amount">
          Terkumpul dari Rp{{ goalAmount.toLocaleString() }}
        </p>
        <div class="progress-bar">
          <div
            class="progress"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <p class="days-left">{{ daysLeft }} hari</p>
      </section>
  
      <section class="fundraiser-info">
        <h3>Penjelasan Lebih Lanjut</h3>
        <div class="info-content">
          <img :src="require('@/assets/profile_photo.jpg')" alt="Deskripsi Fundraiser" class="info-image" />
          <p class="info-description">
            Bencana banjir yang melanda wilayah ini telah mengakibatkan kerusakan parah, dengan lebih dari 200 rumah terendam air. Tim tanggap darurat telah berhasil mengevakuasi 187 orang, namun masih banyak keluarga yang memerlukan bantuan. Dana yang terkumpul akan digunakan untuk penyediaan kebutuhan dasar, perbaikan rumah, dan dukungan jangka panjang untuk korban. Mari bergotong-royong dalam memberikan bantuan agar mereka dapat kembali ke kehidupan normal secepat mungkin.
          </p>
        </div>
      </section>
      
  
      <footer class="footer">
        <button class="share-button">
          <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="64px" height="64px"><path d="M 48.730469 10.037109 C 43.199469 10.037109 38.699219 14.536359 38.699219 20.068359 C 38.699219 20.437847 38.720642 20.802863 38.759766 21.162109 L 26.601562 27.328125 C 25.073599 26.394326 23.285065 25.847656 21.367188 25.847656 C 15.810188 25.847656 11.287109 30.367781 11.287109 35.925781 C 11.287109 41.483781 15.810188 46.005859 21.367188 46.005859 C 23.359628 46.005859 25.213692 45.415871 26.779297 44.414062 L 39.017578 51.464844 C 39.006915 51.653493 38.990234 51.83998 38.990234 52.03125 C 38.990234 57.54025 43.471469 62.023438 48.980469 62.023438 C 54.489469 62.023437 58.972656 57.54025 58.972656 52.03125 C 58.972656 46.52225 54.488469 42.041016 48.980469 42.041016 C 46.546917 42.041016 44.317171 42.919248 42.582031 44.371094 L 31.255859 37.847656 C 31.376646 37.224963 31.445312 36.583265 31.445312 35.925781 C 31.445312 35.278544 31.378857 34.646813 31.261719 34.033203 L 42.832031 28.164062 C 44.490112 29.375707 46.524474 30.101562 48.730469 30.101562 C 54.261469 30.101562 58.763672 25.600359 58.763672 20.068359 C 58.763672 14.536359 54.261469 10.037109 48.730469 10.037109 z"/></svg>
        </button>
        <button class="donate-button">Donasi sekarang</button>
      </footer>
  
    
    </div>
  </template>
  
  <script>
  
  
  export default {
    data() {
      return {
        collectedAmount: 40682000,
        goalAmount: 100000000,
        daysLeft: 116,
        cards: [
          // Add your card data here
        ]
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    },
    computed: {
      progressPercentage() {
        return (this.collectedAmount / this.goalAmount) * 100;
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    font-family: 'Arial TM Bold', Arial, sans-serif;
  }
  
  .fundraiser-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    position: relative;
    text-align: center;
  }
  
  .back-button {
    position: absolute;
    top: 15px;
    left: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .back-button:hover {
    color: #0056b3;
  }
  
  .header-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
  }
  
  .fundraiser-details {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: -20px;
    margin-bottom: 20px;
  }
  
  .fundraiser-details h2 {
    font-size: 24px;
    font-weight: 600;
    color: #444;
    margin-bottom: 10px;
  }
  
  .amount-collected {
    font-size: 28px;
    font-weight: 700;
    color: #4CAF50;
    margin: 10px 0;
  }
  
  .goal-amount {
    font-size: 16px;
    color: #757575;
    margin-bottom: 20px;
  }
  
  .progress-bar {
    background: #e0e0e0;
    border-radius: 5px;
    height: 10px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
  }
  
  .progress {
    background: #4CAF50;
    height: 100%;
    transition: width 0.3s ease;
  }
  
  .days-left {
    font-size: 14px;
    color: #757575;
    margin-bottom: 20px;
  }
  
  .actions {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .action-button {
    background: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .action-button:hover {
    background-color: #4CAF50;
  }
  
  .fundraiser-info {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .info-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .info-image {
    max-width: 200px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .info-description {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .share-button {
    background: linear-gradient(135deg, #4CAF50, #66BB6A);
    border: none;
    color: white;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .share-button svg {
    fill: white;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  
  .share-button:hover {
    background: linear-gradient(135deg, #66BB6A, #4CAF50);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  .share-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 121, 107, 0.5);
  }
  
  .donate-button {
    background: linear-gradient(135deg, #4CAF50, #66BB6A);
    border: none;
    color: white;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .donate-button:hover {
    background: linear-gradient(135deg, #66BB6A, #4CAF50);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  .donate-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.5);
  }
  
  </style>