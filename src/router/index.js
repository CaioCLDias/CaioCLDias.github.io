import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProjectsPage from '../views/ProjectsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/projects', component: ProjectsPage }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
