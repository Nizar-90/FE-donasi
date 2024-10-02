<!-- App.vue -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  --background-color: #EEEEEE;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; 
  background: var(--background-color); /* Mengatur latar belakang seluruh halaman */
}
</style>
