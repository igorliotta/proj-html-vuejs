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
    <section class="testimonials position">
        <div class="container">
            <div class="row">
                <div class="col flexed">
                    <h4 class="header-small-title">Testimonials</h4>
                </div>
                <div class="col">
                    <div class="header-title">
                        <h2>What Our Client Say</h2>
                    </div>
                </div>
                <div class="col">
                    <div class="testimonial-card" v-for="testimonial in store.testimonials" :key="testimonial.id">
                        <div class="testimonial-container">
                            <img class="testimonial-img" :src="testimonial.src" alt="">
                            <div class="testimonial-hover">
                                <img class="virgolette" :src="store.virgoletteSrc" alt="">
                                <p class="text">Donec sollicitudin molestie <br> malesuada. Vestibulum ac diam <br> sit amet quam vehicula <br> elementum sed sit amet dui. <br> Cras ultricies ligula sed magna <br> dictum porta. Donec rutrum <br> congue leo eget</p>
                                <h4 class="name">Mohammad Sala</h4>
                                <span class="profession">CEO/Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-container-left">
                    <a href="#">
                        <img class="btn-left" :src="store.arrowLeftWhiteSrc" alt="">
                    </a>
                </div>
                <div class="btn-container-right">
                    <a href="#">
                        <img class="btn-right" :src="store.arrowRightWhiteSrc" alt="">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.testimonials {
    background-image: url("../public/img/test-grouptwo.png");
    background-color: #202046;
    background-size: cover;
    background-position-y: 20%;

    .container {
        width: 850px;
        margin: 0 auto;
        padding-top: 40px;
        padding: 40px;

        .row {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .col {
                gap: 10px;
                display: flex;
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

    .btn-container-right {
        width: 40px;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #06A549;
        position: absolute;
        top: 55%;
        right: 30%;
    }

    .btn-container-left {
        width: 40px;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #343283;
        position: absolute;
        top: 55%;
        left: 29%;
    }

    .btn-right,
    .btn-left {
        width: 15px;
    }
}

.testimonial-card {
    position: relative;
    .testimonial-img {
        
    }
    .testimonial-hover {
        color: white;
        display: flex;
        flex-direction: column;
        gap: 5px;
        background-color: #202046;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: none;
    
        .virgolette {
            width: 20px;
        }
    
        .text {
            font-size: 14px;
        }
    
        .name {
            color: #05CB7C;
            margin-top: 10px;
        }
    
        .profession {
            font-size: 12px;
        }
    }
}


.position {
    position: relative;
}

.testimonial-card:nth-child(2):hover,
.testimonial-card:nth-child(4):hover{
    .testimonial-hover {
        display: block;
    }
}
</style>