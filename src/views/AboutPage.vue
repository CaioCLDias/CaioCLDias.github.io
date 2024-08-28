<template>
  <div class="about-page container mx-auto p-4 max-w-3xl">
    <h1 class="text-4xl font-bold mb-8">Sobre Mim</h1>
    <div v-if="text">
      <p class="text-lg">{{ text }}</p>
    </div>
    <div v-else>
      <p>Carregando informações...</p>
    </div>
    <!-- Timeline de Experiências Profissionais e Acadêmicas -->
    <h1 class="text-4xl font-bold mb-8 mt-12">Minha Trajetória Profissional</h1>
    <div v-if="professional.length > 0" class="timeline">
      <div v-for="(item, index) in professional" :key="index" class="timeline-item">
        <div class="timeline-content">
          <h2 class="text-2xl font-bold">{{ item.year }}</h2>
          <h3 class="text-xl">{{ item.title }}</h3>
          <p class="text-sm text-gray-600">{{ item.company }}</p>
          <p class="text-lg">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <h1 class="text-4xl font-bold mb-8">Minha Trajetória Acadêmica</h1>
    <div v-if="academic.length > 0" class="timeline">
      <div v-for="(item, index) in academic" :key="index" class="timeline-item">
        <div class="timeline-content">
          <h2 class="text-2xl font-bold">{{ item.year }}</h2>
          <h3 class="text-xl">{{ item.title }}</h3>
          <p class="text-sm text-gray-600">{{ item.institution }}</p>
          <p class="text-lg">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Carregando informações...</p>
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
      text: aboutData.text, // Importando o texto completo diretamente do JSON
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
