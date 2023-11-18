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
    <section class="trending-games">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h4 class="header-small-title">Trending Games</h4>
                </div>
                <div class="col">
                    <div class="col-2">
                        <div class="header-title">
                            <h2>Choose Who Is The Best In The Word!</h2>
                        </div>
                    </div>
                    <div class="col-2 flexed">
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
                </div>
                <div class="col flexed-2">
                    <div class="col-3">
                        <figure>
                            <img :src="store.assassinSrc" alt="">
                        </figure>
                        <div class="body">
                            <div class="game-info">
                                <h4 class="game-name">Assassin's Creed</h4>
                                <p class="game-text">Donec sollecitudin malesuada.</p>
                            </div>
                            <div class="circle">
                                <a href="#">
                                    <img class="play-src" :src="store.playBtnSrc" alt="">
                                </a>
                            </div>
                        </div>
                        <div>
                            <span class="banner">New</span>
                        </div>
                    </div>
                    <div class="col-3">
                        <figure>
                            <img :src="store.soldierSrc" alt="">
                        </figure>
                        <div class="body c-green">
                            <div class="game-info">
                                <h4 class="game-name">Call Of Deauty</h4>
                                <p class="game-text">Donec sollecitudin malesuada.</p>
                            </div>
                            <div class="circle bg-dark">
                                <a href="#">
                                    <img class="play-src" :src="store.playGreenSrc" alt="">
                                </a>
                            </div>
                        </div>
                        <div>
                            <span class="banner">New</span>
                        </div>
                    </div>
                    <div class="col-3">
                        <figure>
                            <img :src="store.archerSrc" alt="">
                        </figure>
                        <div class="body">
                            <div class="game-info">
                                <h4 class="game-name">Tomb Rider</h4>
                                <p class="game-text">Donec sollecitudin malesuada.</p>
                            </div>
                            <div class="circle">
                                <a href="#">
                                    <img class="play-src" :src="store.playBtnSrc" alt="">
                                </a>
                            </div>
                        </div>
                        <div>
                            <span class="banner">New</span>
                        </div>
                    </div>
                    <div class="col-3">
                        <figure>
                            <img :src="store.ninjaSrc" alt="">
                        </figure>
                        <div class="body">
                            <div class="game-info">
                                <h4 class="game-name">Mortal Combat X</h4>
                                <p class="game-text">Donec sollecitudin malesuada.</p>
                            </div>
                            <div class="circle">
                                <a href="#">
                                    <img class="play-src" :src="store.playBtnSrc" alt="">
                                </a>
                            </div>
                        </div>
                        <div>
                            <span class="banner">New</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.trending-games {
    background-color: #202046;
    background-image: url("../public/img/Vector2.png");
    background-size: cover;
    background-position-y: 10%;
    padding: 20px 0;

    .container {
        width: 850px;
        margin: 0 auto;
        padding: 20px;

        .row {
            display: flex;
            flex-direction: column;

            .col {
                display: flex;
                gap: 10px;

                .col-2 {
                    flex-basis: 50%;
                    display: flex;
                }
            }
        }
    }

    .header-small-title {
        color: #287359;
    }

    .header-title {
        font-size: 22px;
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

    .col .flexed {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .flexed-2 {
        padding: 10px;
        display: flex;
    }

    .col-3 {
        flex-basis: calc(100% / 4);
        background-color: #152257;
        position: relative;
    }

    .game-info {
        color: white;
        background-color: #152257;
        padding: 6px 4px;

        .game-name {
            font-size: 12px;
            font-weight: 700;
        }

        .game-text {
            padding-top: 2px;
            font-size: 10px;
        }
    }
    .circle {
        width: 25px;
        aspect-ratio: 1;
        background-color: #05CB7C;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .play-src {
        width: 8px;
    }

    .body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 3px;
    }

    .banner {
        font-size: 11px;
        color: #152257;
        background-color: #05CB7D;
        padding: 2px 6px;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.trending-games .col-3 .body.c-green {
    background-color: #05CB7C;
}

.trending-games .col-3 .body.c-green .game-info {
    background-color: #05CB7C;
}

.trending-games .col-3 .body .circle.bg-dark {
    background-color: #152257;
}

.trending-games .col-3:nth-child(1) .body:hover {
    background-color: #05CB7C;
    .game-info {
        background-color: #05CB7C;
    }
}
.trending-games .col-3:nth-child(1) .body .circle:hover {
    background-color: #202046;
}
</style>