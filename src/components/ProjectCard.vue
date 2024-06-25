<template>
  <div class="project-card bg-gray-800 p-4 rounded-lg flex flex-col justify-between">
    <div>
      <h3 class="text-xl font-bold text-white mb-2">{{ project.name }}</h3>
      <p class="text-sm text-gray-400 mb-4">{{ project.description }}</p>
      <p class="text-gray-400 mb-4">{{ project.year }}</p>
    </div>
    <a :href="project.url" class="text-blue-400 hover:underline self-start">Visualizar</a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.project-card {
  width: 100%;
  max-width: 300px;
  height: 100%; /* Ensure the card takes full height */
}
.text-sm {
  font-size: 0.875rem; /* Reduza o tamanho da fonte para o texto de descrição */
}
</style>
