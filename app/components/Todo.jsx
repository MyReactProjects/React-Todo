var React = require('react');

var Todo = React.createClass ({
  render: function () {
    var {text, id} = this.props // the text and the id as defined in todo app
    return ( // the text and id props from the es6 destructuring are passed on into this component thorugh the parent component which is TodoList and then TodoApp
      <div>
      {id}.  {text}
      </div>
    )
  }
}); //END CLASS

module.exports = Todo;
