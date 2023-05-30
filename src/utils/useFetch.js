import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchVideoData = async () => {
      const responce = await fetch(url)
      const data = await responce.json()

      setData(data.items)
    }

    fetchVideoData()
  }, [url])

  return data
}

export default useFetch
