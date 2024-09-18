<template>
  <div class="about-page container mx-auto p-4 max-w-3xl">
    <!-- Imagem fixa à direita -->
    <div class="image-container">
      <img src="../assets/images/avatar2.png" alt="Minha imagem" class="fixed-image">
    </div>

    <!-- Texto -->
    <div class="text-container">
      <h1 class="text-4xl font-bold mb-8">Sobre Mim</h1>
      <div v-if="text">
        <div class="text-lg justified-text" v-html="text"></div>
      </div>
      <div v-else>
        <p>Carregando informações...</p>
      </div>

      <!-- Timeline de Experiências Profissionais -->
      <h1 class="text-4xl font-bold mb-8 mt-12">Experiência</h1>
      <div v-if="professional.length > 0" class="timeline">
        <div v-for="(item, index) in professional" :key="index" class="timeline-item">
          <div class="timeline-content">
            <h2 class="text-2xl font-bold">{{ item.title }}</h2>
            <p class="text-lg">{{ item.company }}</p>
            <p class="text-sm text-gray-600">
              {{ item.startMonth }} {{ item.startYear }} - 
              <span v-if="item.endYear">{{ item.endMonth }} {{ item.endYear }}</span>
              <span v-else>{{ item.endMonth }}</span>
            </p>
            <p class="text-lg">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- Timeline de Experiências Acadêmicas -->
      <h1 class="text-4xl font-bold mb-8 mt-12">Educação</h1>
      <div v-if="academic.length > 0" class="timeline">
        <div v-for="(item, index) in academic" :key="index" class="timeline-item">
          <div class="timeline-content">
            <h2 class="text-2xl font-bold">{{ item.title }}</h2>
            <p class="text-lg">{{ item.institution }}</p>
            <p class="text-sm text-gray-600">
              {{ item.startMonth }} {{ item.startYear }} - 
              <span v-if="item.endYear">{{ item.endMonth }} {{ item.endYear }}</span>
              <span v-else>{{ item.endMonth }}</span>
            </p>
            <p class="text-lg">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutData from '../assets/data/about.json';
import professionalData from '../assets/data/professional.json';
import academicData from '../assets/data/academic.json';

export default {
  name: 'AboutPage',
  data() {
    return {
      text: aboutData.text,
      professional: professionalData,
      academic: academicData
    };
  }
}
</script>

<style scoped>
.about-page {
  max-width: 40rem;
  margin: 0 auto;
}

.text-container {
  max-width: 100%;
  margin-left: 20px;
}

.image-container {
  position: relative;
}

.fixed-image {
  position: fixed;
  top: 150px;
  right: 250px; 
  width: 400px; 
  height: auto;
  border-radius: 8px;
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

.justified-text {
  text-align: justify;
  line-height: 1.6;
}

/* Ocultar imagem em telas menores para evitar sobreposição */
@media (max-width: 768px) {
  .fixed-image {
    display: none;
  }
}
</style>
