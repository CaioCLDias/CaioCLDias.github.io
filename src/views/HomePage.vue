<template>
  <div class="home-page bg-black text-white min-h-screen flex flex-col items-center pt-20">
    <div class="text-center mt-12 flex items-center justify-center">
      <div class="text-left max-w-xl">
        <h1 class="text-5xl font-bold mb-4">Oi! Eu sou o Caio</h1>
        <p class="text-xl mb-8">{{ summary }}</p>
      </div>
      <img src="../assets/images/avatar.png" alt="Avatar" class="w-60 h-60 rounded-full ml-8">
    </div>
    <div class="text-left wmax-w-xl">
      <h2 class="text-3xl font-bold mb-4">Projetos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard v-for="(project, index) in displayedProjects" :key="index" :project="project" />
      </div>
    </div>
    <!-- Adicionando a Timeline Profissional -->
    <div class="text-left wmax-w-xl mt-16">
      <h2 class="text-3xl font-bold mb-4">Experiência Profissional</h2>
      <div v-if="latestProfessional && latestProfessional.length > 0" class="timeline">
        <div v-for="(item, index) in latestProfessional" :key="index" class="timeline-item">
          <div class="timeline-content">
            <h2 class="text-2xl font-bold">{{ item.year }}</h2>
            <h3 class="text-xl">{{ item.title }}</h3>
            <p class="text-sm text-gray-600">{{ item.company }}</p>
            <p class="text-lg">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <router-link to="/about" class="text-blue-500 hover:underline mt-4 inline-block">Ver mais</router-link>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import projectsData from '../assets/data/projects.json';
import aboutData from '../assets/data/about.json';
import professionalData from '../assets/data/professional.json';

export default {
  name: 'HomePage',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: projectsData,
      summary: aboutData.summary,
      professional: professionalData || [] // Garantir que 'professional' não seja undefined
    };
  },
  computed: {
    displayedProjects() {
      return this.projects.slice(0, 3);
    },
    latestProfessional() {
      return this.professional.slice(-3).reverse(); // Exibir as 3 últimas experiências
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

.timeline {
  position: relative;
  margin: 20px 0;
}

.timeline-item {
  position: relative;
  padding-left: 20px;
  margin-bottom: 20px;
  border-left: 2px solid #3498db;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 0;
  width: 12px;
  height: 12px;
  background-color: #3498db;
  border-radius: 50%;
}

.timeline-content {
  margin-left: 30px;
}

h2 {
  color: #3498db;
}
</style>
