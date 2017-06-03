var $ = require('jquery');

module.exports = {
  setTodos: function(todos) { // setting the todos on local storage using strigify
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () { //getting the todos from local storage using parse
    var stringTodos = localStorage.getItem('todos');
    var todos = []

    try { //using the try catch block to prevent errors
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    return $.isArray(todos) ? todos : []; //using a turnery operator to shorten code insted of if statement
  }
};
