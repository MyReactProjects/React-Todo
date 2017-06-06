var expect = require('expect');

var actions = require('actions');

describe('actions', () => {
  it('should generate text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some Search Text'
    };
    var res = actions.setSearchText(action.searchText)

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'somthing to do'
    }
    var res = actions.addTodo(action.text)

    expect(res).toEqual(action);
  });

  it('should toggle show completed', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    }
    var res = actions.showCompleted(action)
    expect(res).toEqual(action);
  });

  it('should toggle a todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 119
    }
    var res = actions.toggleTodo(action.id)
    expect(res).toEqual(action);
  });
});//END MAIN DESCRIBE
