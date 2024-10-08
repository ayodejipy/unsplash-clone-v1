<script setup lang="ts">
defineProps<{
    open: boolean
    onClose: () => void
    id: string
}>()

const size = '600px'

const { photo } = storeToRefs(usePhotoStore())
</script>

<template>
    <div v-if="open" class="modal__wrapper" @click="onClose">
        <div class="close__button">
            <button class="button" @click="onClose">&times;</button>
        </div>
        <div class="modal">
            <div v-if="photo">
                <div class="modal__image">
                    <img
                        :src="photo.urls.regular"
                        :alt="photo.alt_description"
                    />
                </div>
                <div class="modal__content">
                    <h2 class="modal__name">
                        {{
                            photo.user.first_name + ' ' + photo.user?.last_name
                        }}
                    </h2>
                    <p class="modal__location">
                        {{ photo.user.location || 'N/A' }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal__wrapper {
    --top-pos: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);

    .modal {
        position: absolute;
        top: var(--top-pos);
        transform: translateX(0%);
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        width: 95%;
        max-width: 100%;
        margin: 0 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);

        .modal__image {
            position: relative;
            width: 100%;
            height: 25rem;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-position: top center;
                object-fit: cover;
            }
        }
        .modal__content {
            padding: 20px;

            .modal__name {
                font-size: 24px;
                font-weight: bold;
            }
            .modal__location {
                color: #6d7fa5;
                font-weight: 500;
                margin: 0;
            }
        }
    }

    .close__button {
        align-self: flex-start;
        z-index: 2;
        width: 80%;

        & button {
            position: fixed;
            top: calc(var(--top-pos) / 2);
            right: 0;
            color: #dae1f0;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
        }

        @media (min-width: 600px) {
            & button {
                top: 2.5%;
                right: 12%;
            }
        }
    }

    @media (min-width: 600px) {
        .modal {
            top: 5.5%;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            max-width: 80%;

            .modal__image {
                height: 40rem;
            }
        }
    }
}
</style>
