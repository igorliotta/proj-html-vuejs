<script>
import { store } from '../store';

export default {
    data() {
        return {
            store: store,
        }
    }
}
</script>

<template>
    <section class="extreme-future">
        <div class="container">
            <div class="row">
                <div class="col col-left">
                    <span class="c-green">Our Extreme Feature</span>
                    <h2 class="title-h2">The Best Gaming Area On The World!</h2>
                    <p class="text">Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget
                        consectetur sed, at tellus. Cras ultricies ligula sed magna ivamus magna justo, dictum porta. sapien
                        massa, convallis.</p>
                </div>
                <div class="col col-right">
                    <div class="col-2 bg-green">
                        <figure class="banner-container">
                            <img class="live-img" :src="store.featureLiveSrc" alt="">
                        </figure>
                        <h4 class="title-banner">Live Streaming</h4>
                        <p class="text-banner">Nulla porttitor accumsan tincidunt. Pellentesque in.</p>
                    </div>
                    <div class="col-2 bg-violet">
                        <figure class="banner-container">
                            <img class="live-img" :src="store.featureMonitorSrc" alt="">
                        </figure>
                        <h4 class="title-banner">Gaming News</h4>
                        <p class="text-banner">Nulla porttitor accumsan tincidunt. Pellentesque in.</p>
                    </div>
                    <div class="col-2 bg-violet">
                        <figure class="banner-container">
                            <img class="live-img" :src="store.featureJoypadSrc" alt="">
                        </figure>
                        <h4 class="title-banner">Great Tornament</h4>
                        <p class="text-banner">Nulla porttitor accumsan tincidunt. Pellentesque in.</p>
                    </div>
                    <div class="col-2 bg-green">
                        <figure class="banner-container">
                            <img class="live-img" :src="store.featureAwardsSrc" alt="">
                        </figure>
                        <h4 class="title-banner">Awward Ceremony</h4>
                        <p class="text-banner">Nulla porttitor accumsan tincidunt. Pellentesque in.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.extreme-future {
    background-color: #1A1943;
    background-image: url("../public/img/Vector.png");
    object-fit: cover;
    background-position-y: 20%;
    padding: 100px 0;

    .container {
        width: 850px;
        margin: 0 auto;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .col {
        flex-basis: calc(50% - 10px);
        padding-top: 20px;
    }

    .col.col-left {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .col.col-right {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .col-2 {
        flex-basis: 40%;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 20px;
    }

    .c-green {
        color: #287359;
        font-weight: 700;
    }

    .title-h2 {
        font-size: 37px;
        color: white;
        font-weight: 700;
    }

    .text {
        color: white;
        font-size: 13px;
    }

    .bg-green {
        background-color: #05CB7C;
        color: #211F46;
    }

    .bg-violet {
        background-color: #343286;
        color: white;
    }

    .banner-container {
        width: 55px;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: #211F46;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
    }

    .live-img {
        width: 30px;
    }

    .title-banner {

        font-size: 13px;
        font-weight: 700;
    }

    .text-banner {
        font-size: 9px;

        text-align: center;
    }

}
</style>