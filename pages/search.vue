<script setup lang="ts">
const route = useRoute()

const query = computed<string>(() => route.query.q as string)

const photoStore = usePhotoStore()
const { search } = storeToRefs(photoStore)
const { errors, loading, searchPhoto } = photoStore

onMounted(async () => {
    await searchPhoto(query)
})
</script>

<template>
    <section>
        <AppHeader>
            {{  loading ? `Searching for "${query}"` : `Search Result for "${query}"` }}
			<!-- <SearchInput v-model="search" /> -->
        </AppHeader>
		
        <div v-if="errors.length">Unable to load photos</div>
		
        <!-- Loader -->
        <div v-if="loading">Loading...</div>

        <section v-else>
            <PhotoGrid :photos />
        </section>

    </section>
</template>
