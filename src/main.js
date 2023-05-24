import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import Vant from 'vant'
import '../node_modules/vant/lib/index.css'
import 'amfe-flexible'

createApp(App).use(store).use(Vant).use(router).mount('#app')
