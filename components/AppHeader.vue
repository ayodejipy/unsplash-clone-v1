<template>
    <header>
        <slot />
    </header>
</template>

<style scoped>
header {
    width: 100%;
    background: #eee;
    padding: 2.5rem 1rem;
    display: flex;
    /* justify-content: center; */

    @media (min-width: 600px) {
        padding: 4.5rem;
        /* background: red;  */
    }
}
</style>
