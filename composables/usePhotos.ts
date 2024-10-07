import type { Photo } from '~/types'

export default function usePhotos() {
    const { $unsplash } = useNuxtApp()

    // const error = ref(null)
    // const loading = ref<boolean>(false)

    const randomPhotos = async () => {
        const result = await $unsplash.photos.getRandom({
            query: 'african',
            count: 8,
        })

        return result
	}
	
    const searchPhotos = async (query: string) => {
        const result = await $unsplash.search.getPhotos({
            query,
            page: 1,
            perPage: 7,
        })

        return result
    }

    return { randomPhotos, searchPhotos }
}
