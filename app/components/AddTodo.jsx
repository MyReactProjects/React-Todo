var React = require('react');

var AddTodo = React.createClass ({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value; //the refs take the value of the input field
    if (todoText.length > 1) {
      this.refs.todoText.value = '' // if there was a valid input and it was submitted this will clear the input field
      this.props.onAddTodo(todoText)
    } else {
      this.refs.todoText.focus()
    }
  },
  render: function () {

    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}); //END CLASS

module.exports = AddTodo;
