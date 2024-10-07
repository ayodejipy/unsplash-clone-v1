import { createApi } from "unsplash-js"

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()

	const unsplash = createApi({
        accessKey: config.public.unsplashKey,
        // Optional: You can also pass `fetch` if using server-side rendering.
        // fetch: typeof window !== 'undefined' ? fetch : undefined,
    })

    // Provide the Unsplash API instance globally in your Nuxt app
    nuxtApp.provide('unsplash', unsplash)
})