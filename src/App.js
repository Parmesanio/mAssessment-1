import React, { Component } from 'react';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoList from './components/TodoList/TodoList';
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        todo: {
          id: 0,
          title: '',
          completed: false
        },
        todoList: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleAddTodo = this.handleAddTodo.bind(this);
      this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
      this.handleComplete = this.handleComplete.bind(this);
    }
    handleChange(event) {
      this.setState({
        todo: {
        ...this.state.todo, title: event.target.value
      }})
    }
    handleAddTodo() {
      let todoCopy = {...this.state.todo};
      let id = todoCopy.id;
      todoCopy.id = id + 1;
      if (this.state.todo.title !== '') {
        this.setState({
          todo:{...this.state.todo, id: todoCopy.id, title: ''},
          todoList: [...this.state.todoList, todoCopy]
        }) 
      }
    }
    handleDeleteTodo(id) {
      let todoListCopy = [...this.state.todoList]
      let index = todoListCopy.findIndex(todo => todo.id == id);
      todoListCopy.splice(index, 1);
      this.setState({
        todoList: todoListCopy
      })
    }
    handleComplete(id) {
      let todoListCopy = [...this.state.todoList]
      let index = todoListCopy.findIndex(todo => todo.id == id);
      todoListCopy[index].completed = true;
      this.setState({
        todoList: todoListCopy
      })
    }
  render() {
    let { todo, todoList } = this.state;
    return (
      <div className="App">
        <TodoSearch 
          title={todo.title} 
          handleChange={this.handleChange} 
          handleAddTodo={this.handleAddTodo}
          />
        <TodoList
          todoList={todoList}
          handleDeleteTodo={this.handleDeleteTodo}
          handleComplete={this.handleComplete}
          />
      </div>
    );
  }
}

export default App;
