<template>
  <main class="page-content edit-profile-container">
    <div class="container">
      <div class="edit-profile-card">
        <h1 class="page-title">Edit Profil</h1>
        <p class="subtitle">Perbarui informasi akun Anda</p>

        <form @submit.prevent="saveProfile" class="edit-profile-form">
          
          <!-- <div class="form-group profile-photo-upload">
            <label for="profile-photo">Foto Profil Saat Ini:</label>
            <div class="photo-preview">
                <img :src="currentUser.photoUrl" alt="Foto Profil" class="current-photo">
                <input type="file" id="profile-photo" @change="handleFileUpload" accept="image/*" class="file-input">
                <label for="profile-photo" class="upload-label">Ganti Foto</label>
            </div>
          </div> -->

          <InputField 
            label="Nama Lengkap" 
            type="text" 
            v-model="editedUser.name" 
            placeholder="Masukkan nama lengkap baru" 
            required 
          />
          
          <InputField 
            label="Alamat Email" 
            type="email" 
            v-model="editedUser.email" 
            placeholder="Masukkan email baru" 
            required 
          />

          <div class="form-actions">
            <button type="submit" class="btn btn-primary save-btn">Simpan Perubahan</button>
            <button type="button" @click="router.push('/profile')" class="btn btn-secondary cancel-btn">Batal</button>
          </div>

        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// Asumsi Anda sudah menggunakan V-model di InputField dan TextArea
// Import komponen jika belum terdaftar global
// import InputField from '@/components/ui/InputField.vue' 
// import TextArea from '@/components/ui/TextArea.vue' 

const router = useRouter()

// Data pengguna saat ini (biasanya diambil dari store/API)
// Kita gunakan data dummy untuk simulasi
const currentUser = ref({
  name: 'Kucing Oren',
  email: 'oren@meong.id',
})

// Salinan data yang akan diedit
const editedUser = ref({
  name: '',
  email: '',
  newPhotoFile: null
})

onMounted(() => {
    // Isi formulir dengan data pengguna saat ini
    editedUser.value.name = currentUser.value.name
    editedUser.value.email = currentUser.value.email
})

// Handler untuk upload file
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    editedUser.value.newPhotoFile = file
    // Opsional: Tampilkan preview foto baru
    const reader = new FileReader()
    reader.onload = (e) => {
        currentUser.value.photoUrl = e.target.result // Update preview
    }
    reader.readAsDataURL(file)
  }
}

// Handler untuk menyimpan perubahan
const saveProfile = () => {
  // 1. Lakukan validasi data jika diperlukan.

  // 2. Lakukan pembaruan data ke server (API call)
  console.log('Menyimpan perubahan...', editedUser.value)
  
  // SIMULASI BERHASIL: Perbarui data currentUser
  currentUser.value.name = editedUser.value.name
  currentUser.value.email = editedUser.value.email

  // Tampilkan notifikasi dan alihkan
  alert('Profil berhasil diperbarui!');
  router.push('/profile'); // Kembali ke halaman profil setelah berhasil
}
</script>

<style scoped>
.edit-profile-container {
    padding: 3rem 0;
    background-color: var(--light-cream);
    min-height: 80vh;
}

.edit-profile-card {
    background: var(--white);
    border-radius: 12px;
    box-shadow: var(--shadow);
    padding: 2.5rem;
    max-width: 600px;
    margin: 0 auto;
}

.page-title {
    color: var(--dark-green);
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

.subtitle {
    color: #888;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 1.5rem;
}

.edit-profile-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Photo Upload Styling */
.profile-photo-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--light-gray);
}

.photo-preview {
    position: relative;
    width: 120px;
    height: 120px;
}

.current-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--soft-green);
}

.file-input {
    display: none;
}

.upload-label {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: var(--soft-green);
    color: white;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    cursor: pointer;
    font-weight: bold;
    opacity: 0.9;
    transition: opacity 0.2s;
    /* Menyembunyikan teks 'Ganti Foto' di dalam circle */
    text-indent: -9999px;
    overflow: hidden;
}

/* Icon kamera kecil di atas label */
.upload-label::before {
    content: '📷'; 
    text-indent: 0;
    font-size: 1rem;
}

.upload-label:hover {
    opacity: 1;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;
}

.save-btn {
    background-color: var(--soft-green);
}

.cancel-btn {
    background-color: var(--light-gray);
    color: var(--text-black);
}

</style>
