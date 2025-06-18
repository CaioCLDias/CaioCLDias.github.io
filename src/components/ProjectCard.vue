<template>
  <div class="project-card bg-gray-800 p-4 rounded-lg flex flex-col justify-between">
    <!-- Título e descrição -->
    <div>
      <h3 class="text-xl font-bold text-white mb-2">
        {{ project.name }}
      </h3>
      <p class="text-sm text-gray-400 mb-4">
        {{ project.description }}
      </p>
    </div>

    <!-- Ações -->
    <div class="flex flex-wrap items-center gap-4 mt-2">
      <!-- Link do site/demo -->
      <a
        v-if="hasUrl"
        :href="project.url"
        target="_blank"
        rel="noopener"
        class="text-blue-400 hover:underline"
      >
        Site
      </a>

      <!-- Link do repositório -->
      <a
        v-if="hasRepo"
        :href="project.repository"
        target="_blank"
        rel="noopener"
        class="text-green-400 hover:underline"
      >
        Git
      </a>

      <!-- Botão Detalhes -->
      <button
        v-if="hasDetails"
        @click="$emit('show-details', project)"
        class="text-yellow-400 hover:underline"
      >
        Detalhes
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasUrl() {
      return this.project.url && this.project.url.trim() !== '';
    },
    hasRepo() {
      return this.project.repository && this.project.repository.trim() !== '';
    },
    hasDetails() {
      return this.project.details && this.project.details.trim() !== '';
    },
  },
};
</script>

<style scoped>
.project-card {
  width: 100%;
  max-width: 300px;
}
.text-sm {
  font-size: 0.875rem;
}
</style>
