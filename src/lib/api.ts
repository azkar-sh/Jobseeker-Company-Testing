import { IArticle, IVacancy } from '@/types'
import axios from 'axios'

export const fetchFeaturedArticles = async (): Promise<IArticle[]> => {
  const postsResponse = await fetch('https://blog.jobseeker.company/wp-json/wp/v2/posts?orderby=date&order=desc&per_page=3')
  const postsData = await postsResponse.json()

  const featuredMediaResponses = await Promise.all(
    postsData.map((post: any) => fetch(`https://blog.jobseeker.company/wp-json/wp/v2/media/${post.featured_media}`)),
  )
  const featuredMediaData = await Promise.all(featuredMediaResponses.map((response) => response.json()))

  const articles: IArticle[] = postsData.map((post: any, index: number) => ({
    id: post.id,
    date: post.date,
    link: post.link,
    title: post.title?.rendered || '',
    hero_url: featuredMediaData[index]?.media_details?.sizes?.medium_large?.source_url || '',
    description: post.excerpt?.rendered || '',
  }))

  return articles
}

export const postInquiry = async (payload: {
  name: string
  email: string
  phone: string
  message: string
  im_a: string
  token: string
  lang: string
}): Promise<void> => {
  return axios.post('/api/inquiry', payload)
}

export const fetchVacancyList = async ({ filter = '', city = '' }: { filter?: string; city?: string } = {}): Promise<IVacancy[]> => {
  try {
    const resp = await fetch(`/api/vacancy?filter=${filter}&city=${city}`)
    const data = await resp.json()
    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching vacancy list:', error)
    return [] // Or handle the error appropriately
  }
}
