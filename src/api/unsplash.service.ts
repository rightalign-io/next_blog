import axios from 'axios'
import { NEXT_PUBLIC_UNSPLASH_CLIENT_ID } from './types'

const clientId = NEXT_PUBLIC_UNSPLASH_CLIENT_ID

const UNSPLASH_ROOT = 'https://api.unsplash.com'

export const getPhotosByQuery = async ({ query }: { query: string }) => {
  const { data } = await axios.get(
    `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}&per_page=20`
  )
  return data
}