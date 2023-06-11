export const API_KEY = 'AIzaSyD8xUZK2ORbSdJJgD8tDpVoKEmZLFyUtEY'
// export const API_KEY = 'AIzaSyC4T-AFgLP3RSOrvaS5wpUHXkdPJVKMsUs'
// export const API_KEY = 'AIzaSyCiR39N2WNZoLb3aSAcfO37UFhv-eWe9ug'
// export const API_KEY = 'AIzaSyDtH54NBJRKYLP3w1VZ7gWTNUPI2OP6cn8'
// export const API_KEY = 'AIzaSyA0ZLgiXnBnpzy_pQCwLtDeDBLiaTUzYgQ'
// export const API_KEY = 'AIzaSyC6b6RwVP6YHs0ZmabCCKIAUtRcEutXN6Q'
// export const API_KEY = 'AIzaSyCjidgVGiM-Uq7hWdORuNROdB2JI2rcnTQ'
// export const API_KEY = 'AIzaSyB_NKt2tIVo9yHY1isbPxiqB3LmYl3ppIc'
// export const API_KEY = 'AIzaSyAK_UdF8UqhII-HhS-rr9hCBHc7wp-ygYI'
// export const API_KEY = 'AIzaSyAz2zi0kZs4BqCTC6k7Crg7vlDAKYgamjM'

export const VIDEO_LIST_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=15&regionCode=IN&key=${API_KEY}`

export const SUGGESTED_VIDEO_LIST_API_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${API_KEY}&relatedToVideoId=`

export const VIDEO_INFO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&key=${API_KEY}&id=`

export const CHANNEL_INFO_API_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&key=${API_KEY}&id=`

export const SEARCH_SUGGESTIONS_API_URL =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&gl=IN&q='

export const SEARCH_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${API_KEY}&q=`

export const URL_REGEX =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
