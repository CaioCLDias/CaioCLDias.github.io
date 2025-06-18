<template>
  <div class="projects-page bg-black text-white min-h-screen flex flex-col items-center p-8">
    <div class="text-left wmax-w-xl">
      <h1 class="text-5xl font-bold mb-8">Projetos</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard v-for="(project, index) in projects" :key="index" :project="project"
          @show-details="selectedProject = $event" />
      </div>
    </div>
    <!-- Modal -->
    <ProjectDetailsModal v-if="selectedProject" :project="selectedProject" @close="selectedProject = null" />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import projectsData from '../assets/data/projects.json';
import ProjectDetailsModal from '../components/ProjectDetailsModal.vue';


export default {
  name: 'ProjectsPage',
  components: {
    ProjectCard,
    ProjectDetailsModal
  },
  data() {
    return {
      projects: projectsData,
      selectedProject: null
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
  max-width: 40rem;
  /* 640px */
}
</style>
