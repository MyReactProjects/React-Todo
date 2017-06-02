var React = require('react');

var Todo = require('Todo');
var TodoList = React.createClass ({

  render: function () {
    var {todos} = this.props
    var renderTodos = () => {
      return todos.map((todo) => { //.map takes a function which is called for every element in the arrey
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
          //on toggle is passed on from the parent thats why its got props on it
          // rendering the todo with a unique key so it will be able to render
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
