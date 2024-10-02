<template>
    <NavBar/>
    <div class="inbox-container">
      <div class="message-item" v-for="(message, index) in messages" :key="index" :class="{ 'unread': !message.read, 'read': message.read }">
        <div class="message-header">
          <img :src="message.image" alt="Sender" class="sender-image">
          <div class="message-details">
            <h2>{{ message.sender }}</h2>
            <p>{{ message.time }}</p>
          </div>
        </div>
        <p class="message-content">{{ message.content }}</p>
        <div class="message-actions">
          <button @click="markAsRead(index)" class="action-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
              <path d="M16 2l-8 8-4-4-1.5 1.5 5.5 5.5 9-9z"/>
            </svg>
            Tandai Sebagai Terbaca
          </button>
          <button @click="deleteMessage(index)" class="action-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
              <path d="M5.5 5.5l1-1 2 2 2-2 1 1-2 2 2 2-1 1-2-2-2 2-1-1 2-2-2-2z"/>
            </svg>
            Hapus
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from './NavBar.vue';
  
  export default {
    name: 'CikaInbox',
    components: {
      NavBar,
    },
    data() {
      return {
        messages: [
          {
            sender: 'Kisah Pilu Sang Ayah Yang Kehilangan Rumah',
            content: 'Anda berhasil mendonasi sebesar Rp. 30.000.000',
            time: '10:00 AM',
            image: require('@/assets/home_disaster.png'),
            read: false
          },
          {
            sender: 'Banjir Besar di Kota',
            content: 'Anda berhasil mendonasi sebesar Rp. 2.000.000',
            time: '11:00 AM',
            image: require('@/assets/kebanjiran.jpg'),
            read: false
          },
          {
            sender: 'Gempa di Kota cianjur merobohkan 201 rumah',
            content: 'Anda berhasil mendonasi sebesar Rp. 9.500.000',
            time: '11:00 AM',
            image: require('@/assets/home_kebakaran.png'),
            read: false
          },
        ],
      };
    },
    methods: {
      markAsRead(index) {
        this.$set(this.messages, index, { ...this.messages[index], read: true });
      },
      deleteMessage(index) {
        this.messages.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    font-family: 'Arial TM Bold', Arial, sans-serif;
  }
  
  .inbox-container {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .message-item {
    border-bottom: 1px solid #e0e0e0; /* Border abu-abu terang */
    padding: 10px 15px;
    margin-bottom: 20px; /* Spasi antara pesan */
  }
  
  .message-item.read {
    background-color: #ffffff; /* Background untuk pesan yang sudah dibaca */
  }
  
  .message-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .sender-image {
    width: 70px;
    height: 70px;
    border-radius: 5px;
    margin-right: 15px;
  }
  
  .message-details h2 {
    font-size: 18px;
    color: #333; /* Abu-abu gelap */
    margin-bottom: 5px;
  }
  
  .message-details p {
    font-size: 14px;
    color: #777; /* Abu-abu muda */
  }
  
  .message-content {
    font-size: 16px;
    color: #444; /* Abu-abu sedang */
    margin-bottom: 15px;
  }
  
  .message-actions {
    display: flex;
    justify-content: flex-end;
  }
  
  .action-button {
    background-color: transparent;
    color: black;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .action-button svg {
    margin-right: 5px;
  }
  
  .action-button:hover {
    background-color: #f0f0f0; /* Warna latar belakang saat hover */
  }
  </style>