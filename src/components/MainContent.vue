<script>
import { store } from '../store';
import Experience from './Experience.vue';
import ExtremeFuture from './ExtremeFuture.vue';
import LiveStreaming from './LiveStreaming.vue';
import UpcomingMatch from './UpcomingMatch.vue'

export default {
    components: {
        Experience,
        ExtremeFuture,
        LiveStreaming,
        UpcomingMatch,
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
</template>

<style lang="scss" scoped>

</style>