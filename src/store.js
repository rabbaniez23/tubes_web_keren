import { ref } from 'vue'

// Ini adalah state management paling sederhana
// 'isLoggedIn' akan bisa diakses dari file mana saja
export const store = ref({
  isLoggedIn: false ,// Default-nya, pengguna belum login
 isSidebarOpen: true,
 user: null
})
