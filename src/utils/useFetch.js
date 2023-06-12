import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, SetError] = useState('')

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        setIsLoading(true)
        const responce = await fetch(url)
        const data = await responce.json()
        setData(data.items)

        if (responce.status !== 200) {
          SetError('message: ' + data?.error?.message + 'code: ' + data?.error?.status)
        }
      } catch (err) {
        SetError(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchVideoData()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
