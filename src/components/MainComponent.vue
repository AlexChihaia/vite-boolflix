<script >
import { store } from '../store';
import AppCard from './MainCard.vue';
export default {
    name: 'AppMain',

    components: {
        AppCard,
    },
    data() {
        return {
            store,
        };
    },


}

</script>

<template></template>

<style scoped lang="scss"></style>