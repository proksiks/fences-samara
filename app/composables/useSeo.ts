interface ISeo {
    title?: string | null
    description?: string | null
    image?: string | null
    url?: string | null
}

export const useSeo = (data: ISeo) => {
    useSeoMeta({
        titleTemplate: `%s | RU Concern`,
        title: data.title,
        description: data.description,
        ogType: 'website',
        ogTitle: data.title,
        ogDescription: data.description,
        ogImage: data.image,
        ogUrl: data.url,
        twitterDescription: data.description,
        twitterTitle: data.title,
        twitterImage: data.image,
        twitterCard: 'summary_large_image',
    })
}
