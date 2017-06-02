var React = require('react');

var Todo = require('Todo');
var TodoList = React.createClass ({

  render: function () {
    var {todos} = this.props
    var renderTodos = () => {
      return todos.map((todo) => { //.map takes a function which is called for every element in the arrey
        return (
          <Todo key={todo.id} {...todo}/> // rendering the todo with a unique key so it will be able to render
        ) //the spread operator let me pass every element in the todo object as props
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>

    )
  }
}); //END CLASS

module.exports = TodoList;
