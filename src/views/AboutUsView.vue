<template>
  <div class="about-us-page">
    
    <PageHeader 
      title="Tentang Meong id"
      subtitle="Cerita di balik layar dan tim hebat yang mewujudkannya."
    />

    <section class="mission-section">
      <div class="container">
        <SectionTitle title="Misi Kami" :center="true" />
        <p class="mission-text">
          Di Meong id, kami percaya bahwa setiap kucing berhak mendapatkan cinta, 
          perawatan, dan rumah yang aman. Misi kami adalah membangun platform 
          terbesar di Indonesia yang menghubungkan para pecinta kucing, 
          mempermudah proses adopsi, dan menyediakan sumber daya untuk 
          menyelamatkan lebih banyak nyawa.
        </p>
      </div>
    </section>

    <section class="team-section">
      <div class="container">
        <SectionTitle title="Tim Kami" :center="true" />
        
        <div class="team-grid">
          
          <div class="creator-card">
            <div class="creator-image-wrapper">
              <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Foto Profil Tim 1">
            </div>
            <div class="creator-info">
              <h3>Naufal rizki rabbani</h3>
              <p class="role">Project Lead & Lead Developer</p>
              <p class="bio">
                "Penggemar kucing yang mengubah kecintaannya pada kode dan anabul 
                menjadi platform Meong id. Memimpin visi teknis dan pengembangan."
              </p>
            </div>
          </div>

          <div class="creator-card">
            <div class="creator-image-wrapper">
              <img src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Foto Profil Tim 2">
            </div>
            <div class="creator-info">
              <h3>Niha April</h3>
              <p class="role">fitur rumah sakit dan shelter serta selter</p>
              <p class="bio">
                "Dalang di balik tampilan cantik dan pengalaman pengguna yang mulus. 
                Memastikan setiap klik terasa intuitif dan menyenangkan."
              </p>
            </div>
          </div>

          <div class="creator-card">
            <div class="creator-image-wrapper">
              <img src="" alt="Foto Profil Tim 3">
            </div>
            <div class="creator-info">
              <h3>Rifa danidra</h3>
              <p class="role">fitur adopsi dan lapor kucing</p>
              <p class="bio">
                "Menjaga agar server tetap berjalan, data aman, dan semua fitur 
                bekerja dengan sihirnya di balik layar. Ahli database dan logika."
              </p>
            </div>
          </div>

          <div class="creator-card">
            <div class="creator-image-wrapper">
              <img src="https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Foto Profil Tim 4">
            </div>
            <div class="creator-info">
              <h3>Julia rahmawati </h3>
              <p class="role">Fitur Komunitas</p>
              <p class="bio">
                "Suara di balik Meong id. Menulis artikel, mengelola forum, 
                dan memastikan komunitas kita tetap hangat dan suportif."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// Tidak perlu import apa-apa!
// Komponen <PageHeader> dan <SectionTitle> 
// sudah terdaftar secara global di main.js
</script>

<style scoped>
/* Latar belakang halaman agar konsisten dengan warna krem/ivory */
.about-us-page {
  background-color: #fdfaf6;
}

.mission-section {
  padding: 2rem 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.mission-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #666;
}

.team-section {
  padding: 3rem 0;
}

/* Grid untuk 4 anggota tim */
.team-grid {
  display: grid;
  /* Desktop: 4 kolom */
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.creator-card {
  background: #fff; /* Kartu putih bersih */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.creator-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

/* Ini adalah FOTO LINGKARAN yang kamu minta */
.creator-image-wrapper {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Membuat gambar jadi lingkaran */
  overflow: hidden; /* Memotong gambar agar pas di lingkaran */
  margin: 1.5rem auto 1rem auto; /* Posisi di tengah */
  
  /* Border dengan warna primer kita */
  border: 4px solid #A9C47F; 
  
  box-shadow: 0 0 10px rgba(169, 196, 127, 0.5); /* Efek glow hijau */
}

.creator-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Memastikan gambar mengisi lingkaran tanpa gepeng */
}

/* Ini adalah KARTU INFO di bawahnya */
.creator-info {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.creator-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 0.25rem 0;
}

.creator-info .role {
  font-size: 0.9rem;
  font-weight: 600;
  color: #A9C47F; /* Aksen warna primer kita */
  margin: 0 0 0.75rem 0;
}

.creator-info .bio {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

/* === Media Queries untuk RESPONSIVE === */

/* Tablet (2 kolom) */
@media (max-width: 992px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* HP (1 kolom) */
@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  .mission-text {
    padding: 0 1rem;
  }
}

</style>
