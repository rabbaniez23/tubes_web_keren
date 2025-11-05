<template>
  <div class="auth-container">
    <div class="auth-content">
      <div class="auth-form-section">
        <div class="auth-form-wrapper">
          <div class="auth-logo">
            <span class="logo-icon">🐾</span>
            <span class="logo-text">Meong.id</span>
          </div>
          <h1 class="auth-title">Gabung bersama Kami</h1>
          <p class="auth-subtitle">Buat akun untuk mulai membantu kucing Anda.</p>

          <form class="auth-form" @submit.prevent="handleSignup">
            <InputField 
              id="name"
              label="Nama lengkap"
              placeholder="Enter your full name"
              v-model="name"
              required
            />
            
            <InputField 
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              v-model="email"
              required
            />
            
            <InputField 
              id="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              v-model="password"
              required
            />
            
            <InputField 
              id="confirm-password"
              label="Konfirmasi Password"
              type="password"
              placeholder="Confirm your password"
              v-model="confirmPassword"
              required
            />

            <div class="form-options">
              <label class="checkbox-label">
                <input type="checkbox" name="terms" required>
                <span>saya setuju dengan peraturan</span>
              </label>
            </div>

            <Button type="submit" variant="primary" :block="true">
              Buat Akun
            </Button>
          </form>

          <p class="auth-footer">
            Sudah punya akun?
            <RouterLink to="/login" class="link">Masuk</RouterLink>
          </p>

          <RouterLink to="/" class="back-link">←Kembali ke Beranda</RouterLink>
        </div>
      </div>

      <div class="auth-image-section">
        <img src="/kucing.png" alt="meong.id">
        <div class="auth-image-overlay">
          <h2>Mulai perjalananmu bersama Kami</h2>
          <p>bergabung lah dengan jutaan orang pecinta kucing</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Gunakan <script setup> agar konsisten dengan komponen UI-mu
import { ref } from 'vue'

// Buat "wadah" reaktif untuk data form
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleSignup = () => {
  // Nanti, kamu bisa tambahkan logika signup di sini
  console.log('Form disubmit:', {
    name: name.value,
    email: email.value,
    password: password.value
  })
  alert('Akun berhasil dibuat! (Hanya pura-pura)')
}
</script>

<style scoped>

/* Kamu bisa tambahkan style khusus untuk auth-container, dll. di sini.
  Style untuk InputField dan Button akan diambil dari file komponennya.
*/
</style>