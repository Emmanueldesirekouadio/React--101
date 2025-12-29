import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

   increment = () => {
    this.setState({
        count : this.state.count + 1 ,
    })
   }
   decrement= () => {
    this.setState({
        count : this.state.count - 1 ,
    })
   }

  render() {
    const {count} = this.state;
    return (
   
      <>
        <h1> My Counter App </h1>
        <h2> count: {count} </h2>
        <button onClick={this.increment}> + </button>
        <br />
        <button onClick={this.decrement}> - </button>
      </>
    );
  }
}
