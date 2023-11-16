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
    <section class="live-streaming">
        <div class="container">
            <div class="row">
                <div class="col">
                    <figure class="card-video">
                        <img class="bg-card-video" :src="store.previewVideoStreamSrc" alt="">
                    </figure>
                    <div class="up-card-video">
                        <a href="#">
                            <div class="circle">
                                <img class="play-src" :src="store.playStreamSrc" alt="">
                            </div>
                        </a>
                        <span>Call Of Deauty</span>
                    </div>
                </div>
                <div class="col col-right">
                    <span class="c-green">Live Streaming</span>
                    <div class="check-stream">
                        <h2 class="title-h2">Checkout Our Live Streaming</h2>
                        <div class="btn-container">
                            <a href="#">
                                <figure class="arrow-container arrow-left">
                                    <img class="arrow-img" :src="store.arrowLeftSrc" alt="">
                                </figure>
                            </a>
                            <a href="#">
                                <figure class="arrow-container arrow-right">
                                    <img class="arrow-img" :src="store.arrowRightSrc" alt="">
                                </figure>
                            </a>
                        </div>
                    </div>
                    <div class="streaming">
                        <div class="col-2">
                            <figure>
                                <img :src="store.previewVideoStreamSrc" alt="">
                            </figure>
                            <div class="c-white">
                                <h4 class="stream-title">Call Of Deauty</h4>
                                <p class="stream-text">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                </p>
                            </div>
                        </div>
                        <div class="col-2">
                            <figure>
                                <img :src="store.stream2Src" alt="">
                            </figure>
                            <div class="c-white">
                                <h4 class="stream-title">Assaaain creed</h4>
                                <p class="stream-text">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.live-streaming {
    background-image: url("../public/img/v-bg.png");
    object-fit: cover;
    background-position-y: 20%;
    padding: 100px 0;

    .container {
        width: 850px;
        margin: 0 auto;
        padding: 20px;

        .row {
            display: flex;
            gap: 10px;

            .col {
                flex-basis: 50%;
                position: relative;
            }
        }
    }

    .bg-card-video {
        opacity: 0.8;
        z-index: 888;
    }

    .play-src {
        width: 10px;
    }

    .circle {
        width: 45px;
        aspect-ratio: 1;
        background-color: #05CB7C;
        font-size: 12px;
        font-weight: 700;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .up-card-video {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: white;
        font-weight: 700;
        font-size: 13px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .c-green {
        color: #287359;
        font-weight: 700;
    }

    .title-h2 {
        font-size: 28px;
        font-weight: 700;
        color: white;
    }

    .arrow-img {
        width: 10px;
    }

    .arrow-container {
        width: 30px;
        aspect-ratio: 1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
    }

    .arrow-left {
        background-color: white;
    }

    .arrow-right {
        background-color: #05CB7C;
    }

    .btn-container {
        display: flex;
        gap: 10px;
    }

    .check-stream {
        display: flex;
        align-items: flex-end;
        padding-right: 40px;
    }

    .col.col-right {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
    }

    .streaming {
        display: flex;
        gap: 10px;
        padding-right: 40px;
    }

    .col-2 {
        flex-basis: 50%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .c-white {
        color: white;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .stream-text {
        font-size: 11px;
    }

    .stream-title {
        font-weight: 700;
        font-size: 15px;
    }

}
</style>