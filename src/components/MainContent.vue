<script>
import { store } from '../store';
import Experience from './Experience.vue';
import ExtremeFuture from './ExtremeFuture.vue';
import LiveStreaming from './LiveStreaming.vue';
import UpcomingMatch from './UpcomingMatch.vue';
import TrendingGames from './TrendingGames.vue';
import UpcomingBattle from './UpcomingBattle.vue';
import TeamMember from './TeamMember.vue';
import Testimonials from './Testimonials.vue';

export default {
    components: {
        Experience,
        ExtremeFuture,
        LiveStreaming,
        UpcomingMatch,
        TrendingGames,
        UpcomingBattle,
        TeamMember,
        Testimonials,

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
    <UpcomingBattle :item="battle" />
    <TeamMember :item="member" />
    <Testimonials :item="testimonial" />
</template>

<style lang="scss" scoped>

</style>