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
                    <div class="col-3">
                        <figure class="card-img-container">
                            <img class="card-img" :src="store.upcomingCard1Src" alt="">
                            <img class="card-img bg" :src="store.upcomingCard1Src" alt="">
                        </figure>
                        <div class="body">
                            <h3>Ninja Warrior Gaming</h3>
                            <div class="button">
                                Youtube e message
                            </div>
                            <div>Time</div>
                            <div>Date</div>
                            <div class="Button">View More</div>

                        </div>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.upcoming-battle {
    background-image: url("../public/img/v-bg.png");
    filter: saturate(60%);
    height: 500px;

    .container {
        width: 850px;
        margin: 0 auto;
        border: 2px solid green;
        padding-top: 40px;
        padding: 20px;

        .row {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .col {
                border: 2px solid blue;
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
    }
}
</style>