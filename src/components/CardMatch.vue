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
    <div class="card" v-for="match in store.matchs" :key="match.id">
        <div class="row">
            <div class="col">
                <div class="match">
                    <figure class="match-img">
                        <img :src='match.firstMatchSrc' alt="">
                    </figure>
                    <div class="match-info">
                        <h4 class="c-green">{{ match.firstMatchCountry }}</h4>
                        <h3 class="c-white">{{ match.firstGameName }}</h3>
                    </div>
                </div>
            </div>
            <div class="col second-col">
                <div class="vs">
                    VS
                </div>
            </div>
            <div class="col">
                <div class="match">
                    <figure class="match-img">
                        <img class="padd" :src="match.secondMatchSrc" alt="">
                    </figure>
                    <div class="match-info">
                        <h4 class="c-green">{{ match.secondMatchCountry }}</h4>
                        <h3 class="c-white">{{ match.secondGameName }}</h3>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="game-info">
                    <h2 class="game-info-title">{{ match.title }}</h2>
                    <p class="game-info-text">{{ match.text }}</p>
                </div>
            </div>
            <div class="col second-col">
                <div class="datails-info">
                    <span class="time">{{ match.time }}</span>
                    <span class="date">{{ match.date }}</span>
                    <div class="btn-container">
                        <div class="btn">
                            <a href="#">
                                <img class="btn-img" :src="match.youtubeLogoSrc" alt="">
                            </a>
                        </div>
                        <div class="btn">
                            <a href="#">
                                <img class="btn-img" :src="match.messageSrc" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 100%;
    background-color: #202046;
    border: 1px solid #287359;
    border-radius: 5px;

    .row {
        display: flex;
        gap: 10px;

        .col {
            display: flex;
            align-items: center;
        }
    }

    .match {
        padding: 5px;
    }

    .match-img {
        background-color: #191935;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 120px;
        aspect-ratio: 1;
        padding: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .match-info {
        width: 120px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px;
        background-color: #152257;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .c-green {
        color: #287359;
        font-weight: 700;
        font-size: 8px;
        margin-bottom: 4px;
    }

    .c-white {
        color: white;
        font-size: 10px;
    }

    .col.second-col {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .vs {
        width: 80px;
        aspect-ratio: 1;
        background-color: #191935;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #219954;
        font-weight: 700;
        font-size: 22px;
    }

    .padd {
        width: 68px;
    }

    .datails-info {
        width: 110px;
        aspect-ratio: 1;
        background-color: #343286;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7px;
        color: #191935;
        font-weight: 700;
    }

    .time {
        font-size: 20px;
    }

    .date {
        font-size: 11px;
    }

    .btn-container {
        display: flex;
        gap: 5px;
    }

    .btn {
        width: 30px;
        aspect-ratio: 1;
        background-color: #191935;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-img {
        width: 10px;
    }

    .game-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        padding: 30px 20px;
        color: white;

        .game-info-text {
            font-size: 14px;
        }

        .game-info-title {
            font-size: 22px;
            font-weight: 700;
        }
    }
}

.card:first-child {
    background-color: #343286;
}

.card:first-child .datails-info {
    color: #191935;
    background-color: #05CB7C;
}

.card:first-child .datails-info .btn {
    background-color: #191935;
}

.card .datails-info .btn {
    background-color: #05CB7C;
}

.card .datails-info {
    color: white;
}

.card:first-child {
    border: 1px solid #191935;
}
</style>