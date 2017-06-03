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
  },

  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })
    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase(); // this var stores the sext from the todo items that already exist
      return searchText.length === 0 || text.indexOf(searchText) > -1;
      
    })
    //sort todos with non completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed ){
      return -1;
    } else if (a.completed && !b.completed ) {
      return 1;
    } else {
      return 0;
    }
    })
    return filteredTodos;
  }



};
