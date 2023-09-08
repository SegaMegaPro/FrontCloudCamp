// Импорты
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheGreetingsPage from '@/components/Greetings/TheGreetingsPage.vue'
import { createStore } from 'vuex'
// Импорты
// Роутер
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
      path: '/greetings/step1',
      components: {
        theGreetingsPage: TheGreetingsPage
      }
    }]
})
// Роутер
// Модули
const greetingsModule = {
  state: {
    phoneData: String(''),
    emailData: String('')
  },
  mutations: {
    SET_PHONE (state : any, payload : '') {
      state.phoneData = payload
    },
    SET_EMAIL (state: any, payload : '') {
      state.emailData = payload
    }
  },
  getters: {
    PHONE: (state : any) => {
      return state.phoneData
    },
    EMAIL: (state : any) => {
      return state.emailData
    }
  }
}
// Модули
// Хранилище
const store = createStore({
  modules: {
    greetingsModule
  }
})
// Хранилище
const app = createApp(App)
app.component('the-greetings-page', TheGreetingsPage)
app.use(router)
app.use(store)
app.mount('#app')
export default router
