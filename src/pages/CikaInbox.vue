<template>
  <div class="page-inbox">
    <div class="header">
    </div>
    <CikaInbox />
  </div>
</template>

<script>
import CikaInbox from '@/components/CikaInbox.vue';

export default {
  name: 'CikaInboxPage',
  components: {
    CikaInbox,
  },
};
</script>

<style scoped>
.page-inbox {
  background-color: #f0f0f0; /* Background abu-abu terang */
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 100px;
}

.header h1 {
  font-size: 24px;
  color: #333; /* Abu-abu gelap */
}
</style>