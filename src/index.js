import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: process.env.NODE_API_KEY,
    authDomain: process.env.NODE_AUTH_DOMAIN,
    databaseURL: process.env.NODE_DATABASE_URL,
    projectId: process.env.NODE_PROJECT_ID,
    storageBucket: process.env.NODE_STORAGE_BUCKET,
    messagingSenderId: process.env.NODE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

new Vue({
    el: '#app',
    render:h => h(App)
});