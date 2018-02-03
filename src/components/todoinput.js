import React from 'react';

export default class Todoinput extends React.Component{
  constructor(props){
    super(props)
  }

  render (){
    return {
      <div>
        <input type="test" value="" onChange={this.hadndleChange} />
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
      </div>
        );
    }
  }
