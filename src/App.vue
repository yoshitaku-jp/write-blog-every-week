<template>
    <div id="app">
        <page-header></page-header>
        <posts></posts>        
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import Posts from './Posts.vue';

import firebase from 'firebase/app';
import 'firebase/database';

import Vue from 'vue';
window.Vue = Vue;
import VueGtm from 'vue-gtm';

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

Vue.use(VueGtm, {
    id: 'GTM-W6DPH4H', 
    enabled: true
  });


module.exports = {

    components: {
        'PageHeader': PageHeader,
        'PageFooter': PageFooter,
        'Posts': Posts,
    }
}
</script>