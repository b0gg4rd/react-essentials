import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      description: "",
      items: [],
    };

    this.addTask = this.addTask.bind(this);
    this.onDesciptionUpdate = this.onDesciptionUpdate.bind(this);
  }

  addTask() {
    const items = this.state.items;

    items.push(
      <li>{ this.state.description }</li>
    );

    this.setState({
      description: "",
      items: items
    });
  }

  onDesciptionUpdate(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Super TO-DO List App</h1>
        <input value={this.description} onChange={ this.onDesciptionUpdate } type="text" placeholder="Escribe una tarea" />
        <button onClick={ this.addTask }>agregar</button>
        <ul>{ this.state.items }</ul>
      </div>
    );
  }
}
