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

export const getViewsFormated = (viewsCount) => {
  const views = Number(viewsCount)

  if (views >= 1000000000000) {
    return `${Math.round(views / 1000000000000, 2)}T`
  }
  if (views >= 1000000000) {
    return `${Math.round(views / 1000000000, 2)}B`
  }
  if (views >= 1000000) {
    return `${Math.round(views / 1000000, 2)}M`
  }
  if (views >= 1000) {
    return `${Math.round(views / 1000, 2)}K`
  } else {
    return `${Math.round(views / 100, 2)}`
  }
}
