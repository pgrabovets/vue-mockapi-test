const BASE_URL = 'https://6793fc545eae7e5c4d90787f.mockapi.io/api'

export type ReviewType = {
  id: string
  rating: number
  comment: string
}

export const fetchReviews = (): Promise<ReviewType[]> => {
  return fetch(`${BASE_URL}/reviews`).then((res) => {
    return res.json()
  })
}
