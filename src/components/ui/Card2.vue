<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <slot></slot> 
  </div>
</template>

<script setup>
// Tidak ada perubahan di script
</script>

<style scoped>
/* Anda mungkin perlu menambahkan gaya dasar untuk div.card jika gaya dari style.css tidak mencukupi, 
   tapi saat ini kita biarkan kosong agar fokus pada slot. 
   Semua styling visual (figure, card-body, dll.) sudah dipindahkan ke LostCatView.vue
   yang memanggil Card. */
</style>