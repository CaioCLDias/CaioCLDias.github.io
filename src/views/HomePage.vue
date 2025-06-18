<template>
  <div class="home-page bg-black text-white min-h-screen flex flex-col items-center pt-20">
    <!-- Seção de Apresentação -->
    <div class="presentation-container flex items-center justify-between max-w-5xl w-full mx-auto">
      <div class="text-left">
        <h1 class="text-5xl font-bold mb-4">Caio Dias</h1>
        <p class="text-xl mb-8">{{ summary }}</p>
      </div>
      <img src="../assets/images/avatar.png" alt="Avatar" class="w-60 h-60 rounded-full ml-8">
    </div>

    <!-- Seção de Projetos -->
    <div class="text-left max-w-5xl w-full mx-auto mt-12">
      <h2 class="text-3xl font-bold mb-4">Projetos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          v-for="(project, index) in displayedProjects"
          :key="index"
          :project="project"
          @show-details="selectedProject = project"
        />
      </div>
    </div>

    <!-- Seção de Experiência Profissional -->
    <div class="text-left max-w-5xl w-full mx-auto mt-16">
      <h2 class="text-3xl font-bold mb-4">Experiência</h2>
      <div v-if="latestProfessional.length > 0" class="timeline">
        <div v-for="(item, index) in latestProfessional" :key="index" class="timeline-item">
          <div class="timeline-content">
            <h2 class="text-2xl font-bold">{{ item.title }}</h2>
            <p class="text-lg">{{ item.company }}</p>
            <p class="text-sm text-gray-600">
              {{ item.startMonth }} {{ item.startYear }} -
              <span v-if="item.endYear">{{ item.endMonth }} {{ item.endYear }}</span>
              <span v-else>{{ item.endMonth }}</span>
            </p>
            <p class="text-lg">{{ item.summary }}</p>
          </div>
        </div>
      </div>
      <router-link to="/about" class="text-blue-500 hover:underline mt-4 inline-block">Ver mais</router-link>
    </div>

    <!-- Modal -->
    <ProjectDetailsModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import ProjectDetailsModal from '../components/ProjectDetailsModal.vue';
import projectsData from '../assets/data/projects.json';
import aboutData from '../assets/data/about.json';
import professionalData from '../assets/data/professional.json';

export default {
  name: 'HomePage',
  components: {
    ProjectCard,
    ProjectDetailsModal
  },
  data() {
    return {
      projects: projectsData,
      summary: aboutData.summary,
      professional: professionalData || [],
      selectedProject: null
    };
  },
  computed: {
    sortedProfessional() {
      return this.professional.slice().sort((a, b) => {
        const dateA = new Date(`${a.startYear}-${this.monthToNumber(a.startMonth)}`);
        const dateB = new Date(`${b.startYear}-${this.monthToNumber(b.startMonth)}`);
        return dateB - dateA;
      });
    },
    latestProfessional() {
      return this.sortedProfessional.slice(0, 3);
    },
    displayedProjects() {
      return this.projects.slice(0, 3);
    }
  },
  methods: {
    monthToNumber(month) {
      const months = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
        Presente: 12
      };
      return months[month] || 0;
    }
  },
  title: 'Caio Dias'
};
</script>

<style scoped>
.home-page {
  background-color: #1a1a1a;
}

.max-w-5xl {
  max-width: 50rem;
}

.text-left {
  margin-right: auto;
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
  margin-left: 40px;
}

h2 {
  color: #3498db;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Para dispositivos menores */
@media (max-width: 768px) {
  .presentation-container {
    flex-direction: column;
    align-items: center;
  }

  .presentation-container img {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
