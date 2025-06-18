<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-button" @click="$emit('close')">&times;</button>

      <h2 class="text-2xl font-bold mb-4 text-white">{{ project.name }}</h2>

      <p class="text-gray-300 mb-6">
        {{ project.details }}
      </p>

      <div class="flex gap-4 flex-wrap">
        <a
          v-if="hasUrl"
          :href="project.url"
          target="_blank"
          rel="noopener"
          class="text-blue-400 underline"
        >
           🌐 Acessar Projeto
        </a>

        <a
          v-if="hasRepo"
          :href="project.repository"
          target="_blank"
          rel="noopener"
          class="text-green-400 underline"
        >
          🧠 Ver Repositório
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetailsModal',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasUrl() {
      return this.project.url?.trim();
    },
    hasRepo() {
      return this.project.repository?.trim();
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-content {
  background-color: #1f2937; /* Tailwind gray-800 */
  padding: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 600px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
}
</style>
