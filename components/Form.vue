<script setup lang="ts"></script>

<template>
    <div class="search__input">
        <Icon name="i-uil-search" color="gray" />
        <input type="text" value="" placeholder="Search for photo" />
    </div>
</template>

<style scoped>
.search__input {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
	padding: 1rem;

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
