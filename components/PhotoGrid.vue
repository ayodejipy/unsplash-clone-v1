<script setup lang="ts">
import type { Photo, TColumnGroups } from '~/types'

const MAX_COLUMN = 3

const props = defineProps<{
    photos: Photo[] | undefined
}>()

const isPhotosPresent = computed(() => props.photos && props.photos.length > 0)

const getColPhotos = computed(() => {
    const list: TColumnGroups<Photo> = []

    props.photos.map((photo, index) => {
        const col = index % MAX_COLUMN
        console.log({ col })

        if (list[col]) {
            list[col].push(photo)
        } else {
            list[col] = [photo]
        }
        return {}
    })

    return list
})
</script>

<template>
    <div v-if="isPhotosPresent" class="grid__container">
        <div
		v-for="(cols, idx) in getColPhotos"
		:key="cols[idx]"
		class="grid__group"
        >
            <PhotoCard v-for="photo in cols" :key="photo.id" :photo="photo" />
        </div>
    </div>
</template>

<style scoped>
:root {
    --column-count: 3;
    --column-gap: 16px;
    --item-margin-bottom: 16px;
}

.grid__container {
    --column-gap: 16px;

    display: flex;
    gap: 35px;
    padding: var(--column-gap);
    margin: 0 auto;
    margin-top: -2.5rem;
    max-width: 1200px; /* Adjust based on your container size */

    .grid__group {
        display: flex;
        flex-direction: column;
        gap: calc(var(--column-gap) * 1.6);
    }
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
