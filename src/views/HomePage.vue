<template>
  <div class="home-page bg-black text-white min-h-screen flex flex-col items-center pt-20">
    <div class="text-center mt-12 flex items-center justify-center">
      <div class="text-left max-w-xl">
        <h1 class="text-5xl font-bold mb-4">Oi! Eu sou o Caio</h1>
        <p class="text-xl mb-8">É um prazer te receber em minha página, então, sou desenvolvedor Backend com conhecimentos na linguagem PHP, Python e Node. Atualamente estou trabalhando como Tech Lead. </p>
      </div>
      <img src="../assets/images/avatar.png" alt="Avatar" class="w-60 h-60 rounded-full ml-8">
    </div>
    <div class="text-left wmax-w-xl">
      <h2 class="text-3xl font-bold mb-4">Projetos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard v-for="(project, index) in displayedProjects" :key="index" :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import projectsData from '../assets/data/projects.json';

export default {
  name: 'HomePage',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: projectsData
    };
  },
  computed: {
    displayedProjects() {
      return this.projects.slice(0, 3);
    }
  },
  title: 'Caio Dias'
};
</script>

<style scoped>
.home-page {
  background-color: #1a1a1a;
}

.text-left.max-w-xl {
  max-width: 40rem; 
}
</style>
