import { reactive } from 'vue';

export const store = reactive({
    searchKey: '',
    films: [],
    series: [],
    apiConfig: {
        apiURL: 'https://api.themoviedb.org/3/search/',
        filmsKeyword: 'movie',
        seriesKeyword: 'tv',
        apiKey: '424226f7adfa0cdd4b92d3b3ed79f1b6',
        imgURL: 'https://image.tmdb.org/t/p/w342',
    }
});


// https://api.themoviedb.org/3/search/movie?api_key=424226f7adfa0cdd4b92d3b3ed79f1b6&query=ritorno+al+futuro