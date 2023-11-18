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
    <section class="members position">
        <div class="container">
            <div class="row">
                <div class="col flexed">
                    <h4 class="header-small-title">Team Members</h4>
                </div>
                <div class="col">
                    <div class="col-2">
                        <div class="header-title">
                            <h2>Our Expert Team Members</h2>
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
                    <div class="member-card" v-for="member in store.members" :key="member.id">
                        <figure>
                            <img class="member-img" :src="member.memberSrc" alt="">
                        </figure>
                        <div class="body">
                            <div class="member-info">
                                <h4 class="member-fullname">{{ member.fullname }}</h4>
                                <p class="member-profession">{{ member.profession }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social">
                    <ul class="list-icon">
                        <li class="social-logo-container" v-for="socialsSrc in store.socialsSrc">
                            <a href="#">
                                <img class="social-logo" :src="socialsSrc" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.members {
    background-color: #191935;

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

    .member-card {
        display: flex;
        flex-direction: column;
    }

    .body {
        background-color: #152257;
        color: white;
    }

    .member-img {
        display: block;
    }

    .member-info {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2px;
    }

    .member-fullname {
        font-size: 13px;
        font-weight: 700;
    }

    .member-profession {
        font-size: 12px;
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

    .list-icon {
        display: flex;
        gap: 8px;
        position: absolute;
        top: 73%;
        left: 40%;
    }
    .social-logo {
        width: 11px;
    }

    .social-logo-container {
        width: 25px;
        aspect-ratio: 1;
        background-color: #333284;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.members .member-card:nth-child(2) .member-info {
    background-color: #05CB7C;
    color: #191935;
}

.position {
    position: relative;
}
</style>