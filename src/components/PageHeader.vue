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
    <section class="header">
        <header class="page-header">
            <div class="row">
                <div class="col">
                    <img class="logo-img" :src="store.menuLogoSrc" alt="">
                </div>
                <div class="navbar-items">
                    <ul class="col growed" v-for="menuItem in store.menuItems" :key="menuItem.id">
                        <li class="navbar">
                            <span>{{ menuItem.name }}</span>
                            <img class="menu-icon" :src="menuItem.iconSrc" alt="">
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <div class="header-icon-row">
                        <figure class="header-icon-container">
                            <img class="header-icon" :src="store.menuSearchSrc" alt="">
                        </figure>
                        <figure class="header-icon-container">
                            <img class="header-icon" :src="store.menuCartSrc" alt="">
                        </figure>
                    </div>
                </div>
            </div>
        </header>
        <div class="introduction">
            <div class="row">
                <ul class="col first">
                    <li class="social-logo-container" v-for="socialsSrc in store.socialsSrc">
                        <img class="social-logo" :src="socialsSrc" alt="">
                    </li>
                </ul>
                <div class="col growed">
                    <h4 class="title-h4">Welcome to RaxG</h4>
                    <h1 class="title">{{ store.headerTitle }}</h1>
                    <div class="btn-container">
                        <div class="btn">
                            Read More
                            <img class="arrow-src" :src="store.arrowRightSrc" alt="">
                        </div>
                        <div class="circle">
                            <img class="play-src" :src="store.playBtnSrc" alt="">
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.header {
    background-image: url("../public/img/banner1.png");
    height: 500px;
    background-size: cover;
    background-position-x: 50%;
    background-position-y: 50%;

    .introduction {
        padding: 20px 0;
        width: 1200px;
        margin: 0 auto;

        .row {
            display: flex;

            .col {
                flex-basis: 150px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;
                padding-top: 20px;

                .social-logo {
                    width: 13px;
                }

                .social-logo-container {
                    width: 30px;
                    aspect-ratio: 1;
                    background-color: #202044;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            .col.growed {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                gap: 30px;
                padding-bottom: 50px;

                .title-h4 {
                    margin-top: -20px;
                    text-align: center;
                    text-transform: uppercase;
                    color: #287359;
                    font-weight: 700;
                }

                .title {
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: 700;
                    color: white;
                    font-size: 55px;
                }

                .btn {
                    background-color: #05CB7C;
                    font-size: 12px;
                    font-weight: 700;
                    padding: 5px 16px;
                    border-radius: 5px;
                }
                .arrow-src,
                .play-src {
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
                .btn-container {
                    display: flex;
                    gap: 5px;
                }
            }
        }
    }
}

.page-header {
    width: 850px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 5px 0;


    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .col {
            flex-basis: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .col.growed {
        display: flex;
        justify-content: center;
        gap: 20px;

        .navbar {
            color: white;
            font-size: 13px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding: 3px 10px;
        }
    }

    .logo-img {
        width: 150px;
    }

    .menu-icon {
        width: 5px;
    }

    .navbar-items {
        display: flex;
    }

    .header-icon-row {
        display: flex;
        gap: 5px;
    }

    .header-icon-container {
        width: 25px;
        aspect-ratio: 1;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-icon {
        width: 10px;
        color: black;
    }
}
</style>