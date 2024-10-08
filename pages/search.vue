<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const query = computed<string>(() => route.query.q as string)

const photoStore = usePhotoStore()
const { search } = storeToRefs(photoStore)
const { errors, loading, searchPhoto } = photoStore

const getHeadingContent = computed(
    () => (loading ? 'Searching for' : 'Search Results for')
    // return text + ' ' + h('span', { class: 'search__query' }, query.value)
)

// const goBack = () => router.back();

onMounted(async () => {
    await searchPhoto(query.value)
})
</script>

<template>
    <section>
        <AppHeader>
            <div class="heading__block">
                <h1>
                    {{ getHeadingContent }}
                    <span class="search__query">"{{ query }}"</span>
                </h1>

                <button type="button" @click="router.back">
                    <Icon name="i-uil-arrow-left" color="gray" />
                    Back to homepage
                </button>
            </div>
        </AppHeader>

        <div v-if="errors.length">Unable to load photos</div>

        <!-- Loader -->
        <div v-if="loading"><loader /></div>

        <section v-else>
            <PhotoGrid :photos="search" />
        </section>
    </section>
</template>

<style lang="css" scoped>
.heading__block {
    width: 100%;
    /* margin-left: auto; */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    h1 {
        font-size: 2rem;
        color: #243753;
        /* font-weight: 500; */

        span {
            color: #6a7895;
        }
    }

    button {
        border: none;
        color: #424e66;
    }

    @media (min-width: 600px) {
        flex-direction: flex-row;
        width: 90%;
        margin-left: auto;

        h1 {
            font-size: 2.5rem;
        }
    }
}
</style>
