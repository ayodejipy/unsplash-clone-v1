<script setup lang="ts">
import type { Photo } from '~/types'

interface IProps {
    photo: Photo
}

const props = defineProps<IProps>()

const fullname = computed(() => props.photo.user.first_name + " " + props.photo.user?.last_name)
</script>

<template>
    <div class="card" :aria-label="props.photo.description">
        <div class="card__photo">
            <img :src="photo.urls.regular" alt="Description">
        </div>
        <div class="card__description">
            <h3>{{fullname}}</h3>
            <p>{{props.photo.user.location || "N/A"}}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    width: 100%;
    height: auto;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: clip;

    .card__photo {
        background: #fff;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            filter: brightness(0.65);
        }
    }

    .card__description {
		color: #fff;
        padding: 16px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
}
</style>
