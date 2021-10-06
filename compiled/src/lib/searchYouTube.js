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
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: data => {
      callback(data.items);
    },
    error: function (error) {
      console.error('failed, yo', error);
    }
  });
};

export default searchYouTube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VhcmNoWW91VHViZS5qcyJdLCJuYW1lcyI6WyJzZWFyY2hZb3VUdWJlIiwib3B0aW9ucyIsImNhbGxiYWNrIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImtleSIsInEiLCJxdWVyeSIsInBhcnQiLCJtYXhSZXN1bHRzIiwibWF4IiwidmlkZW9FbWJlZGRhYmxlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiaXRlbXMiLCJlcnJvciIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGFBQWEsR0FBRyxDQUFDQyxPQUFELEVBQVVDLFFBQVYsS0FBdUI7QUFDekNDLEVBQUFBLENBQUMsQ0FBQ0MsSUFBRixDQUFPO0FBQ0xDLElBQUFBLEdBQUcsRUFBRSw4Q0FEQTtBQUVMQyxJQUFBQSxJQUFJLEVBQUUsS0FGRDtBQUdMQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsR0FBRyxFQUFFUCxPQUFPLENBQUNPLEdBRFQ7QUFFSkMsTUFBQUEsQ0FBQyxFQUFFUixPQUFPLENBQUNTLEtBRlA7QUFHSkMsTUFBQUEsSUFBSSxFQUFFLFNBSEY7QUFJSkMsTUFBQUEsVUFBVSxFQUFFWCxPQUFPLENBQUNZLEdBSmhCO0FBS0pQLE1BQUFBLElBQUksRUFBRSxPQUxGO0FBTUpRLE1BQUFBLGVBQWUsRUFBRTtBQU5iLEtBSEQ7QUFXTEMsSUFBQUEsV0FBVyxFQUFFLGtCQVhSO0FBWUxDLElBQUFBLE9BQU8sRUFBR1QsSUFBRCxJQUFVO0FBQ2pCTCxNQUFBQSxRQUFRLENBQUNLLElBQUksQ0FBQ1UsS0FBTixDQUFSO0FBQ0QsS0FkSTtBQWVMQyxJQUFBQSxLQUFLLEVBQUUsVUFBU0EsS0FBVCxFQUFnQjtBQUNyQkMsTUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWMsWUFBZCxFQUE0QkEsS0FBNUI7QUFDRDtBQWpCSSxHQUFQO0FBbUJELENBcEJEOztBQXNCQSxlQUFlbEIsYUFBZiIsInNvdXJjZXNDb250ZW50IjpbInZhciBzZWFyY2hZb3VUdWJlID0gKG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gICQuYWpheCh7XG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnLFxuICAgIHR5cGU6ICdHRVQnLFxuICAgIGRhdGE6IHtcbiAgICAgIGtleTogb3B0aW9ucy5rZXksXG4gICAgICBxOiBvcHRpb25zLnF1ZXJ5LFxuICAgICAgcGFydDogJ3NuaXBwZXQnLFxuICAgICAgbWF4UmVzdWx0czogb3B0aW9ucy5tYXgsXG4gICAgICB0eXBlOiAndmlkZW8nLFxuICAgICAgdmlkZW9FbWJlZGRhYmxlOiB0cnVlLFxuICAgIH0sXG4gICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YS5pdGVtcyk7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZhaWxlZCwgeW8nLCBlcnJvcik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFlvdVR1YmU7XG4iXX0=