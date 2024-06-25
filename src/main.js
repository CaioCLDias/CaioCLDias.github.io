import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

const app = createApp(App);

app.mixin({
    beforeMount() {
      const title = this.$options.title;
      if (title) {
        document.title = title;
      }
    }
  });
  
  app.use(router);
  app.mount('#app');