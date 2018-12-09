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

module.exports = {
    data: function () {
        return {
        }
    },
    components: {
        'PageHeader': PageHeader,
        'PageFooter': PageFooter,
        'Posts': Posts,
    }
}
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
        color: blue;
    }
</style>