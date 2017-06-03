var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });


  it('should add todos state on handleAddTodo', ()=>{
      var todoText = 'text text';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
      todoApp.setState({todos: []})
      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos[0].text).toBe(todoText);
      expect(todoApp.state.todos[0].createdAt).toBeA('number')
  });

  it('Should toggle completed value when handletoggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(false); // this is the only way to reach the arrey
      todoApp.handleToggle(11)// changed the completed state on the todoData
    expect(todoApp.state.todos[0].completed).toBe(true); //now its spose to be true
    //pay close attention to the syntax
    expect(todoApp.state.todos[0].completedAt).toBeA('number')

  });

  it('Should toggle todo from completed to incomplete', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: 1
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(true); // this is the only way to reach the arrey
      todoApp.handleToggle(11)// changed the completed state on the todoData
    expect(todoApp.state.todos[0].completed).toBe(false); //now its spose to be true
    //pay close attention to the syntax
    expect(todoApp.state.todos[0].completedAt).toBe(undefined) // can also use .toNotExist()

  });
}); //END MAIN DESCRIBE
