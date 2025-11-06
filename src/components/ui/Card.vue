<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <slot name="image"></slot>
    </figure>
    <div class="card-body">
      <slot name="title"></slot>
      
      <slot name="content"></slot>
      
      <div class="card-actions justify-end">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
// Tidak perlu script, semua sudah di handle oleh props/slots
</script>

<style scoped>

</style>