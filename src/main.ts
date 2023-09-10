// Импорты
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheGreetingsPage from '@/components/Greetings/TheGreetingsPage.vue'
import TheStepOnePage from '@/components/StepOne/TheStepOnePage.vue'
import VueSelect from 'vue-select'
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
        theStepOnePage: TheStepOnePage
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
  actions: {
    SET_PHONE (context : any, payload: '') {
      context.commit('SET_PHONE', payload)
    },
    SET_EMAIL (context : any, payload: '') {
      context.commit('SET_EMAIL', payload)
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
app.component('the-step-one-page', TheStepOnePage)
app.use(router)
app.use(store)
app.mount('#app')
export default router
