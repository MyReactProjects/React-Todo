var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass ({
  getInitialState : function() {
    return {
      showCompleted: false, //setting the initial state for show completed- always false
      searchText: '', // initial state for search text is an empty string so it will find everything
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'take the trash'
        },
        {
          id: 3,
          text: 'Drink some tea'
        },
        {
          id: 4,
          text: 'Eat shawarma!'
        }
      ]
    }
  },
  handleAddTodo :function (text) { // we are passing this function into the prop we created inside AddTodo
    alert('new todo:' + text)
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted, //can alsop use es6 syntax
      searchText: searchText.toLowerCase()
      //going to lowercase to find everything
    })
  },
  render: function () {
    var {todos} = this.state; // todos is the initial state i declared and it is renderd thorugh the state
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
}) // END CLASS

module.exports = TodoApp;
