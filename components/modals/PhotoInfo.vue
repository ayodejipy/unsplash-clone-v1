<script setup lang="ts">
const { $unsplash } = useNuxtApp()

const search = ref<boolean>('')
const photos = ref([])
</script>

<template>
    <div class="modal">
        <button class="close__button">&times;</button>
        <img
            src="chef-image.jpg"
            alt="Chef Fredrick Apata"
            class="modal__image"
        />
        <div class="modal__content">
            <h2 class="modal__name">Fredrick Apata</h2>
            <p class="modal__location">Lagos, Nigeria</p>
        </div>
    </div>
</template>

<style scoped>
.modal {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    .modal__image {
        width: 100%;
        height: auto;
        display: block;
    }
    .modal__content {
        padding: 20px;
    }
    .modal__name {
        font-size: 24px;
        font-weight: bold;
        margin: 0 0 5px 0;
    }
    .modal__location {
        color: #666;
        margin: 0;
    }

    .close__button {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: white;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
}
</style>
