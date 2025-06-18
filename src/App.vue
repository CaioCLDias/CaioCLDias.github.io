<template>
  <div id="app" class="font-sans bg-black text-white min-h-screen flex flex-col">
    <header class="fixed top-0 w-full z-50 bg-[#1a1a1a] border-b border-gray-700">
      <nav class="flex justify-center space-x-4 p-4">
        <router-link to="/" class="nav-button" :class="{ 'bg-blue-600': $route.name === 'HomePage' }">Home</router-link>
        <router-link to="/about" class="nav-button"
          :class="{ 'bg-blue-600': $route.name === 'AboutPage' }">Sobre</router-link>
        <router-link to="/projects" class="nav-button"
          :class="{ 'bg-blue-600': $route.name === 'ProjectsPage' }">Projetos</router-link>
      </nav>
    </header>

    <main class="container mx-auto flex-grow p-4 mt-20">
      <router-view />
    </main>

    <footer class="text-center p-4 mt-8">
      <div class="flex justify-center space-x-4 mb-4">
        <a href="https://www.linkedin.com/in/caio-cesar-lorenzon-dias/" target="_blank" rel="noopener noreferrer">
          <img src="./assets/icons/linkedin.svg" alt="LinkedIn" class="w-6 h-6">
        </a>
        <a href="https://github.com/CaioCLDias" target="_blank" rel="noopener noreferrer">
          <img src="./assets/icons/github.svg" alt="GitHub" class="w-6 h-6">
        </a>
      </div>
      <p>&copy; 2024 CCLDIAS</p>
    </footer>
  </div>
</template>


<script>
export default {
  name: 'App',
  title: 'Caio Dias'
};
</script>

<style>
@import 'tailwindcss/tailwind.css';

#app {
  background-color: #1a1a1a;
  color: white;
}

.nav-button {
  background-color: transparent;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
