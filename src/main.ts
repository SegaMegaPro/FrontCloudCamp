import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheGreetingsPage from '@/components/Greetings/TheGreetingsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/greetings',
      components: {
        theGreetingsPage: TheGreetingsPage
      }
    },
    {
      path: '/step1',
      components: {
        theContentWrapper: TheGreetingsPage
      }
    }]
})
const app = createApp(App)
app.component('the-greetings-page', TheGreetingsPage)
app.use(router)
app.mount('#app')
