// test/specs/todo-app.spec.js
const assert = require('assert');

describe('Electron React SQLite Todo App', () => {
  it('should open the main window', async () => {
    await browser.url('http://localhost:3000');
    const title = await browser.getTitle();
    assert.strictEqual(title, 'Electron React SQLite Todo');
  });

  it('should add a new todo item', async () => {
    await browser.url('http://localhost:3000');
    const input = await $('#new-todo');
    await input.setValue('New Todo Item');
    const addButton = await $('button.add-todo');
    await addButton.click();
    const todoItem = await $('.todo-item');
    assert.strictEqual(await todoItem.getText(), 'New Todo Item');
  });

  it('should delete a todo item', async () => {
    await browser.url('http://localhost:3000');
    const deleteButton = await $('.todo-item .delete-button');
    await deleteButton.click();
    const todoItems = await $$('.todo-item');
    assert.strictEqual(todoItems.length, 0);
  });
});
