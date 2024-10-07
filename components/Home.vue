<script setup lang="ts">
const search = ref<boolean>('')
const { photos } = storeToRefs(usePhotoStore())


onMounted(async () => {
    // getRandomPhoto()
})
</script>

<template>
    <header>
        <SearchInput v-model="search" />
    </header>
    <!-- Loader -->
	<section>
		<PhotoGrid />
	</section>
</template>

<style scoped>
header {
    width: 100%;
    background: #eee;
    padding: 4rem;
    display: flex;
    justify-content: center;
}
</style>
