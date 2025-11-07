<template>
  <div class="donation-page">

    <template v-if="store.isLoggedIn">
      <PageHeader 
        title="Selesaikan Donasi Anda"
        subtitle="Terima kasih telah menjadi pahlawan bagi mereka!"
      />
      
      <div class="form-container container">
        <form class="donation-form" @submit.prevent="handleDonationSubmit">
          <SectionTitle title="Detail Donasi" />

          <InputField 
            label="Nominal Donasi"
            id="nominal"
            type="number"
            placeholder="Contoh: 50000"
            v-model="donation.nominal"
            required
          />
          
          <div class="ui-form-group">
            <label>Metode Pembayaran</label>
            <div class="payment-options">
              <label class="radio-label">
                <input type="radio" v-model="donation.paymentMethod" value="qris" checked>
                <span class="radio-button">QRIS</span>
              </label>
              <label class="radio-label">
                <input type="radio" v-model="donation.paymentMethod" value="bca">
                <span class="radio-button">Bank BCA</span>
              </label>
              <label class="radio-label">
                <input type="radio" v-model="donation.paymentMethod" value="gopay">
                <span class="radio-button">GoPay</span>
              </label>
            </div>
          </div>
          
          <SectionTitle title="Data Diri" />
          
          <InputField 
            label="Nama Lengkap"
            id="donor-name"
            v-model="donation.name"
            required
          />
          <InputField 
            label="Email"
            id="donor-email"
            type="email"
            v-model="donation.email"
            required
          />

          <Button type="submit" variant="primary" :block="true">
            Proses Donasi & Kirim Bukti
          </Button>
        </form>
      </div>
    </template>

    <template v-else>
      <PageHeader 
        title="Donasi untuk Kucing Jalanan"
        subtitle="Rekening ini didaftarkan atas nama salah satu relawan kami. Akan tetapi, rekening dikhususkan untuk kegiatan Meong.id."
      />
      
      <div class="anonymous-container container">
        <div class="info-table">
          <table>
            <tbody>
              <tr>
                <td>Bank</td>
                <td>CIMB Niaga Kantor Cabang Pintu Air</td>
              </tr>
              <tr>
                <td>Swift</td>
                <td>BNIAIDJA</td>
              </tr>
              <tr>
                <td>Akun</td>
                <td>705516204400</td>
              </tr>
              <tr>
                <td>Nama</td>
                <td>Julia Rahmawati</td>
              </tr>
              <tr>
                <td>Nominal</td>
                <td>(Bebas)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="emoney-info">
          <h3>Donasi dengan E-money</h3>
          <p>Donasi juga dapat dikirimkan melalui <strong>DANA, GOPAY, LINK AJA dan OVO</strong> di nomor <strong>0811343684</strong>.</p>
          <p class="note">
            Mohon untuk memberikan catatan dan mengirimkan bukti transfer ke <strong>info@catrescue.id</strong>. 
            Terima kasih atas kepedulian dan kontribusi Anda untuk menolong kucing jalanan di Bandung.
          </p>
        </div>
      </div>
    </template>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { store } from '../store.js'

// Data form untuk donasi yang login
const donation = reactive({
  nominal: '',
  paymentMethod: 'qris',
  // Ambil data dari store, jika tidak ada, kosongi
  name: store.value.user?.name || '', 
  email: store.value.user?.email || ''
})

const handleDonationSubmit = () => {
  console.log('Donasi disubmit:', donation)
  alert('Terima kasih atas donasi Anda! Bukti akan dikirim ke email. (Hanya demo)')
  // Di sini nanti kamu akan integrasi dengan payment gateway (Midtrans, dll)
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

/* * Style untuk Tampilan ANONYMOUS (v-else)
 * ----------------------------------------
 */
.info-table {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
  border: 1px solid #eee;
}

.info-table table {
  width: 100%;
  border-collapse: collapse;
}

.info-table tr:not(:last-child) {
  border-bottom: 1px solid #f0f0f0;
}

.info-table td {
  padding: 1rem 1.5rem;
}

.info-table td:first-child {
  font-weight: 600;
  background: #fdfaf6;
  width: 150px;
}

.emoney-info {
  background: #fdfaf6;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.emoney-info h3 {
  margin-top: 0;
  font-size: 1.5rem;
}

.emoney-info .note {
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
}


/* * Style untuk Tampilan LOGGED IN (v-if)
 * ----------------------------------------
 */
.form-container {
  max-width: 600px;
}

.donation-form {
  background: #0000FF;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid #eee;
}

/* Style untuk tombol radio pembayaran */
.payment-options {
  display: flex;
  gap: 1rem;
}
.radio-label {
  display: block;
  flex: 1;
}
.radio-label input[type="radio"] {
  display: none; /* Sembunyikan radio button asli */
}
.radio-button {
  display: block;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}
.radio-label input[type="radio"]:checked + .radio-button {
  border-color: #A9C47F;
  background: #fdfaf6;
  box-shadow: 0 0 5px rgba(169, 196, 127, 0.5);
}
</style>
