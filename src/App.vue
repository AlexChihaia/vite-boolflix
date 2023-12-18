<script >
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/HeaderComponent.vue';
import AppMain from './components/MainComponent.vue';
export default {
    name: 'App',

    components: {
        AppHeader,
        AppMain,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        makeApiCall(keyword, contentArray) {
            axios.get(`${store.apiConfig.apiURL}${keyword}`, {
                params: {
                    api_key: store.apiConfig.apiKey,
                    query: store.searchKey,
                }
            }).then((response) => {
                store[contentArray] = response.data.results;
            }).catch((error) => {
                console.error(`Error fetching ${contentArray}:`, error);
            });
        },
        // This method invokes the two calls
        search() {
            this.makeApiCall(store.apiConfig.filmsKeyword, 'films');
            this.makeApiCall(store.apiConfig.seriesKeyword, 'series');
        },

    },
};



</script>

<template>
    <font-awesome-icon icon="fa-solid fa-star" />
    <font-awesome-icon icon="fa-regular fa-star" />
    <AppHeader @searchContent="search" />
    <AppMain />
</template>

<style scoped lang="scss"></style>
