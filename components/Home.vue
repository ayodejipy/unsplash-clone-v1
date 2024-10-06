<script setup lang="ts"></script>

<template>
    <header>
        <Form />
    </header>
    <!-- Loader -->

    <!-- Images grid -->
    <div class="images__grid grid-cols-1 md:grid-cols-3">
        <div class="masonry-item border border-red-500">1</div>
        <div class="masonry-item border border-red-500">2</div>
        <div class="masonry-item border border-red-500">3</div>
        <div class="masonry-item border border-red-500">4</div>
        <div class="masonry-item border border-red-500">5</div>
        <div class="masonry-item border border-red-500">6</div>
        <div class="masonry-item border border-red-500">7</div>
        <div class="masonry-item border border-red-500">8</div>
        <div class="masonry-item border border-red-500">9</div>
        <div class="masonry-item border border-red-500">10</div>
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

.images__grid {
    margin-top: -25px;
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
	align-items: flex-start;
    gap: 16px;

    .masonry-item {
        background-color: #f0f0f0;
        border-radius: 8px;
        padding: 16px;
        font-size: 1rem;
        line-height: 1.5;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
}
</style>
