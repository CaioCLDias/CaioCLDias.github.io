<template>
  <div class="about-page container mx-auto p-4 max-w-3xl">
    <section v-for="(section, index) in sections" :key="index" class="mb-12">
      <h2 :class="index === 0 ? 'text-4xl font-bold mb-4' : 'text-3xl font-bold mb-4'">{{ section.title }}</h2>
      <hr v-if="index !== 0" class="my-4 border-gray-700">
      <p class="text-lg">{{ section.text }}</p>
    </section>
  </div>
</template>

<script>
import aboutSections from '../assets/data/aboutSections.json';

export default {
  name: 'AboutPage',
  data() {
    return {
      sections: aboutSections
    };
  },
  title: 'Caio Dias | About'
}
</script>

<style scoped>
.about-page {
  text-align: left; /* Alinha o texto à esquerda */
  max-width: 40rem; /* Estreita a largura máxima do conteúdo */
  margin: 0 auto; /* Centraliza o conteúdo horizontalmente */
}

hr {
  border: 1px solid #4a4a4a;
}

h1 {
  font-size: 2.5rem; /* Maior que os outros títulos */
  color: #ffffff; /* Cor branca para o título principal */
}

h2 {
  font-size: 2rem;
  color: #e0e0e0; /* Cor ligeiramente mais clara para os subtítulos */
}

p {
  color: #b0b0b0; /* Texto ligeiramente mais claro */
}
</style>
