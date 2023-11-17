<script>
import { store } from '../store';
import CardMatch from './CardMatch.vue';

export default {
    components: {
        CardMatch,
    },
    data() {
        return {
            store: store,
        }
    }
}
</script>

<template>
    <section class="upcoming-match">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="header-match-wrapper">
                        <h4 class="c-green">Trending Battle</h4>
                        <h2 class="title-h2">Upcoming Match</h2>
                        <nav>
                            <ul class="list">
                                <a href="#">
                                    <li class="list-item c-green">
                                        All
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="list-item">
                                        Pubg
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="list-item">
                                        COD
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="list-item">
                                        AC
                                    </li>
                                </a>
                                <a href="#">
                                    <li class="list-item">
                                        MCX
                                    </li>
                                </a>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col flexed">
                    <CardMatch :item="match" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.upcoming-match {
    background-color: #191935;

    .container {
        width: 850px;
        margin: 0 auto;
        padding: 20px;

        .row {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }

    .header-match-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    .c-green {
        color: #287359;
        font-weight: 700;
    }

    .title-h2 {
        font-size: 28px;
        font-weight: 700;
        color: white;
    }

    .list {
        margin-top: 20px;
        color: white;
        display: flex;
        gap: 25px;
    }

    .col.flexed {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>