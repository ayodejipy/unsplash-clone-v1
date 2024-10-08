<script setup lang="ts">
import type { Photo, TColumnGroups } from '~/types'

const { modal, payload, onCloseModal } = usePhotoModal()

const id = computed(() => payload.value as string)

const MAX_COLUMN = 3

const props = defineProps<{
    photos: Photo[]
}>()

const isPhotosPresent = computed(() => props.photos && props.photos.length > 0)

const getColPhotos = computed(() => {
    const list: TColumnGroups<Photo> = []

    props.photos.map((photo, index) => {
        const col = index % MAX_COLUMN

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
        <div v-for="(cols, idx) in getColPhotos" :key="idx" class="grid__group">
            <PhotoCard v-for="photo in cols" :key="photo.id" :photo="photo" />
        </div>
    </div>

    <ModalsPhotoInfo
        :id
        :open="modal == 'photo-info'"
        :on-close="onCloseModal"
    />
</template>

<style>
:root {
    --column-count: 3;
    --column-gap: 16px;
}

.grid__container {
    --column-gap: 16px;

    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: var(--column-gap);
    margin: 0 auto;
    margin-top: -2rem;
    max-width: 90%;

    .grid__group {
        display: flex;
        flex-direction: column;
        gap: var(--column-gap);
    }

    @media (min-width: 600px) {
        /* background: green; */
        flex-wrap: nowrap;
        gap: 35px;
        padding: var(--column-gap);
        margin: 0 auto;
        margin-top: -2.75rem;
        max-width: 1200px;

        .grid-group {
            gap: calc(var(--column-gap) * 1.6);
        }
    }
}

@media (max-width: 900px) {
    :root {
        --column-count: 2;
    }
}

@media (min-width: 600px) {
    :root {
        --column-count: 1;
    }
}
</style>
