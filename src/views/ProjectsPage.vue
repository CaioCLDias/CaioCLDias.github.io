<template>
  <div class="projects-page bg-black text-white min-h-screen flex flex-col items-center p-8">
    <div class="text-left wmax-w-xl">
      <h1 class="text-5xl font-bold mb-8">Projetos</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import projectsData from '../assets/data/projects.json';

export default {
  name: 'ProjectsPage',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: projectsData
    };
  },
  title: 'Caio Dias | Projects'
};
</script>

<style scoped>
.projects-page {
  background-color: #1a1a1a;
}

.text-left.max-w-xl {
  max-width: 40rem; /* 640px */
}
</style>
