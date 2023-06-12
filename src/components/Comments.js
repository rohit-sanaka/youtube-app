import { COMMENTS_LIST_API } from '../utils/constants'
import useFetch from '../utils/useFetch'

const Comments = ({ videoId }) => {
  const { data } = useFetch(COMMENTS_LIST_API + videoId)

  console.log(data)
  return (
    <ul className="">
      {data.map((comment) => {
        const {
          snippet: {
            totalReplyCount,
            topLevelComment: {
              id,
              snippet: { authorDisplayName, textDisplay, likeCount },
            },
          },
        } = comment
        return (
          <li key={id} className="my-3 ">
            <h1 className="py-1 text-lg font-bold">{authorDisplayName}</h1>
            <h2>{textDisplay}</h2>
            <div className="w-3/12 flex justify-around pt-1">
              <p>{'Likes : ' + likeCount}</p>
              <p>{'Replies :' + totalReplyCount}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Comments
