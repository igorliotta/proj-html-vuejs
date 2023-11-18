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
    <section class="gammer-shop">
        <div class="container">
            <div class="row">
                <div class="col flexed">
                    <h4 class="header-small-title">Gammer Shop</h4>
                </div>
                <div class="col">
                    <div class="col-2">
                        <div class="header-title">
                            <h2>Explore Our Shop</h2>
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
                <div class="col">
                    <div class="col-3" v-for="article in store.articles" :key="article.id">
                        <div class="article-card">
                            <figure class="article-img-container">
                                <img class="article-img" :src="article.articleSrc" alt="">
                            </figure>
                        </div>
                        <div class="article-body">
                            <figure class="star-img-container">
                                <img class="star-img" :src="article.starGreenSrc" alt="" v-for="n in 2" :key="n">
                                <img class="star-img" :src="article.starWhiteSrc" alt="" v-for="n in 2" :key="n">
                            </figure>
                            <h3 class="article-name">{{ article.articleName }}</h3>
                            <div class="prize-container">
                                <span class="green-prize">{{ article.greenPrize }}</span>
                                <span class="white-price">{{ article.whitePrize }}</span>
                            </div>
                            <ul class="options">
                                <li class="option" v-for="optionIconSrc in article.optionsIconSrc">
                                    <a href="#">
                                        <img class="option-img" :src="optionIconSrc" alt="">
                                    </a>
                                </li>
                                <!-- <li class="option">
                                    <a href="#">
                                        <img class="option-img" :src="store.shopArticles[1].optionsIconSrc[1]" alt="">
                                    </a>
                                </li>
                                <li class="option">
                                    <a href="#">
                                        <img class="option-img" :src="store.shopArticles[1].optionsIconSrc[2]" alt="">
                                    </a>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.gammer-shop {
    background-image: url("../public/img/shop-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;

    .container {
        width: 850px;
        margin: 0 auto;
        padding-top: 40px;
        padding: 20px;
        z-index: 2;

        .row {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .col {
                display: flex;
                justify-content: space-between;
                flex-basis: calc(100% / 4);
                gap: 10px;
                z-index: 3;
                padding-top: 20px;
                 .col-3 {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                 }

                .col-2 {
                    flex-basis: 50%;
                    display: flex;
                }
            }
        }
    }

    .header-small-title {
        color: #287359;
        margin-left: 100px;
    }

    .header-title {
        font-size: 22px;
        color: white;
        margin-left: 30px;
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


    .article-img-container {
        width: 180px;
        background-color: #191935;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .article-img {
        width: 100px;
        aspect-ratio: 1;
        object-fit: contain;
    }
    .article-body {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .star-img-container {
            display: flex;
            gap: 2px;
            .star-img {
                width: 15px;
            }
        }

        .article-name {
            color: white;
        }

        .prize-container {
            display: flex;
            gap: 5px;
            .green-prize {
                color: #1B9C59;
            }
    
            .white-price {
                color: white;
            }
        }

       .options {
        display: flex;
        gap: 5px;
        position: absolute;
        bottom: 28%;
        left: 40%;
       }

        .option {
            width: 30px;
            aspect-ratio: 1;
            border-radius: 50%;
            background-color: #343480;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .option-img {
            width: 15px;
        }

    }
}

.gammer-shop::before {
    content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: #3A315C;
  opacity: 0.7;
  filter: brightness(0);
}

.gammer-shop .option:nth-child(2) {
    background-color: #01A94B;
}
</style>