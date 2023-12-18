<script >
import { store } from '../store';
export default {
    name: 'AppHeader',
    emits: ['searchContent'],
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <form @submit.prevent="$emit('searchContent')" class="search-box">
        <label for="searchInput">Search Content</label>
        <input type="search" id="searchInput" placeholder="Search Content" v-model="store.searchKey" />
        <button type="submit" class="search-button">
            Submit
        </button>
    </form>
</template>

<style scoped lang="scss"></style>