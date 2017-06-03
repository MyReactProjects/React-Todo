var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
  expect(TodoAPI).toExist();
  });
  describe('setTodos', () => {
    it('should set valid todos array' , () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todo array', ()=> {
      var badTodos= {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    })
  });

  describe('getTodos', () => {
    it('should return empty array or bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in local storage', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos()

      expect(actualTodos).toEqual(todos)
    })
  });

  describe('filteredTodos' , () => {
    var todos = [{
      id: 1,
      text: 'Some test',
      completed: true
    }, {
      id: 2,
      text: 'OTHome test 2',
      completed: false
    }, {
      id: 3,
      text: 'Some test 3',
      completed: true
    }];
    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos.length).toBe(3)
    });

    it('should return non completed items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '')
      expect(filteredTodos.length).toBe(1)
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '') // checks that the non completed todo becomes the first item in the array by making sure that his completed prop is false
      expect(filteredTodos[0].completed).toBe(false)
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some') // checks that the non completed todo becomes the first item in the array by making sure that his completed prop is false
      expect(filteredTodos.length).toBe(2)
    });

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '') // checks that the non completed todo becomes the first item in the array by making sure that his completed prop is false
      expect(filteredTodos.length).toBe(3)
    });
  });

}); // END MAIN DESCRIBE
