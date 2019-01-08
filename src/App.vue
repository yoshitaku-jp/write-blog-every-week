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

import VueGtm from 'vue-gtm';

Vue.use(VueGtm, {
    id: 'GTM-W6DPH4H', // Your GTM ID
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  });


module.exports = {

    components: {
        'PageHeader': PageHeader,
        'PageFooter': PageFooter,
        'Posts': Posts,
    }
}
</script>