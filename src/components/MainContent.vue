<script>
import { store } from '../store';
import Experience from './Experience.vue';

export default {
    components: {
        Experience,
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
</template>

<style lang="scss" scoped>

</style>