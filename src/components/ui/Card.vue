<template>
  <div class="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img
      src="../../../public/artikel1.jpg"
      alt="Shoes" />
  </figure>
  <div class="card-body w-full  border-black border-2">
    <h2 class="card-title">kucing</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary" href="artikel.html">Buy Now</button>
    </div>
  </div>
</div>
</template>

<script setup>
// Tidak perlu script, semua sudah di handle oleh props/slots
</script>

<style scoped>

</style>