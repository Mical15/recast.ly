// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from '/src/lib/searchYouTube.js';
// import VideoListEntry from './components/VideoListEntry.jsx';


ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));
// ReactDOM.render(<VideoList videoTemplate={exampleVideoData} />, document.getElementByClassName('col-md-5'));
