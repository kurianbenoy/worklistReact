import React from 'react';
import './todoinput.css';

export default class Todoinput extends React.Component{
  constructor(props){
    super(props)
    this.state = {value:"test"};

    this.hadndleChange = this.hadndleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  hadndleChange(e) {
    console.log("Changed here");
  }

  addTodo(todo){
    console.log("TODO",todo);
  }

  render (){
    return (
      <div>
        <input type="test" value="" onChange={this.hadndleChange} />
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
      </div>
      );
    }
  }
