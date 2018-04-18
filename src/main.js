import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)
firebase.initializeApp({
    apiKey: "AIzaSyAR6PzvIWz3n0z5e3yJCCwEbxT0pMK2ZI8",
    authDomain: "fir-vue-app-65e3b.firebaseapp.com",
    databaseURL: "https://fir-vue-app-65e3b.firebaseio.com",
    projectId: "fir-vue-app-65e3b",
    storageBucket: "fir-vue-app-65e3b.appspot.com",
    messagingSenderId: "821439012464",

})

Vue.config.productionTip = false

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    }
  })
  unsubscribe()
})
