var React = require('react');
var uuid = require('node-uuid')

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
          id: uuid(),
          text: 'walk the dog'
        },
        {
          id: uuid(),
          text: 'take the trash'
        },
        {
          id: uuid(),
          text: 'Drink some tea'
        },
        {
          id: uuid(),
          text: 'Eat shawarma!'
        }
      ]
    }
  },
  handleAddTodo :function (text) { // we are passing this function into the prop we created inside AddTodo
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
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
