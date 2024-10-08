<template>
    <div class="grid__container">
        <div class="grid__group">
            <PhotoCardSkeleton />
            <PhotoCardSkeleton />
        </div>
        <div class="grid__group">
            <PhotoCardSkeleton />
            <PhotoCardSkeleton />
        </div>
        <div class="grid__group">
            <PhotoCardSkeleton />
            <PhotoCardSkeleton />
        </div>
        <!-- <PhotoCardSkeleton />
        <PhotoCardSkeleton />
        <PhotoCardSkeleton />
        <PhotoCardSkeleton />
        <PhotoCardSkeleton />
        <PhotoCardSkeleton />
        <PhotoCardSkeleton /> -->
    </div>
</template>

<style scoped>
.grid__container {
    /* --column-gap: 32px; */

    /* display: grid;
	grid-template-columns: auto auto auto;
	grid-auto-flow: dense; */
    /* gap: 32px; */

    .grid__group {
        --column-gap: 32px;

        @media (min-width: 600px) {
            &:nth-child(1) {
                .card {
                    &:nth-child(odd) {
                        /* border: green solid; */
                        height: 18rem;
                    }
                    &:nth-child(even) {
                        /* border: purple solid; */
                        height: 25rem;
                    }
                }
            }
            &:nth-child(2) {
                .card {
                    &:nth-child(n + 1) {
                        /* border: red solid; */
                        height: 25rem;
                    }
                }
            }
            &:nth-child(3) {
                .card {
                    &:nth-child(odd) {
                        /* border: green solid; */
                        height: 22rem;
                    }
                    &:nth-child(even) {
                        /* border: green solid; */
                        height: 25rem;
                    }
                }
            }
        }
    }
}
</style>
