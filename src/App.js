import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Todoinput from './components/todoinput'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
      {id 0,text:"make dinner"},
      {id 1,text :"Fold the laundry."},
      {id 2, text : "Learn reat"}
    ],
    nextId: 3
  };

  this.addTodo = this.addTodo.bind(this);
  this.removeTodo = this.removeTodo.bind(this);

  addTodo(todoText) {
    console.log("Todo added", todotext);
  }

  removeTodo(id){
    console.log("1000:",todo);
  }

  render() {
    return (
      <div className="App">
        <div className="todowrapper">
          <Header />
          <Todoinput todoText="addTodo(this.addTodo)" />
        </div>
      </div>
    );
  }
}

export default App;
