<script setup lang="ts">
const model = defineModel({
    type: String,
})
</script>

<template>
    <div class="search__input">
        <Icon name="i-uil-search" color="gray" />
        <input type="text" v-model="model" placeholder="Search for photo" />
    </div>
</template>

<style scoped>
.search__input {
    width: 85%;
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
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
}
</style>
