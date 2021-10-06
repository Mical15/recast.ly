var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true,
    },
    contentType: 'application/json',
    success: (data) => {
      callback(data.items);
    },
    error: function(error) {
      console.error('failed, yo', error);
    }
  });
};

export default searchYouTube;
