<script setup lang="ts">
const router = useRouter()

const model = defineModel({
    type: String,
})

watch(model, (val) => {
    if (val == '') return

    router.push({
        path: '/search',
        query: {
            q: val,
        },
    })
})
</script>

<template>
    <div class="search__input">
        <Icon name="i-uil-search" color="gray" />
        <input
            v-model.lazy="model"
            type="text"
            placeholder="Search for photo"
        />
    </div>
</template>

<style scoped>
.search__input {
    width: 90%;
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.65rem;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.12),
        0 1px 2px rgba(0, 0, 0, 0.24);

    background: white;
    border-radius: 4px;

    & input {
        width: 100%;
        padding: 0.25rem;
        border: transparent;

        &::placeholder {
            color: 500;
        }

        &:focus {
            outline: none;
        }
    }

    @media (min-width: 600px) {
        width: 85%;
        margin-inline: auto;
        padding: 1rem;
    }
}
</style>
