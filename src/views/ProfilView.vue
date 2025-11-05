<template>
  <div class="profile-container">
    <div class="container">
      <div class="profile-card">
        <div class="profile-header">
          <div class="profile-avatar">
            <span>🐾</span>
          </div>

          <h1 v-if="user">Selamat Datang, {{ user.name }}!</h1>
          <p>Ini adalah halaman profil personalmu.</p>
        </div>

        <div class="profile-details" v-if="user">
          <h2>Detail Akun</h2>
          <div class="detail-item">
            <strong>Nama:</strong>
            <span>{{ user.name }}</span>
          </div>
          <div class="detail-item">
            <strong>Email:</strong>
            <span>{{ user.email }}</span>
          </div>
          <div class="detail-item">
            <strong>Bergabung pada:</strong>
            <span>{{ user.joined }}</span>
          </div>
        </div>

        <div class="profile-actions">
          <Button variant="primary" @click="editProfile">Edit Profil</Button>
          <Button variant="danger" @click="handleLogout">Logout</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store.js'

// --- LANGKAH DEBUGGING ---
// Kita akan lihat apakah pesan ini muncul di konsol browser
console.log('ProfileView.vue <script setup> mulai dijalankan!');
// ------------------------

const router = useRouter()

// Nanti, data ini akan kamu dapatkan dari API setelah login,
// tapi untuk sekarang kita gunakan data palsu (mock)
const user = store.value.user

const getInitials = (name) => {
  // Tambahkan pengecekan jika user logout & kembali ke login
  if (!name) return '?' 
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

// const handleLogout = () => {
//   console.log('User logged out')
//   store.value.isLoggedIn = false
//   store.value.user = null // <-- JANGAN LUPA KOSONGKAN USER SAAT LOGOUT
//   router.push('/login')
// }

const editProfile = () => {
  alert('Fitur "Edit Profil" belum dibuat!')
}

const handleLogout = () => {
  // Nanti, di sini kamu akan hapus token/session
  console.log('User logged out')
  store.value.isLoggedIn = false
  // Arahkan kembali ke halaman login
  router.push('/login')
}

// --- LANGKAH DEBUGGING ---
console.log('ProfileView.vue <script setup> selesai.');
// ------------------------
</script>

<style scoped>
/* ... (SEMUA KODE CSS LAMA KAMU TETAP SAMA DI SINI) ... */
.profile-container {
  padding: 3rem 0;
  background-color: #f9f9f9;
  flex-grow: 1;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

.profile-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.profile-header {
  text-align: center;
  padding: 2rem;
  background-color: #fdfaf6;
  border-bottom: 1px solid #eee;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #A9C47F; /* Warna primer-mu */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 auto 1rem auto;
  border: 4px solid #fff;
}

.profile-header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.profile-header p {
  color: #666;
  font-size: 1.1rem;
}

.profile-details {
  padding: 2rem;
}

.profile-details h2 {
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  font-size: 1rem;
}

.detail-item strong {
  color: #333;
}

.detail-item span {
  color: #555;
}

.profile-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding: 1.5rem 2rem;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
}
</style>