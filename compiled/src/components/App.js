import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import YOUTUBE_API_KEY from '/src/config/youtube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      VideoList: exampleVideoData,
      // []
      currentVideo: exampleVideoData[0] // {}

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = _.debounce(this.handleSearch.bind(this), 500, {
      leading: true
    });
    this.options = {
      key: YOUTUBE_API_KEY,
      query: 'squirrels',
      max: 5
    };
  }

  getYouTubeVideos() {
    this.props.searchYouTube(this.options, videos => {
      this.setState({
        VideoList: videos,
        currentVideo: videos[0]
      });
    });
  }

  handleSearch(searchParameter) {
    this.options.query = searchParameter;
    this.getYouTubeVideos();
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  } // youtube.js created!


  componentDidMount() {
    this.getYouTubeVideos();
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", {
      className: "navbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6 offset-md-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Search, {
      searchHandler: this.handleSearch
    })))), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-7"
    }, /*#__PURE__*/React.createElement(VideoPlayer, {
      video: this.state.currentVideo
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-md-5"
    }, /*#__PURE__*/React.createElement(VideoList, {
      videos: this.state.VideoList,
      onVideoClick: this.handleClick
    }))));
  }

} // In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiVmlkZW9QbGF5ZXIiLCJWaWRlb0xpc3QiLCJleGFtcGxlVmlkZW9EYXRhIiwiWU9VVFVCRV9BUElfS0VZIiwiU2VhcmNoIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VmlkZW8iLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVTZWFyY2giLCJfIiwiZGVib3VuY2UiLCJsZWFkaW5nIiwib3B0aW9ucyIsImtleSIsInF1ZXJ5IiwibWF4IiwiZ2V0WW91VHViZVZpZGVvcyIsInNlYXJjaFlvdVR1YmUiLCJ2aWRlb3MiLCJzZXRTdGF0ZSIsInNlYXJjaFBhcmFtZXRlciIsInZpZGVvIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVAsTUFBd0Isa0JBQXhCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QiwrQkFBN0I7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLHdCQUE1QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYVCxNQUFBQSxTQUFTLEVBQUVDLGdCQURBO0FBQ2tCO0FBQzdCUyxNQUFBQSxZQUFZLEVBQUVULGdCQUFnQixDQUFDLENBQUQsQ0FGbkIsQ0FFdUI7O0FBRnZCLEtBQWI7QUFJQSxTQUFLVSxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkMsQ0FBQyxDQUFDQyxRQUFGLENBQVcsS0FBS0YsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBWCxFQUF5QyxHQUF6QyxFQUE4QztBQUFDSSxNQUFBQSxPQUFPLEVBQUU7QUFBVixLQUE5QyxDQUFwQjtBQUNBLFNBQUtDLE9BQUwsR0FBZTtBQUNiQyxNQUFBQSxHQUFHLEVBQUVoQixlQURRO0FBRWJpQixNQUFBQSxLQUFLLEVBQUUsV0FGTTtBQUdiQyxNQUFBQSxHQUFHLEVBQUU7QUFIUSxLQUFmO0FBS0Q7O0FBRURDLEVBQUFBLGdCQUFnQixHQUFHO0FBQ2pCLFNBQUtiLEtBQUwsQ0FBV2MsYUFBWCxDQUF5QixLQUFLTCxPQUE5QixFQUF3Q00sTUFBRCxJQUFZO0FBQ2pELFdBQUtDLFFBQUwsQ0FBYztBQUNaeEIsUUFBQUEsU0FBUyxFQUFFdUIsTUFEQztBQUVaYixRQUFBQSxZQUFZLEVBQUVhLE1BQU0sQ0FBQyxDQUFEO0FBRlIsT0FBZDtBQUlELEtBTEQ7QUFNRDs7QUFFRFYsRUFBQUEsWUFBWSxDQUFDWSxlQUFELEVBQWtCO0FBQzVCLFNBQUtSLE9BQUwsQ0FBYUUsS0FBYixHQUFxQk0sZUFBckI7QUFDQSxTQUFLSixnQkFBTDtBQUNEOztBQUVEVixFQUFBQSxXQUFXLENBQUNlLEtBQUQsRUFBUTtBQUNqQixTQUFLRixRQUFMLENBQWM7QUFDWmQsTUFBQUEsWUFBWSxFQUFFZ0I7QUFERixLQUFkO0FBR0QsR0FsQytCLENBb0NoQzs7O0FBQ0FDLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCLFNBQUtOLGdCQUFMO0FBQ0Q7O0FBR0RPLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUFPLDhDQUNMO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsOENBQ0Usb0JBQUMsTUFBRDtBQUFRLE1BQUEsYUFBYSxFQUFFLEtBQUtmO0FBQTVCLE1BREYsQ0FERixDQURGLENBREssZUFRTDtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLG9CQUFDLFdBQUQ7QUFBYSxNQUFBLEtBQUssRUFBRSxLQUFLSixLQUFMLENBQVdDO0FBQS9CLE1BREYsQ0FERixlQUlFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxvQkFBQyxTQUFEO0FBQVcsTUFBQSxNQUFNLEVBQUUsS0FBS0QsS0FBTCxDQUFXVCxTQUE5QjtBQUF5QyxNQUFBLFlBQVksRUFBRSxLQUFLVztBQUE1RCxNQURGLENBSkYsQ0FSSyxDQUFQO0FBa0JEOztBQTdEK0IsQyxDQWlFbEM7QUFDQTs7O0FBQ0EsZUFBZVAsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWRlb1BsYXllciBmcm9tICcuL1ZpZGVvUGxheWVyLmpzJztcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnLi9WaWRlb0xpc3QuanMnO1xuaW1wb3J0IGV4YW1wbGVWaWRlb0RhdGEgZnJvbSAnL3NyYy9kYXRhL2V4YW1wbGVWaWRlb0RhdGEuanMnO1xuaW1wb3J0IFlPVVRVQkVfQVBJX0tFWSBmcm9tICcvc3JjL2NvbmZpZy95b3V0dWJlLmpzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgVmlkZW9MaXN0OiBleGFtcGxlVmlkZW9EYXRhLCAvLyBbXVxuICAgICAgY3VycmVudFZpZGVvOiBleGFtcGxlVmlkZW9EYXRhWzBdIC8vIHt9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoID0gXy5kZWJvdW5jZSh0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpLCA1MDAsIHtsZWFkaW5nOiB0cnVlfSk7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAga2V5OiBZT1VUVUJFX0FQSV9LRVksXG4gICAgICBxdWVyeTogJ3NxdWlycmVscycsXG4gICAgICBtYXg6IDVcbiAgICB9O1xuICB9XG5cbiAgZ2V0WW91VHViZVZpZGVvcygpIHtcbiAgICB0aGlzLnByb3BzLnNlYXJjaFlvdVR1YmUodGhpcy5vcHRpb25zLCAodmlkZW9zKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgVmlkZW9MaXN0OiB2aWRlb3MsXG4gICAgICAgIGN1cnJlbnRWaWRlbzogdmlkZW9zWzBdXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChzZWFyY2hQYXJhbWV0ZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMucXVlcnkgPSBzZWFyY2hQYXJhbWV0ZXI7XG4gICAgdGhpcy5nZXRZb3VUdWJlVmlkZW9zKCk7XG4gIH1cblxuICBoYW5kbGVDbGljayh2aWRlbykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudFZpZGVvOiB2aWRlb1xuICAgIH0pO1xuICB9XG5cbiAgLy8geW91dHViZS5qcyBjcmVhdGVkIVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFlvdVR1YmVWaWRlb3MoKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U2VhcmNoIHNlYXJjaEhhbmRsZXI9e3RoaXMuaGFuZGxlU2VhcmNofS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgPFZpZGVvUGxheWVyIHZpZGVvPXt0aGlzLnN0YXRlLmN1cnJlbnRWaWRlb30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgIDxWaWRlb0xpc3QgdmlkZW9zPXt0aGlzLnN0YXRlLlZpZGVvTGlzdH0gb25WaWRlb0NsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfS8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG4gIH1cblxufVxuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19