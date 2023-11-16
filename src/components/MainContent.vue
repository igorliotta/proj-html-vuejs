<script>
import { store } from '../store';
import Experience from './Experience.vue';
import ExtremeFuture from './ExtremeFuture.vue';

export default {
    components: {
        Experience,
        ExtremeFuture,
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
</template>

<style lang="scss" scoped>

</style>