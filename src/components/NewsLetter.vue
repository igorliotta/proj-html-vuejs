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
    <section class="newsletter">
        <div class="row">
            <div class="col col-right">
                <h3>Our news letter</h3>
            </div>
            <div class="col col-left">
                <div class="input-text-container">
                    <div class="message-input">
                        <img class="message-src" :src="store.messageSrc" alt="">
                        <input class="input-text" type="text" placeholder="Enter your Email">
                    </div>
                    <div class="btn-subscribe">Subscribe</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.newsletter {
    width: 850px;
    margin: 0 auto;
    padding: 20px 40px;
    background-color: #202046;

    .row {
        display: flex;

        .col {
            flex-basis: 50%;
        }

        .col-right {
            display: flex;
            color: white;
            align-items: center;
        }

        .col-left {
            display: flex;
            color: white;
            justify-content: flex-end;
            align-items: center;
        }

        .input-text-container {
            width: 270px;
            height: 25px;
            border-radius: 20px;
            background-color: #191935;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 5px;
            padding: 0 10px;
        }

        .input-text {
            font-size: 8px;
            border: none;
            background-color: #191935;
            color: grey;
        }

        .message-src {
            width: 8px;
        }

        .btn-subscribe {
            background-color: #04AB4D;
            font-size: 8px;
            padding: 6px;
            border-radius: 20px;
            color: #191935;
        }

        .message-input {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
}
</style>