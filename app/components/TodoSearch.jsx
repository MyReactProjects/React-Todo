var React = require('react');

var TodoSearch = React.createClass ({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked
    // not using .value because its a checkbox
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText)
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
          {/*setting refs so we will have accsess to the users input later on*/}
         </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            {/*setting refs so we will have the checkbox status later*/}
            Show Completed Todos
          </label>
        </div>
      </div>
    )
  }
}); //END CLASS

module.exports = TodoSearch;
