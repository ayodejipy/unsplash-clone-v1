export interface Photo {
    id: string
    slug: string
    alternative_slugs: {
        [language: string]: string
    }
    created_at: string
    updated_at: string
    promoted_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    description: string
    alt_description: string
    breadcrumbs: Breadcrumb[]
    urls: {
        raw: string
        full: string
        regular: string
        small: string
        thumb: string
        small_s3: string
    }
    links: {
        self: string
        html: string
        download: string
        download_location: string
    }
    likes: number
    liked_by_user: boolean
    sponsorship: null
    topic_submissions: {
        [topic: string]: {
            status: string
            approved_on: string
        }
    }
    asset_type: string
    user: User
}

interface Breadcrumb {
    slug: string
    title: string
    index: number
    type: string
}

interface User {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
    last_name: string
    twitter_username: string | null
    portfolio_url: string | null
    bio: string | null
    location: string | null
    links: {
        self: string
        html: string
        photos: string
        likes: string
        portfolio: string
        following: string
        followers: string
    }
    profile_image: {
        small: string
        medium: string
        large: string
    }
    instagram_username: string | null
    total_collections: number
    total_likes: number
    total_photos: number
    total_promoted_photos: number
    total_illustrations: number
    total_promoted_illustrations: number
    accepted_tos: boolean
    for_hire: boolean
    social: {
        instagram_username: string | null
        portfolio_url: string | null
        twitter_username: string | null
        paypal_email: string | null
    }
}


export type TColumnGroups<T> = T[][]