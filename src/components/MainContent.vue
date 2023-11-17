<script>
import { store } from '../store';
import Experience from './Experience.vue';
import ExtremeFuture from './ExtremeFuture.vue';
import LiveStreaming from './LiveStreaming.vue';
import UpcomingMatch from './UpcomingMatch.vue';
import TrendingGames from './TrendingGames.vue';

export default {
    components: {
        Experience,
        ExtremeFuture,
        LiveStreaming,
        UpcomingMatch,
        TrendingGames,
    },
    data() {
        return {
            store: store,
        }
    }
}
</script>

<template>
    <Experience />
    <ExtremeFuture />
    <LiveStreaming />
    <UpcomingMatch />
    <TrendingGames />
</template>

<style lang="scss" scoped>

</style>