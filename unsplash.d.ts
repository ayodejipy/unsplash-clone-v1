import type { Api } from 'unsplash-js'

declare module '#app' {
    interface NuxtApp {
        $unsplash: Api
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $unsplash: Api
    }
}
