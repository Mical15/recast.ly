var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={(e) => props.searchHandler(e.target.value)} className="form-control" id='input' type="text" />
    <button type='submit' className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// onkeyup=

// onClick={props.searchHandler('squirrles')}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
