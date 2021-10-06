// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from '/src/lib/searchYouTube.js'; // import VideoListEntry from './components/VideoListEntry.jsx';

ReactDOM.render( /*#__PURE__*/React.createElement(App, {
  searchYouTube: searchYouTube
}), document.getElementById('app')); // ReactDOM.render(<VideoList videoTemplate={exampleVideoData} />, document.getElementByClassName('col-md-5'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJzZWFyY2hZb3VUdWJlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE9BQU9BLEdBQVAsTUFBZ0IscUJBQWhCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQiwyQkFBMUIsQyxDQUNBOztBQUdBQyxRQUFRLENBQUNDLE1BQVQsZUFBZ0Isb0JBQUMsR0FBRDtBQUFLLEVBQUEsYUFBYSxFQUFFRjtBQUFwQixFQUFoQixFQUFzREcsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXRELEUsQ0FDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFJlbmRlciB0aGUgYEFwcGAgY29tcG9uZW50IHRvIHRoZSBET01cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC5qcyc7XG5pbXBvcnQgc2VhcmNoWW91VHViZSBmcm9tICcvc3JjL2xpYi9zZWFyY2hZb3VUdWJlLmpzJztcbi8vIGltcG9ydCBWaWRlb0xpc3RFbnRyeSBmcm9tICcuL2NvbXBvbmVudHMvVmlkZW9MaXN0RW50cnkuanN4JztcblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBzZWFyY2hZb3VUdWJlPXtzZWFyY2hZb3VUdWJlfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuLy8gUmVhY3RET00ucmVuZGVyKDxWaWRlb0xpc3QgdmlkZW9UZW1wbGF0ZT17ZXhhbXBsZVZpZGVvRGF0YX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUNsYXNzTmFtZSgnY29sLW1kLTUnKSk7XG4iXX0=