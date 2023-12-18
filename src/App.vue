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
        // This method inovokes makeApiCall to make the two api calls 
        search() {
            this.makeApiCall(store.apiConfig.filmsKeyword, 'films');
            this.makeApiCall(store.apiConfig.seriesKeyword, 'series');
        },

    },
};



</script>

<template>
    <AppHeader @searchTrigger="search" />
    <ul>
        <li v-for="film in store.films">
            <p>{{ film.title }}</p>
        </li>
    </ul>
</template>

<style scoped lang="scss"></style>
