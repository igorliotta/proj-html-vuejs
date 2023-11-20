<script>
import { store } from '../store';
import Games from './Games.vue';

export default {
    components: {
        Games,
    },
    props: {
        item: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            store: store,
            // open: false,
        }
    },
//  methods: {
//     showModal(offcanvas) {
//       console.log('show modal')
//       this.open = !this.open;
      
//     },
    // closeModal() {
    //   console.log('close modal')
    //   this.open = false
    // }
//   }
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
                    <ul class="col growed">
                        <li class="navbar" v-for="menuItem in store.menuItems" :key="menuItem.id">
                            <div class="name-icon">
                                <span class="name">{{ menuItem.name }}</span>
                                <img class="menu-icon" :src="menuItem.iconSrc" alt="" >
                            </div>
                            <div class="offcanvas">
                                <h4>About Us</h4>
                                <div class="separator"></div>
                                <h4>Matches</h4>
                                <div class="separator"></div>
                                <h4>Team ooo</h4>
                                <div class="separator"></div>
                                <h4>Squad</h4>
                                <div class="separator"></div>
                                <h4>Squad Details</h4>
                                <div class="separator"></div>
                                <h4>Coming Soon</h4>
                                <div class="separator"></div>
                                <h4>404</h4>
                            </div>
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
                            <div class="number-cart">0</div>
                        </figure>
                    </div>
                </div>
            </div>
        </header>
        <div class="introduction">
            <div class="row">
                <ul class="col first">
                    <li class="social-logo-container" v-for="socialsSrc in store.socialsSrc">
                        <a href="#">
                            <img class="social-logo" :src="socialsSrc" alt="">
                        </a>
                    </li>
                </ul>
                <div class="col growed">
                    <h4 class="title-h4">Welcome to RaxG</h4>
                    <h1 class="title">{{ store.headerTitle }}</h1>
                    <div class="btn-container">
                        <div class="btn">
                            <a href="#">
                                Read More
                                <img class="arrow-src" :src="store.arrowRightSrc" alt="">
                            </a>
                        </div>
                        <div class="circle">
                            <img class="play-src" :src="store.playBtnSrc" alt="">
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
        <div class="game">
            <Games />
        </div>

    </section>
    <!-- <Games /> -->
</template>

<style lang="scss" scoped>
.header {
    background-image: url("../public/img/banner1.png");
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

    .game {
        display: flex;
        justify-content: center;
        margin-bottom: -70px;
    }
}

.page-header {
    width: 850px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 20px 0;


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
            font-size: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            padding: 3px 10px;

            .name {
                text-transform: uppercase;
            }

            .name-icon {
                display: flex;
                gap: 5px;
            }

            .offcanvas {
                display: none;
            }

          
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
        position: relative;
    }

    .header-icon {
        width: 10px;
        color: black;
    }

    .number-cart {
        width: 20px;
        aspect-ratio: 1;
        background-color: #4350FB;
        color: white;
        font-size: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        top: -10px;
        right: -8px;
    }

}

.header .introduction .row .col .social-logo-container:nth-child(1):hover,
.header .introduction .row .col .social-logo-container:nth-child(2):hover {
    background-color: #05CB7C;
}

.page-header .col.growed .navbar:nth-child(2) .off-canvas {
    display: block;
    background-color: #202046;
    color: #3B7D65;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    position: absolute;
    top: 60px;
    font-size: 15px;
}
.page-header .col.growed .navbar:nth-child(2) .name-icon {
   position: relative;
}

.separator {
    height: 1px;
    background-color: #3B7D65;
}

.page-header .col.growed .navbar:nth-child(1) .name-icon,
.page-header .col.growed .navbar:nth-child(1) .menu-icon{
    color: #3B7D65;
}
</style>