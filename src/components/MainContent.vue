<script>
import { store } from '../store';
import Experience from './Experience.vue';
import ExtremeFuture from './ExtremeFuture.vue';
import LiveStreaming from './LiveStreaming.vue';

export default {
    components: {
        Experience,
        ExtremeFuture,
        LiveStreaming,
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
</template>

<style lang="scss" scoped>

</style>