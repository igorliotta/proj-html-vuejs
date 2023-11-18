<script>
import { store } from '../store';
import NewsLetter from './NewsLetter.vue';

export default {
    components: {
        NewsLetter,
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
        }
    }
}
</script>

<template>
    <section class="footer">
        <footer class="page-footer">
            <NewsLetter class="newsletter"/>
            <div class="container">
                <div class="row">
                    <div class="col start">
                        <img class="logo-img-footer" :src="store.menuLogoSrc" alt="">
                    </div>
                    <div class="col end">
                        <ul v-for="menuItem in store.menuItems" :key="menuItem.id">
                            <li class="navbar">
                                <a href="#">{{ menuItem.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col start">
                        <p class="footer-text">Copyright &copy; RaxG | Designed by <span class="c-green">NewGenerationDev</span></p>
                    </div>
                    <div class="col end">
                        <ul class="col first">
                            <li class="social-logo-container" v-for="socialsSrc in store.socialsSrc">
                                <a href="#">
                                    <img class="social-logo" :src="socialsSrc" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </section>
    <!-- <NewsLetter class="newsletter"/> -->
</template>

<style lang="scss" scoped>
.footer {
    background-image: url("../public/img/banner1.png");
    background-size: cover;
    background-position-x: 50%;
    background-position-y: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.page-footer {
    width: 850px;
    margin: 0 auto;

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .col {
        flex-basis: 50%;
        color: white;
        display: flex;
    }

    .col.start {
        justify-content: flex-start;
    }

    .col.end {
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
        text-transform: uppercase;
        font-size: 10px;
    }

    .logo-img-footer {
        width: 150px;
    }

    .row::after {
        content: '';
        width: 100%;
        height: 1px;
        margin-top: 20px;
        background-color: gray;
    }

    .footer-text {
        font-size: 14px;
    }

    .c-green {
        color: #287359;
    }

    .col.first {
        justify-content: flex-end;
        gap: 10px;
    }

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

    .container {
        margin-top: 20px;
    }
}

.newsletter {
    margin-top: -30px;
}

</style>