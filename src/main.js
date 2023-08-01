import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createStore } from 'vuex'
import { getData } from './getData'

const store = createStore({
    state() {
        return { questions: getData() }
    },
    getters: {
        getQuestions(state) { return state.questions }
    }
})

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
