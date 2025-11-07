<template>
  <main>
    <section class="page-header">
      <div class="container">
        <h1>Rumah Sakit & Shelter Kucing</h1>
        <p>Temukan tempat terbaik untuk merawat dan menyelamatkan kucing kesayanganmu di seluruh Indonesia.</p>
      </div>
    </section>

    <section class="adoption-section">
      <div class="container">
        <!-- Filter -->
        <div class="adoption-filters">
          <input v-model="searchQuery" type="text" class="filter-select" placeholder="Cari nama, lokasi, atau layanan">
          <select v-model="selectedType" class="filter-select">
            <option>Semua Jenis</option>
            <option>Rumah Sakit</option>
            <option>Shelter</option>
          </select>
          <select v-model="selectedCity" class="filter-select">
            <option>Semua Kota</option>
            <option v-for="city in cities" :key="city">{{ city }}</option>
          </select>
        </div>

        <!-- Kartu -->
        <div class="adoption-grid">
          <div v-for="place in filteredPlaces" :key="place.name" class="pet-card">
            <img :src="place.image" :alt="place.name">
            <div class="pet-info">
              <h3>{{ place.name }}</h3>
              <p class="pet-breed">{{ place.address }}</p>
              <p class="pet-description">{{ place.description }}</p>

              <div class="pet-buttons">
                <a :href="'tel:' + place.phone" class="btn btn-primary btn-full">Hubungi</a>
               <a 
                    :href="place.map" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn btn-secondary btn-full"
                  >
                    Lihat di Google Maps
                  </a>

              </div>

              <p class="lihat-detail" @click="openDetail(place)">Lihat detail →</p>
            </div>
          </div>
        </div>

        <!-- Modal Detail -->
        <div v-if="selectedPlace" class="modal-overlay" @click.self="selectedPlace = null">
          <div class="modal-content">
            <button class="close-btn" @click="selectedPlace = null">✕</button>

            <img :src="selectedPlace.image" :alt="selectedPlace.name" class="modal-image" />

            <div class="modal-details">
              <h2>{{ selectedPlace.name }}</h2>
              <p><strong>Jenis:</strong> {{ selectedPlace.type }}</p>
              <p><strong>Alamat:</strong> {{ selectedPlace.address }}</p>
              <p>{{ selectedPlace.description }}</p>
              <p><strong>Telepon:</strong> <a :href="'tel:' + selectedPlace.phone">{{ selectedPlace.phone }}</a></p>
              <p><strong>Email:</strong> <a :href="'mailto:' + selectedPlace.email">{{ selectedPlace.email }}</a></p>
              <p><strong>Instagram:</strong> <a :href="selectedPlace.instagram" target="_blank">{{ selectedPlace.instagram }}</a></p>

              <div class="modal-buttons">
                <a :href="'tel:' + selectedPlace.phone" class="btn btn-primary">Hubungi</a>
              <a 
  :href="selectedPlace.map" 
  target="_blank" 
  rel="noopener noreferrer" 
  class="btn btn-secondary"
>
  Lihat di Google Maps
</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const selectedType = ref("Semua Jenis");
const selectedCity = ref("Semua Kota");
const selectedPlace = ref(null);

const cities = [
  "Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Semarang",
  "Medan", "Denpasar", "Makassar", "Bogor"
];

