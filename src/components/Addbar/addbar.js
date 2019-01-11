import React, { Component } from "react";

class Addbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        }
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event) {
      this.setState({value: event.target.value})
    }
  
    render() {
      return (
        <div>
          Todo: <input type = 'text' value = {this.state.value}
          onChange = {this.handleChange} />
        </div>
      )
    }
  }

  
  
  export default Addbar;
  