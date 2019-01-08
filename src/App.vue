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

import Vue from 'vue';
window.Vue = Vue;

import VueGtm from 'vue-gtm';

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