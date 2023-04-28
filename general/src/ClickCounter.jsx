import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <>
        <button onClick={incrementCounter}>Clicked {count} times</button>
        <p>{this.props.name}</p>
        </>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter, 10);
