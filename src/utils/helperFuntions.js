import moment from 'moment'

export const getPublishedDuration = (publishedAt) => {
  const today = new Date()
  const publishedDate = new Date(publishedAt)

  let timeInMilliseconds = today.getTime() - publishedDate.getTime()

  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  const month = day * 30
  const year = day * 365

  const years = Math.floor(timeInMilliseconds / year)
  timeInMilliseconds = timeInMilliseconds % year
  const months = Math.floor(timeInMilliseconds / year)
  timeInMilliseconds = timeInMilliseconds % month
  const weeks = Math.floor(timeInMilliseconds / year)
  timeInMilliseconds = timeInMilliseconds % week
  const days = Math.floor(timeInMilliseconds / day)
  timeInMilliseconds = timeInMilliseconds % day
  const hours = Math.floor(timeInMilliseconds / hour)
  timeInMilliseconds = timeInMilliseconds % hour
  const minutes = Math.floor(timeInMilliseconds / minute)

  if (years > 0 && years) {
    if (years === 1) {
      return `${years} year ago`
    } else {
      return `${years} years ago`
    }
  }
  if (months > 0 && months) {
    if (months === 1) {
      return `${months} month ago`
    } else {
      return `${months} months ago`
    }
  }
  if (weeks > 0 && weeks) {
    if (weeks === 1) {
      return `${weeks} week ago`
    } else {
      return `${weeks} weeks ago`
    }
  }
  if (days > 0 && days) {
    if (days === 1) {
      return `${days} day ago`
    } else {
      return `${days} days ago`
    }
  }
  if (hours > 0 && hours) {
    if (hours === 1) {
      return `${hours} hour ago`
    } else {
      return `${hours} hours ago`
    }
  }
  if (minutes > 0 && minutes) {
    if (minutes === 1) {
      return `${minutes} minute ago`
    } else {
      return `${minutes} minutes ago`
    }
  }
}

export const getCountFormated = (viewsCount) => {
  const views = Number(viewsCount)

  if (views >= 1000000000000) {
    return `${Math.round((views / 1000000000000) * 100) / 100}T`
  }
  if (views >= 1000000000) {
    return `${Math.round((views / 1000000000) * 100) / 100}B`
  }
  if (views >= 1000000) {
    return `${Math.round((views / 1000000) * 100) / 100}M`
  }
  if (views >= 1000) {
    return `${Math.round((views / 1000) * 100) / 100}K`
  } else {
    return `${Math.round((views / 100) * 100) / 100}`
  }
}

function convertDurationToTime(duration) {
  const durationMoment = moment.duration(duration)
  const hours = durationMoment.hours()
  const minutes = durationMoment.minutes()
  const seconds = durationMoment.seconds()
  if (hours > 0) {
    return moment({ hour: hours, minute: minutes, second: seconds }).format('HH:mm:ss')
  }
  if (minutes > 0) {
    return moment({ minute: minutes, second: seconds }).format('mm:ss')
  }
}

export const filterVideoInfo = (info) => {
  if (!info) {
    return info
  }
  const { contentDetails, snippet, statistics } = info
  const { duration } = contentDetails
  const {
    channelTitle,
    publishedAt,
    channelId,
    description,
    localized: { title },
    thumbnails: {
      medium: { url },
    },
  } = snippet
  const { viewCount, likeCount, commentCount } = statistics

  const videoDuration = convertDurationToTime(duration)
  const elapsedTime = getPublishedDuration(publishedAt)
  const views = getCountFormated(viewCount)
  const likes = getCountFormated(likeCount)
  const comments = getCountFormated(commentCount)

  return { channelTitle, title, channelId, description, elapsedTime, url, videoDuration, views, likes, comments }
}

export const filterChannelInfo = (info) => {
  if (!info) {
    return info
  }
  const { snippet, statistics } = info
  const {
    thumbnails: {
      medium: { url },
    },
  } = snippet

  const { subscriberCount } = statistics

  const subscribers = getCountFormated(subscriberCount)

  return { url, subscribers }
}

export const linkDecorator = (decoratedHref, decoratedText, key) => (
  <a
    href={decoratedHref}
    className=" hover:text-blue-800 text-blue-400"
    key={key}
    target="_blank"
    rel="noopener noreferrer"
  >
    {decoratedText}
  </a>
)
