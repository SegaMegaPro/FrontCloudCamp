// Импорты
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheGreetingsPage from '@/components/Greetings/TheGreetingsPage.vue'
import TheStepOnePage from '@/components/StepOne/TheStepOnePage.vue'
import TheStepTwoPage from '@/components/StepTwo/TheStepTwoPage.vue'
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
    },
    {
      path: '/greetings/step1/step2',
      components: {
        theStepTwoPage: TheStepTwoPage
      }
    }
  ]
})
// Роутер
// Модули
// noinspection JSUnusedGlobalSymbols
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
// noinspection JSUnusedGlobalSymbols
const stepOneModule = {
  state: {
    nicknameData: String(''),
    nameData: String(''),
    surnameData: String(''),
    sexData: String('')
  },
  mutations: {
    SET_NICKNAME (state : any, payload : '') {
      state.nicknameData = payload
    },
    SET_NAME (state : any, payload : '') {
      state.nameData = payload
    },
    SET_SURNAME (state : any, payload : '') {
      state.surnameData = payload
    },
    SET_SEX (state : any, payload : '') {
      state.sexData = payload
    }
  },
  actions: {
    SET_NICKNAME (context: any, payload: '') {
      context.commit('SET_NICKNAME', payload)
    },
    SET_NAME (context: any, payload: '') {
      context.commit('SET_NAME', payload)
    },
    SET_SURNAME (context: any, payload: '') {
      context.commit('SET_SURNAME', payload)
    },
    SET_SEX (context: any, payload: '') {
      context.commit('SET_SEX', payload)
    }
  },
  getters: {
    NICKNAME: (state : any) => {
      return state.nicknameData
    },
    NAME: (state : any) => {
      return state.nameData
    },
    SURNAME: (state : any) => {
      return state.surnameData
    },
    SEX: (state : any) => {
      return state.sexData
    }
  }
}
// Модули
// Хранилище
const store = createStore({
  modules: {
    greetingsModule,
    stepOneModule
  }
})
// Хранилище
const app = createApp(App)
app.component('the-greetings-page', TheGreetingsPage)
app.component('the-step-one-page', TheStepOnePage)
app.component('the-step-two-page', TheStepTwoPage)
app.use(router)
app.use(store)
app.mount('#app')
export default router
