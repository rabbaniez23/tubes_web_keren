import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdoptionView from "../views/AdoptionView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import CommunityView from "../views/CommunityView.vue";
import DonationView from "../views/DonationView.vue";
import FosterView from "../views/FosterView.vue";
import ReportView from "../views/ReportView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import ProfilView from "../views/ProfilView.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import AboutUsView from "../views/AboutUsView.vue";



const routes = [
  { path: "/", component: HomeView },
  { path: "/adoption", component: AdoptionView },
  { path: "/articles", component: ArticlesView },
  { path: "/community", component: CommunityView },
  { path: "/donation", component: DonationView },
  { path: "/foster", component: FosterView },
  { path: "/report", component: ReportView },
  { path: "/signup", component: SignupView },
  { path: "/login", component: LoginView },
  { path: "/profile", component: ProfilView },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/about-us", component: AboutUsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
