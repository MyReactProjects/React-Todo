var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
  expect(TodoSearch).toExist();
  });

  it('should call on search with entered input text', () => {
      var searchText = 'Dog'
      var spy = expect.createSpy() // spy for checking the value it valid on the form
      var todoSearch =  TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>) // rendering the component to the TestUtils
  //    var $el = $(ReactDOM.findDOMNode(todoSearch))

      todoSearch.refs.searchText.value = searchText // manipulating the text through the ref we set earlier
      TestUtils.Simulate.change(todoSearch.refs.searchText);
      expect(spy).toHaveBeenCalledWith(false, 'Dog')
  });

  it('should call on search with proper checked value', () => {

      var spy = expect.createSpy()
      var todoSearch =  TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

      todoSearch.refs.showCompleted.checked = true // this simulates setting the checkbox to true
      TestUtils.Simulate.change(todoSearch.refs.showCompleted);
      expect(spy).toHaveBeenCalledWith(true, '')

  });


}); //END MAIN DESCRIBE
