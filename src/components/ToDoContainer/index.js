import React, { Component } from "react";

import { Image, Container } from './styles'


class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      addedarray: []};
      
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  async handleClick() {
    console.log(this.state.value)
    const newList = this.state.list;
    newList.push(this.state.value);
    this.setState({list: newList});
    console.log(this.state.list)
  }

 

  render() {
    return (
      <Container>
        Todo: <input type = 'text' value = {this.state.value}
        onChange = {this.handleChange} />
        <button onClick={ () => this.handleClick()}>Add</button><p>{this.state.list}</p>
      </Container>
    )
  }
}





export default ToDoContainer;
