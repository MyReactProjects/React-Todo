var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoAPI = require('TodoAPI');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass ({
  getInitialState : function() {
    return {
      showCompleted: false, //setting the initial state for show completed- always false
      searchText: '', // initial state for search text is an empty string so it will find everything
      todos: TodoAPI.getTodos() // fetching the todos from the local storage
  };
},
  componentDidUpdate : function () {
    TodoAPI.setTodos(this.state.todos) // adding todos to local storage using the api
  },
  handleAddTodo :function (text) { // we are passing this function into the prop we created inside AddTodo
    this.setState({
      todos: [
        ...this.state.todos, //spread operator takes the old arrey and adds it to the new one
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(), // this uses moment js to set a unix timestamp on each todo
          completedAt: undefined //set to initial state of undefined because it is not created with this - a todo is not created completed
        }
      ]
    })
  },
  handleToggle: function (id){
    var updatedTodos = this.state.todos.map(function (todo) {
      if(todo.id === id) {
        todo.completed = !todo.completed
        todo.completedAt = todo.completed ? moment().unix() : undefined; // this sets a new timestamp when the todo is completed
      } // using a turenry operator
      return todo;
    })

    this.setState({todos: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted, //can alsop use es6 syntax
      searchText: searchText.toLowerCase()
      //going to lowercase to find everything
    })
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state; // todos is the initial state i declared and it is renderd thorugh the state
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
}) // END CLASS

module.exports = TodoApp;
