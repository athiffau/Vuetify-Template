import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import i18n from './plugins/i18n'
import router from './plugins/router'
import store from './plugins/store'
import './plugins/components'

Vue.config.productionTip = false;

new Vue({
    vuetify,
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
