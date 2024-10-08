<script setup lang="ts"></script>

<template>
    <div class="card">
        <div class="card__photo">
            <!-- <img alt="Description" /> -->
        </div>
        <div class="card__description">
            <h3></h3>
            <p />
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 340px;
    height: 12rem;
    position: relative;
    background-color: #f6f6f6;
    border: none;
    border-radius: 8px;
    overflow: hidden;
    animation: pulse-bg 1s infinite ease-in-out;

    .card__photo {
        background-color: #ddd;
        img {
            width: 100%;
            height: 100;
        }
    }

    .card__description {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 16px;

        h3 {
            content: ' ';
            width: 180px;
            height: 20px;
            background-color: #e7e7e7;
            border-radius: 4px;
            margin: 10px 0;
        }

        p {
            width: 40%;
            background-color: #e7e7e7;
            border-radius: 4px;
            height: 16px;
            line-height: 140%;
        }
    }

	@media (min-width: 600px) {
        padding: 4.5rem;
        /* background: red;  */
    }
}

@keyframes pulse-bg {
    0% {
        background-color: #f6f6f6;
    }
    50% {
        background-color: #e7e7e7;
    }
    100% {
        background-color: #f6f6f6;
    }
}
</style>
