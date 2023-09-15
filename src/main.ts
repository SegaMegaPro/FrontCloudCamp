// Импорты
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheGreetingsPage from '@/components/Greetings/TheGreetingsPage.vue'
import TheStepOnePage from '@/components/StepOne/TheStepOnePage.vue'
import TheStepTwoPage from '@/components/StepTwo/TheStepTwoPage.vue'
import TheStepThreePage from '@/components/StepThree/TheStepThreePage.vue'
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
    },
    {
      path: '/greetings/step1/step2/step3',
      components: {
        theStepThreePage: TheStepThreePage
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
    SET_PHONE (state : any, payload : string) {
      state.phoneData = payload
    },
    SET_EMAIL (state: any, payload : string) {
      state.emailData = payload
    }
  },
  actions: {
    SET_PHONE (context : any, payload: string) {
      context.commit('SET_PHONE', payload)
    },
    SET_EMAIL (context : any, payload: string) {
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
    SET_NICKNAME (state : any, payload : string) {
      state.nicknameData = payload
    },
    SET_NAME (state : any, payload : string) {
      state.nameData = payload
    },
    SET_SURNAME (state : any, payload : string) {
      state.surnameData = payload
    },
    SET_SEX (state : any, payload : string) {
      state.sexData = payload
    }
  },
  actions: {
    SET_NICKNAME (context: any, payload: string) {
      context.commit('SET_NICKNAME', payload)
    },
    SET_NAME (context: any, payload: string) {
      context.commit('SET_NAME', payload)
    },
    SET_SURNAME (context: any, payload: string) {
      context.commit('SET_SURNAME', payload)
    },
    SET_SEX (context: any, payload: string) {
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
const stepTwoModule = {
  state: {
    necessaryAdvantageData: String(''),
    addedAdvantagesData: Array,
    checkBoxesData: Array,
    radioButtonData: String('')
  },
  mutations: {
    SET_NECESSARY_ADV_DATA (state : any, payload : string) {
      state.necessaryAdvantageData = payload
    },
    SET_ADDED_ADV_DATA (state : any, payload : Array<string>) {
      state.addedAdvantagesData = payload
    },
    SET_CHECK_BOXES_DATA (state : any, payload : Array<string>) {
      state.checkBoxesData = payload
    },
    SET_RADIO_BUTTON_DATA (state : any, payload : string) {
      state.radioButtonData = payload
    }
  },
  actions: {
    SET_NECESSARY_ADV_DATA (context : any, payload : string) {
      context.commit('SET_NECESSARY_ADV_DATA', payload)
    },
    SET_ADDED_ADV_DATA (context : any, payload : Array<string>) {
      context.commit('SET_ADDED_ADV_DATA', payload)
    },
    SET_CHECK_BOXES_DATA (context : any, payload : Array<string>) {
      context.commit('SET_CHECK_BOXES_DATA', payload)
    },
    SET_RADIO_BUTTON_DATA (context: any, payload: string) {
      context.commit('SET_RADIO_BUTTON_DATA', payload)
    }
  },
  getters: {
    NECESSARY_ADV: (state : any) => {
      return state.necessaryAdvantageData
    },
    ADDED_ADV_DATA: (state : any) => {
      return state.addedAdvantagesData
    },
    CHECK_BOXES_DATA: (state : any) => {
      return state.checkBoxesData
    },
    RADIO_BUTTON_DATA: (state : any) => {
      return state.radioButtonData
    }
  }
}
// Модули
// Хранилище
const store = createStore({
  modules: {
    greetingsModule,
    stepOneModule,
    stepTwoModule
  }
})
// Хранилище
const app = createApp(App)
app.component('the-greetings-page', TheGreetingsPage)
app.component('the-step-one-page', TheStepOnePage)
app.component('the-step-two-page', TheStepTwoPage)
app.component('the-step-three-page', TheStepThreePage)
app.use(router)
app.use(store)
app.mount('#app')
export default router
