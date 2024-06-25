# Testing-an-Electron-App


This repository contains an Electron application with a React frontend and SQLite for data storage. The application allows users to manage a todo list.

## Table of Contents
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Running Tests](#running-tests)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Running E2E Tests](#running-e2e-tests)
  - [Running Unit Tests](#running-unit-tests)
- [Test Coverage](#test-coverage)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/electron-react-sqlite-todo.git
   cd electron-react-sqlite-todo
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the App

To start the Electron app, run:
```sh
npm start
```

This will open the Electron application where you can manage your todo list.

## Running Tests

### Prerequisites

- Node.js
- npm

### Setup

1. Clone the repository if you haven't already:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/electron-react-sqlite-todo.git
   cd electron-react-sqlite-todo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running E2E Tests

The end-to-end (E2E) tests are implemented using WebdriverIO (WDIO). To run the E2E tests, use the following command:
```sh
npm run wdio
```

### Running Unit Tests

The unit tests are written using Mocha and Chai. To run the unit tests, use the following command:
```sh
npm test
```

## Test Coverage

### E2E Tests

The E2E test suite covers the following functionalities:

1. **Open the Main Window**: Ensures that the main application window opens correctly.
2. **Add a New Todo Item**: Tests adding a new todo item to the list.
3. **Delete a Todo Item**: Tests the deletion of a todo item from the list.

E2E tests are located in the `test/specs` directory. Example:
```js
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
```

### Unit Tests

The unit tests focus on the core components and modules of the application:

1. **TodoModel**:
   - Creation of a new todo item.
   - Toggling the done status of a todo item.
   - Updating the text of a todo item.

Unit tests are located in the `test/unit` directory. Example:
```js
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
```

## Contributing

Feel free to submit pull requests and issues. We welcome all contributions that improve the application and its testing coverage.

