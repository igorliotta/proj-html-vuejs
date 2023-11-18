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
    <section class="lastest-news">
        <div class="container">
            <div class="row">
                <div class="col flexed">
                    <h4 class="header-small-title">Lastest News</h4>
                </div>
                <div class="col">
                    <div class="col-2">
                        <div class="header-title">
                            <h2>Stay Updated With our Lastest News Articles</h2>
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
                    <div class="news-card" v-for="lastestNew in store.lastestNews" :key="lastestNew.id">
                        <figure class="news-img-container">
                            <img class="news-img" :src="lastestNew.newSrc" alt="">
                        </figure>
                        <div class="news-card-body">
                            <h4 class="news-name">{{ lastestNew.newName }}</h4>
                            <div class="social">
                                <div class="youtube">
                                    <img class="img-logo" :src="store.youtubeLogoGreenSrc" alt="">
                                    <span class="text">By Admin | </span>
                                </div>
                                <div class="message">
                                    <img class="img-logo" :src="store.messageLogoGreenSrc" alt="">
                                    <span class="text">Oct 25, 20222</span>
                                </div>
                            </div>
                            <div class="btn-read-container">
                                <span>Read More</span>
                                <img class="arrow" :src="store.arrowRightSrc" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- <div class="news-card">
                        <figure class="news-img-container">
                            <img class="news-img" :src="store.news[0].newSrc" alt="">
                        </figure>
                        <div class="news-card-body">
                            <h4>{{ store.news[0].newName }}</h4>
                            <div>BOTTONI</div>
                            <div>READ MORE</div>
                        </div>
                    </div>
                    <div class="news-card">
                        <figure class="news-img-container">
                            <img class="news-img" :src="store.news[0].newSrc" alt="">
                        </figure>
                        <div class="news-card-body">
                            <h4>{{ store.news[0].newName }}</h4>
                            <div>BOTTONI</div>
                            <div>READ MORE</div>
                        </div>
                    </div>
                    <div class="news-card">
                        <figure class="news-img-container">
                            <img class="news-img" :src="store.news[0].newSrc" alt="">
                        </figure>
                        <div class="news-card-body">
                            <h4>{{ store.news[0].newName }}</h4>
                            <div>BOTTONI</div>
                            <div>READ MORE</div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.lastest-news {
    background-color: #191935;
    padding: 40px 20px 60px 20px;

    .container {
        width: 850px;
        margin: 0 auto;
        padding-top: 40px;
        padding: 20px;

        .row {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .col {
                gap: 10px;
                display: flex;
                padding: 10px;
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

    .col.flexed {
        display: flex;
        align-items: center;
    }
    .col.flexed {
        display: flex;
        align-items: center;
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

    .news-card {

        .news-card-body {
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
            padding: 11px;
            .news-name {
                font-weight: 700;
            }
        }
        .news-img {
            display: block;
        }
    }

    .social {
        display: flex;
        gap: 7px;
    }

    .youtube, .message {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .img-logo {
        width: 10px;
    }

    .text {
        font-size: 10px;
    }

    .btn-read-container {
        display: flex;
        gap: 10px;
        background-color: #03CD7B;
        border-radius: 2px;
        font-weight: 700;
        color: black;
        padding: 6px 15px;
        font-size: 10px;
        .arrow {
            width: 10px;
        }
    }
}
</style>