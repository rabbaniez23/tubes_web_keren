<template>
  <aside class="sidebar">
    <div class="logo">
      <RouterLink to="/">
        <span class="logo-icon">🐾</span>
        <span class="logo-text">Meong id</span>
      </RouterLink>
    </div>

    <nav class="sidebar-nav">
      <ul>
        <li><RouterLink to="/">Beranda</RouterLink></li>
        <li><RouterLink to="/report">Lapor Kucing</RouterLink></li>
        <li><RouterLink to="/adoption">Adopsi Kucing</RouterLink></li>
       <li><RouterLink to="/hospital-shelter">Rumah Sakit/Shelter</RouterLink></li>
        <li><RouterLink to="/articles">Artikel</RouterLink></li>
        <li><RouterLink to="/community">Komunitas</RouterLink></li>
        <li><RouterLink to="/donation">Donasi</RouterLink></li>
        <li><RouterLink to="/profile">Profile</RouterLink></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.sidebar {
  width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: #fcfcfb;
  border-right: 1px solid #eaeaea;
  padding: 1.8rem 1.5rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.logo {
  margin-bottom: 2.2rem;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2a2a2a;
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: -0.5px;
}

.logo-icon {
  font-size: 1.7rem;
  margin-right: 0.65rem;
  transition: transform 0.2s;
}

.logo-icon:hover {
  transform: scale(1.1);
}

.logo-text {
  font-weight: 800;
  background: linear-gradient(135deg, #333, #555);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.sidebar-nav a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #4a4a4a;
  font-weight: 600;
  font-size: 1.02rem;
  padding: 0.85rem 1.2rem;
  border-radius: 12px;
  transition: all 0.25s ease;
  position: relative;
}

.sidebar-nav a:hover,
.sidebar-nav a.router-link-exact-active {
  color: #fff;
  background: #A9C47F;
  box-shadow: 0 4px 10px rgba(169, 196, 127, 0.25);
}

/* Optional: tambahkan ikon di sini nanti
.sidebar-nav a::before {
  content: "•";
  margin-right: 12px;
  font-size: 1.2rem;
  opacity: 0.6;
}
*/

/* Active link lebih tegas */
.sidebar-nav a.router-link-exact-active {
  font-weight: 700;
}

</style>
