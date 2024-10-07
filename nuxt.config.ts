// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            unsplashKey: process.env.NUXT_PUBLIC_UNSPLASH_KEY,
        },
    },
    devtools: { enabled: true },
    modules: [
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxt/ui',
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/icon',
    ],
    // eslint: {
    //   lintOnStart: false,
    // },
})