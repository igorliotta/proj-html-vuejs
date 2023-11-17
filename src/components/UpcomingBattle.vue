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
    <section class="upcoming-battle">
        <div class="container">
            <div class="row">
                <div class="col flexed">
                    <h4 class="header-small-title">Upcoming Match</h4>
                </div>
                <div class="col">
                    <div class="col-2">
                        <div class="header-title">
                            <h2>Keep Eyes & Manage upcoming Battle</h2>
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
                    <div class="col-3" v-for="battle in store.battles" :key="battle.id">
                        <figure class="card-img-container">
                            <img class="card-img" :src="battle.imgSrc" alt="">
                            <img class="card-img bg" :src="battle.imgSrc" alt="">
                        </figure>
                        <div class="body">
                            <h3 class="body-title">{{ battle.name }}</h3>
                            <div class="btn-container">
                                <div class="btn">
                                    <a href="#">
                                        <img class="btn-img" :src="store.youtubeLogoBlackSrc" alt="">
                                    </a>
                                </div>
                                <div class="btn">
                                    <a href="#">
                                        <img class="btn-img" :src="store.messageLogoBlackSrc" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="body-time">{{ battle.time }}</div>
                            <div class="body-date">{{ battle.date }}</div>
                        </div>
                    </div>
                    <!-- <div class="col-3"></div>
                    <div class="col-3"></div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.upcoming-battle {
    background-image: url("../public/img/v-bg.png");
    filter: saturate(60%);

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
        flex-basis: calc(100% / 3);
        border: 2px solid black;
        background-color: #202046;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .card-img-container {
        width: 250px;
        padding: 20px;
        display: flex;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        background-color: #191935;
        object-fit: cover;
        position: relative;

        .card-img {
            width: 100px;
        }

        .bg {
            width: 130px;
            opacity: 0.1;
            position: absolute;
            top: 0px;
            right: 10px;
        }
    }

    .body {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 0 10px;
    }

    .btn-container {
        display: flex;
        gap: 10px;
    }

    .btn {
        width: 25px;
        aspect-ratio: 1;
        background-color: #07AC50;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-img {
        width: 10px;
        color: #202046;
    }

    .body-time {
        font-size: 20px;
        color: white;
    }

    .body-date {
        font-size: 11px;
        color: white;
    }

    .body-title {
        font-size: 20px;
        font-weight: 700;
        color: white;
    }
}
</style>