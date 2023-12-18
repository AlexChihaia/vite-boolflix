<script >
import LangToFlag from './LangToFlag.vue';

export default {
    name: 'AppCard',
    components: LangToFlag,
    props: {
        title: '',
        originalTitle: '',
        lang: '',
        vote: '',
    }
}

</script>

<template>
    <li>
        <h3><span>Title: </span> {{ title }}</h3>
        <h3><span>OriginalTitle: </span> {{ originalTitle }}</h3>
        <h3><span>Language: </span> {{ LangToFlag }}</h3>
        <h3><span>Vote: </span> {{ vote }}</h3>
    </li>
</template>

<style scoped lang="scss"></style>