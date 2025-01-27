import type { Photo } from '~/types'

export const usePhotoStore = defineStore('photos', () => {
    const { randomPhotos, searchPhotos } = usePhotos()

    const photos = ref<Photo[]>([])
    const search = ref<Photo[]>([])
    const photo = ref<Photo | null>(null)
    const errors = ref<[]>([])
    const loading = ref<boolean>(false)

    const getRandomPhoto = async () => {
        loading.value = true
        try {
            const result = await randomPhotos()

            if (result.type == 'error') {
                errors.value = result.errors
            }

            if (result.type == 'success') {
                photos.value = result.response
            }
        } catch (error) {
            console.error('Error fetching photos:', error)
        } finally {
            loading.value = false
        }
    }

    const searchPhoto = async (query: string) => {
        loading.value = true
        try {
            const result = await searchPhotos(query)

            if (result.type == 'error') {
                errors.value = result.errors
            }

            if (result.type == 'success') {
                search.value = result.response.results
            }
        } catch (error) {
            console.error('Error fetching photos:', error)
        } finally {
            loading.value = false
        }
    }

    const getPhotoById = (id: string) => {
        const found = photos.value.find((photo) => photo.id === id)
        if (!found) return (photo.value = null)

        return (photo.value = found)
    }

    return {
        loading,
        errors,
        photos,
        search,
        searchPhoto,
        photo,
        getRandomPhoto,
        getPhotoById,
    }
})
