<template>
  <div class="about-page container mx-auto p-4 max-w-3xl">
    <section v-for="(section, index) in sections" :key="index" class="mb-12">
      <h2 :class="index === 0 ? 'text-4xl font-bold mb-4' : 'text-3xl font-bold mb-4'">{{ section.title }}</h2>
      <hr v-if="index !== 0" class="my-4 border-gray-700">
      <div v-html="formatText(section.text)"></div>
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
  methods: {
    formatText(text) {
      return text.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
    }
  },
  title: 'Caio Dias | About'
}
</script>

<style scoped>
.about-page {
  text-align: left;
  max-width: 40rem;
  margin: 0 auto;
}

hr {
  border: 1px solid #4a4a4a;
}

h1 {
  font-size: 2.5rem;
  color: #ffffff;
}

h2 {
  font-size: 2rem;
  color: #e0e0e0;
}

p {
  color: #b0b0b0;
}
</style>
