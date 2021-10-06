import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import YOUTUBE_API_KEY from '/src/config/youtube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      VideoList: exampleVideoData, // []
      currentVideo: exampleVideoData[0] // {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = _.debounce(this.handleSearch.bind(this), 500, {leading: true});
    this.options = {
      key: YOUTUBE_API_KEY,
      query: 'squirrels',
      max: 5
    };
  }

  getYouTubeVideos() {
    this.props.searchYouTube(this.options, (videos) => {
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
  }

  // youtube.js created!
  componentDidMount() {
    this.getYouTubeVideos();
  }


  render() {
    return <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <Search searchHandler={this.handleSearch}/>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.VideoList} onVideoClick={this.handleClick}/>

        </div>
      </div>
    </div>;
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
