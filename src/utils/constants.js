export const API_KEY = 'AIzaSyAz2zi0kZs4BqCTC6k7Crg7vlDAKYgamjM'

export const VIDEO_LIST_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=50&regionCode=IN&key=${API_KEY}`

export const SEARCH_SUGGESTIONS_API_URL =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&gl=IN&q='

export const URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
