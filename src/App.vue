<template>
    <div id="app">
        <page-header></page-header>
        <p>{{ greeting }} {{place}}!</p>
        <page-footer></page-footer>
    </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';


module.exports = {
    data: function () {
        return {
            greeting: 'Hello',
            place: 'Japan'
        }
    },
    components: {
        'PageHeader': PageHeader,
        'PageFooter': PageFooter,
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