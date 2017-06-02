var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
  expect(AddTodo).toExist();
  });

  it('should call onAddTodo with valid data', () => {
    var todoText = 'Check mail'
    var spy = expect.createSpy() // spy for checking the value it valid on the form
    var addTodo =  TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>) // rendering the component to the TestUtils
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText; // using the reefs i can manipulate the text input value
    TestUtils.Simulate.submit($el.find('form')[0]); // simulating form submit
    //make sure it in the correct uppercaseing


    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should Not call onAddTodo with invalid data', () => {
    var todoText = ''
    var spy = expect.createSpy() // spy for checking the value it valid on the form
    var addTodo =  TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>) // rendering the component to the TestUtils
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText; // using the reefs i can manipulate the text input value
    TestUtils.Simulate.submit($el.find('form')[0]); // simulating form submit
    //make sure it in the correct uppercaseing


    expect(spy).toNotHaveBeenCalled(todoText);
  });
}); //END MAIN DESCRIBE
