import React from 'react';
import { getPublishedDuration, getViewsFormated } from '../utils/helperFuntions';

const VideoCard = ({ info }) => {
  const { contentDetails, snippet, statistics } = info;
  const { duration } = contentDetails;
  const {
    channelTitle,
    publishedAt,
    localized: { title },
    thumbnails: {
      medium: { url }
    }
  } = snippet;
  const { viewCount } = statistics;

  const duration1 = duration.replace(/PT|D|H|M|S/gi, (x) => {
    if (x === 'S') {
      return '';
    }
    if (x === 'PT') {
      return '';
    } else {
      return ':';
    }
  });

  const elapsedTime = getPublishedDuration(publishedAt);
  const views = getViewsFormated(viewCount);

  return (
    <div>
      <div className="relative">
        <img className="min-w-full rounded-xl" src={url} alt="thumbnail" />
        <p className="absolute right-1 bottom-1 px-1 font-semibold text-sm text-white bg-black rounded-md">
          {duration1}
        </p>
      </div>
      <h1 className="mt-2 w-11/12 line-clamp-2 break-words text-lg font-semibold">{title}</h1>
      <h3 className="text-lg font-medium text-gray-500">{channelTitle}</h3>
      <div className="flex gap-3 items-center font-medium  text-gray-500">
        <h3>{views + ' views'}</h3>
        <p className="font-bold">|</p>
        <h3>{elapsedTime}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
