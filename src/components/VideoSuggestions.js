import useFetch from '../utils/useFetch'
import { SUGGESTED_VIDEO_LIST_API_URL } from '../utils/constants'
import SuggestedVideoCard from './SuugestedVideoCard'
import { Link } from 'react-router-dom'
import { memo  } from 'react'
// import {useEffect, useState } from 'react'

/**
 * Uncomment the commented code to get more suggesested videos based on the first frew suggested video for given videoId
 * 
 * Currently it will only show few (4 to 5 videos) suggested videos
 */

const VideoSuggestions = ({ videoId }) => {
  // const [videosData, setVidesoData] = useState([])
  const { data: suggestedVideos} = useFetch(SUGGESTED_VIDEO_LIST_API_URL + videoId)

  // useEffect(() => {
  //   const getVideosArray = async (videoData) => {
  //     try {
  //       const videoPromises = videoData.map(async (video) => {
  //         const response = await fetch(SUGGESTED_VIDEO_LIST_API_URL + video?.id?.videoId)
  //         if (response.ok) {
  //           const data = await response.json()
  //           return data.items
  //         } else {
  //           return null
  //         }
  //       })
  //       const videos = await Promise.all(videoPromises)
  //       return videos
  //     } catch (error) {
  //       return null
  //     }
  //   }

  //   if (suggestedVideos?.length > 0) {
  //     getVideosArray(suggestedVideos).then((responce) => {
  //       const data = [...suggestedVideos, ...responce.flat()]
  //       const filterData = data.map((d) => {
  //         const { etag, ...rest } = d
  //         return rest
  //       })
  //       const realdata = filterData.reduce((accumulator, current) => {
  //         if (!accumulator.find((item) => item.id.videoId === current.id.videoId)) {
  //           accumulator.push(current)
  //         }
  //         return accumulator
  //       }, [])
  //       setVidesoData([...realdata])
  //       console.log(realdata, '1111')
  //     })
  //   }
  // }, [suggestedVideos])

  return (
    <div className="w-11/12 pl-5 pt-7 child:mb-5 child:block child:w-full">
      {suggestedVideos?.map((suggestion) => {
        return (
          <Link key={suggestion?.id?.videoId} to={`/watch?v=${suggestion?.id?.videoId}`}>
            <SuggestedVideoCard key={suggestion?.id?.videoId} info={suggestion} />
          </Link>
        )
      })}
    </div>
  )
}

export default memo(VideoSuggestions)