const places = [
  {
    name: "Rumah Sakit Hewan Jakarta",
    type: "Rumah Sakit",
    city: "Jakarta",
    address: "Jl. Harsono RM No.28, Ragunan, Jakarta Selatan",
    description: "Layanan medis hewan lengkap dengan fasilitas operasi, vaksinasi, dan rawat inap 24 jam.",
    phone: "+62217891913",
    email: "info@rshjakarta.id",
    instagram: "https://instagram.com/rshjakarta",
    image: "/rs1.jpg",
    map: "https://www.google.com/maps/place/Rumah+Sakit+Hewan+Jakarta/@-6.300805,106.820116,17z"
  },
  {
    name: "Cat Shelter Bandung",
    type: "Shelter",
    city: "Bandung",
    address: "Jl. Cihampelas No.08, Bandung",
    description: "Shelter penyelamatan kucing terlantar dengan fasilitas vaksinasi dan program adopsi.",
    phone: "+6281234567890",
    email: "catshelterbdg@gmail.com",
    instagram: "https://instagram.com/catshelterbandung",
    image: "/shelter1.jpg",
    map: "https://maps.app.goo.gl/abc"
  },
  {
    name: "Rumah Sakit Hewan Surabaya",
    type: "Rumah Sakit",
    city: "Surabaya",
    address: "Jl. Raya Jemursari No.234, Surabaya",
    description: "Melayani konsultasi, bedah, vaksinasi, dan perawatan gigi hewan peliharaan.",
    phone: "+62318455412",
    email: "rshsurabaya@gmail.com",
    instagram: "https://instagram.com/rshsurabaya",
    image: "/rs2.jpg",
    map: "https://maps.app.goo.gl/bcd"
  },
  {
    name: "Yogyakarta Cat Rescue",
    type: "Shelter",
    city: "Yogyakarta",
    address: "Jl. Kaliurang KM 7, Sleman, Yogyakarta",
    description: "Menampung dan merawat kucing tanpa rumah, menyediakan adopsi gratis dengan syarat tertentu.",
    phone: "+6281312233445",
    email: "yogyacatrescue@gmail.com",
    instagram: "https://instagram.com/yogyacatrescue",
    image: "/shelter2.jpg",
    map: "https://maps.app.goo.gl/cde"
  },
  {
    name: "Rumah Sakit Hewan Semarang",
    type: "Rumah Sakit",
    city: "Semarang",
    address: "Jl. Sukun Raya No.12, Banyumanik, Semarang",
    description: "Fasilitas modern untuk pemeriksaan hewan peliharaan, rawat inap, dan konsultasi dokter hewan.",
    phone: "+62247483921",
    email: "info@rshsemarang.id",
    instagram: "https://instagram.com/rshsemarang",
    image: "/rs3.jpg",
    map: "https://maps.app.goo.gl/efg"
  },
  {
    name: "Bali Animal Shelter",
    type: "Shelter",
    city: "Denpasar",
    address: "Jl. Gatot Subroto Barat No. 99, Denpasar, Bali",
    description: "Shelter penyelamatan dan rehabilitasi hewan jalanan di Bali yang siap diadopsi.",
    phone: "+6287881122233",
    email: "balishelter@gmail.com",
    instagram: "https://instagram.com/balishelter",
    image: "/shelter3.jpg",
    map: "https://maps.app.goo.gl/hij"
  },
  {
    name: "Rumah Sakit Hewan Medan",
    type: "Rumah Sakit",
    city: "Medan",
    address: "Jl. Gatot Subroto No.45, Medan Petisah, Medan",
    description: "Menawarkan layanan medis hewan, bedah, dan vaksinasi lengkap dengan dokter berpengalaman.",
    phone: "+62618333122",
    email: "rshmedan@gmail.com",
    instagram: "https://instagram.com/rshmedan",
    image: "/rs4.jpg",
    map: "https://maps.app.goo.gl/jkl"
  },
  {
    name: "Bogor Cat Rescue",
    type: "Shelter",
    city: "Bogor",
    address: "Jl. Pajajaran No.22, Bogor Tengah, Bogor",
    description: "Shelter kucing yang berfokus pada penyelamatan dan program sterilisasi untuk populasi jalanan.",
    phone: "+6285678899123",
    email: "bogorcatrescue@gmail.com",
    instagram: "https://instagram.com/bogorcatrescue",
    image: "/shelter4.jpg",
    map: "https://maps.app.goo.gl/mno"
  },
  {
    name: "Makassar Pet Care",
    type: "Rumah Sakit",
    city: "Makassar",
    address: "Jl. Perintis Kemerdekaan No.88, Makassar",
    description: "Pelayanan hewan dengan fasilitas modern dan dokter berpengalaman di bidang bedah dan penyakit dalam.",
    phone: "+62411567890",
    email: "petcaremakassar@gmail.com",
    instagram: "https://instagram.com/petcaremakassar",
    image: "/rs5.jpg",
    map: "https://maps.app.goo.gl/pqr"
  }
];

const filteredPlaces = computed(() => {
  return places.filter((place) => {
    const matchType = selectedType.value === "Semua Jenis" || place.type === selectedType.value;
    const matchCity = selectedCity.value === "Semua Kota" || place.city === selectedCity.value;
    const matchSearch =
      place.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      place.address.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchType && matchCity && matchSearch;
  });
});

const openDetail = (place) => {
  selectedPlace.value = place;
};
</script>

<style scoped>
.page-header {
  text-align: center;
  background: #f8f7f3;
  padding: 4rem 1rem 3rem;
  border-bottom: 1px solid #e5e5e5;
}

.page-header h1 {
  color: var(--dark-green);
  font-size: 2.5rem;
  font-weight: 700;
}

.filter-select {
  padding: 0.75rem 1.2rem;
  border: 2px solid var(--soft-green);
  border-radius: 10px;
  background-color: white;
  color: var(--dark-green);
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  min-width: 180px;
}

.filter-select:hover,
.filter-select:focus {
  background-color: var(--light-cream);
  outline: none;
}

.pet-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}

.lihat-detail {
  text-align: right;
  color: var(--dark-green);
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  font-size: 0.95rem;
}

.lihat-detail:hover {
  color: var(--soft-green);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem 1rem;
}

.modal-content {
  background: #ffffff;
  border-radius: 20px;
  max-width: 520px;
  width: 100%;
  text-align: left;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.modal-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.modal-details h2 {
  color: var(--dark-green);
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.modal-details p {
  color: #444;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.modal-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1.3rem;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>


