// test/unit/todoModel.spec.js
const { expect } = require('chai');
const TodoModel = require('../../src/models/TodoModel');

describe('TodoModel', () => {
  it('should create a new todo', () => {
    const todo = new TodoModel('Test Todo');
    expect(todo.text).to.equal('Test Todo');
    expect(todo.done).to.be.false;
  });

  it('should toggle the done status', () => {
    const todo = new TodoModel('Test Todo');
    todo.toggleDone();
    expect(todo.done).to.be.true;
  });

  it('should update the text', () => {
    const todo = new TodoModel('Test Todo');
    todo.updateText('Updated Todo');
    expect(todo.text).to.equal('Updated Todo');
  });
});
