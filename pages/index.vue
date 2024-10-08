<script setup lang="ts">
const search = ref<string>('')
const photoStore = usePhotoStore()
const { photos } = storeToRefs(photoStore)
const { errors, loading, getRandomPhoto } = photoStore

onMounted(async () => {
    await getRandomPhoto()
})
</script>

<template>
    <section>
        <AppHeader>
            <SearchInput v-model="search" />
        </AppHeader>

        <div v-if="errors.length">Unable to load photos</div>

        <!-- Loader -->
        <div v-if="loading">
            <loader />
        </div>

        <section v-else>
            <PhotoGrid :photos />
        </section>
    </section>
</template>
