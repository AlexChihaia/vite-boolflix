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

<template>
    <div class="container">
        <h2>Movies</h2>
        <ul>
            <AppCard v-for="film in store.films" :title="film.title" :originalTitle="film.original_title"
                :lang="film.original_language" :vote="film.vote_average" />
        </ul>
        <h2>TV Series</h2>
        <ul>
            <AppCard v-for="series in store.series" :title="series.name" :originalTitle="series.original_name"
                :lang="series.original_language" :vote="series.vote_average" />
        </ul>
    </div>
</template>

<style scoped lang="scss"></style>