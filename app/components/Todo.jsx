var React = require('react');
var moment = require('moment');

var Todo = React.createClass ({
  render: function () {
    var {text, id, completed, createdAt, completedAt} = this.props // the text and the id as defined in todo app
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
      <div onClick={() => {
        this.props.onToggle(id)
      }}>
        <input type="checkbox" checked={completed}/>
          {/*the checked={completed} is taken from each individual todo item */}
          {/*and is set to false as a default */}
          <p>{text}</p>
          <p>{renderDate()}</p>

      </div>
    )
  }
}); //END CLASS

module.exports = Todo;
