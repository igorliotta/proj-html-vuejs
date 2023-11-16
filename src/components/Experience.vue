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
    <section class="experience">
        <div class="container">
            <div class="row">
                <div class="col col-right">
                        <div class="border-top"></div>
                        <div class="border-left"></div>
                        <div class="border-right"></div>
                        <div class="border-botton"></div>
                        <img class="img" :src="store.expirienceImg" alt="">
                        <img class="shape" :src="store.exprienceShapeImg" alt="">
                </div>
                <div class="col col-left">
                    <span class="c-green">12 Years Experience</span>
                    <h2 class="title-h2">We Are The Best Gaming Company</h2>
                    <p class="text">Nulla quis lorem ut libero malesuada feugiat. Vivamus magna jucto,lacinia eget consecterum sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi praesent sapien massa lingula sed magna dirictum porta.</p>
                    <p class="text">Nulla quis lorem ut libero malesuada feugiant. Vivamus magna jucto, lacinia eget consecterum sed, convallis at tellus. Cras ultricies ligulaa.</p>
                    <ul class="list">
                        <li class="list-item">
                            <figure class="arrow-container">
                                <img class="arrow-ok" :src="store.okSrc" alt="">
                            </figure>
                            <p>Sed porttitor lectus nibh. Proin eget tortor risus.</p>
                        </li>
                        <li class="list-item" v-for="n in 3" :key="n">
                            <figure class="arrow-container">
                                <img class="arrow-ok" :src="store.okSrc" alt="">
                            </figure>
                            <p>Praesent sapien massa, convallis a pellentesque nec. risus.</p>
                        </li>
                    </ul>
                    <div class="btn-container">
                        <a href="#">
                            <div class="btn-discover">
                                Discover more
                                <img class="arrow-src" :src="store.arrowRightSrc" alt="">
                            </div>
                        </a>
                        <a href="#">
                            <div class="circle">
                                <img class="play-src" :src="store.playBtnSrc" alt="">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.experience {
    background-color: #191935;

    .container {
        width: 850px;
        margin: 0 auto;
        padding-top: 130px;
        padding-bottom: 20px;

        .row {
            display: flex;

        }

        .col {
            flex-basis: 50%;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .col.col-right {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        }

        .col.col-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 20px;
            color: white;
        }
    }

    .border-top {
        width: 230px;
        height: 28px;
        background-color: #00A849;
        position: absolute;
        top: 63px;
        left: 60px;

    }

    .border-left {
        height: 210px;
        width: 28px;
        background-color: #00A849;
        position: absolute;
        top: 63px;
        left: 35px;
    }

    .border-right {
        height: 170px;
        width: 20px;
        background-color: #00A849;
        position: absolute;
        bottom: 73px;
        right: 38px;
    }

    .border-botton {
        width: 170px;
        height: 18px;
        background-color: #00A849;
        position: absolute;
        bottom: 58px;
        right: 38px;
    }

    .img {
        width: 300px;
        margin-top: 15px;
    }

    .shape {
        width: 70px;
        position: absolute;
        top: 83px;
        left: -15px;
    }

    .list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 15px;
    }

    .list-item {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .arrow-container {
        width: 20px;
        aspect-ratio: 1;
        border: 1px solid #00A849;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .arrow-ok {
        width: 10px;
    }

    .btn-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .btn-discover{
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: #05CB7C;
        color: #191935;
        font-weight: 700;
        font-size: 10px;
        padding: 7px 12px;
        border-radius: 5px;
    }

    .play-src,
    .arrow-src {
        width: 10px;
    }

    .circle {
        width: 25px;
        aspect-ratio: 1;
        background-color: #05CB7C;
        font-size: 12px;
        font-weight: 700;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .c-green {
        color: #287359;
        font-weight: 700;
    }

    .title-h2 {
        font-size: 35px;
        font-weight: 700;
    }

    .text {
        font-size: 14px;
    }

    
}
</style>