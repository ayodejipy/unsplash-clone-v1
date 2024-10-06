<script setup lang="ts">
const search = ref<boolean>('')
</script>

<template>
    <header>
        <SearchInput v-model="search" />
    </header>
    <!-- Loader -->

    <div class="grid__container">
        <div class="grid__group">
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
        </div>
        <div class="grid__group">
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
        </div>
        <div class="grid__group">
            <PhotoCard />
            <PhotoCard />
            <PhotoCard />
        </div>
    </div>
</template>

<style scoped>
header {
    width: 100%;
    background: #eee;
    padding: 4rem;
    display: flex;
    justify-content: center;
}

/* .grid__container {
    max-width: 100%;
    display: flex;
    justify-content: center;

    .images__grid {
        margin-top: -25px;
        display: grid;
        grid-template-columns: repeat(3, minmax(200px, 1fr));
        align-items: flex-start;
        gap: 16px;
        width: 70%;

        .masonry-item {
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 16px;
            font-size: 1rem;
            line-height: 1.5;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    }
} */

:root {
    --column-count: 3;
    --column-gap: 16px;
    --item-margin-bottom: 16px;
}

.grid__container {
    --column-gap: 16px;

    display: flex;
    gap: 16px;
    padding: var(--column-gap);
    margin: 0 auto;
    max-width: 1200px; /* Adjust based on your container size */

    .grid__group {
        display: flex;
        flex-direction: column;
        gap: var(--column-gap);
    }

    /* .grid__item {
        position: relative;
        width: 100%;
        height: auto;
        background-color: #f0f0f0;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: clip;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    .grid__item-content {
        padding: 16px;
        position: absolute;
        bottom: 0;
        left: 0;
    } */
}

@media (max-width: 900px) {
    :root {
        --column-count: 2;
    }
}

@media (max-width: 600px) {
    :root {
        --column-count: 1;
    }
}
</style>
