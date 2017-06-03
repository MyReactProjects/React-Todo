var React = require('react');
var moment = require('moment');

var Todo = React.createClass ({
  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props // the text and the id as defined in todo app
    var todoClassName = completed ? 'todo todo-completed' : 'todo'; //this controlls the class name dynamiclly and changes the styles of the todo item depending on its completed state
    var renderDate = () => {
      var message = 'Created: '
      var timestamp = createdAt;

      if (completed) { //this is a function that renders a different message if the todo item is completed
        message = 'completed '
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    };

    return ( // the text and id props from the es6 destructuring are passed on into this component thorugh the parent component which is TodoList and then TodoApp
      <div className={todoClassName} onClick={() => { //the class name on this div is the variable that we defined in the top and controlls the styles of the todo item depending on its completed state
        this.props.onToggle(id)
      }}>
      <div>
        <input type="checkbox" checked={completed}/>
      </div>
          {/*the checked={completed} is taken from each individual todo item */
          /*and is set to false as a default */}
      <div>
        <p>{text}</p>
        <p className="todo__subtext">{renderDate()}</p>
      </div>


      </div>
    )
  }
}); //END CLASS

module.exports = Todo;
