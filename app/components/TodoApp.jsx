var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass ({
  getInitialState : function() {
    return {
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
          text: 'smoke'
        },
        {
          id: 4,
          text: 'lick my balls'
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state; // todos is the initial state i declared and it is renderd thorugh the state
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
}) // END CLASS

module.exports = TodoApp;
