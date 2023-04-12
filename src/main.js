import { createApp } from 'vue';
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';
import ContextMenu from '@imengyu/vue3-context-menu';
import './style.css';
import App from './App.vue';

createApp(App).use(ContextMenu).mount('#app');
// createApp(App).mount('#app');
