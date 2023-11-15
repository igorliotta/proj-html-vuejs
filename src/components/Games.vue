<script>
import { store } from '../store';

export default {
    props: {
        item: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            store: store,
        }
    }
}
</script>

<template>
    <section class="games">
        <div class="row">
            <ul class="col" v-for="gameLogo in store.gameLogos">
                <li>
                    <a href="#">
                        <img class="game-logo" :src="gameLogo" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.games {
    width: 850px;
    margin: 0 auto;
    padding: 20px 40px;
    background-color: #202046;
    margin-top: -75px;

    .row {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
    .game-logo {
        width: 100px;
        aspect-ratio: 1;
        object-fit: contain;
    }
}
</style>