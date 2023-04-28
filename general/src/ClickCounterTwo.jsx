import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCounter =  () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={this.incrementCounter}>Clicked { count } times</button>
      </div>
    )
  }
}

export default ClickCounterTwo
