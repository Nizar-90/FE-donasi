<!-- CardComponent -->
<template>
  <div class="card">
    <router-link to="/CikaDetails" style="text-decoration: none; color: inherit;">
    <img :src="imageSrc" alt="Disaster Image" class="card-img" />
    <div class="card-content">
      <p class="category">{{ category }}</p>
      <h3 class="title">{{ title }}</h3>
      <p class="amount">
        Terkumpul <span>{{ amount }}</span>
      </p>
      <div class="progress-bar">
        <div class="progress" :style="{ width: progressWidth }"></div>
      </div>
    </div>
  </router-link>
  </div>

</template>

<script>
export default {
  props: {
    imageSrc: String,
    category: String,
    title: String,
    amount: String,
    budget: Number,
  },
  computed: {
    progressWidth() {
      const amount = parseFloat(
        this.amount.replace("Rp. ", "").replace(",", "")
      );
      return `${(amount / this.budget) * 100}%`;
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap");
.card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-inline: 30px;
  margin-block: 30px;
  width: 38.7vw;
  background-color: white;
}
.card-img {
  width: 10vw;
  margin-left: 1vw;
  margin-top: 1vw;
}
.card-content {
  padding: 16px;
  padding-left: 30%;
  margin-top: -13.7vw;
  padding-bottom: 2vw;
  font-family: 'Arial TM Bold', sans-serif;
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}
.category {
  color: #757575;
  font-size: 14px;
  margin-bottom: 8px;
}
.amount {
  font-size: 16px;
  font-weight: 500;
  color: #4caf50;
}

.amount span {
  color: #000;
}

.progress-bar {
  background: #e0e0e0;
  border-radius: 5px;
  height: 10px;
  margin-top: 10px;
  position: relative;
  width: 100%;
}

.progress {
  background: #4caf50;
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s ease;
}
</style>
