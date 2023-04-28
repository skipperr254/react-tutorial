import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
      this.cBRef = null;
      this.setcBRef = (element) => {
        this.cBRef = element;
      }
    }

    componentDidMount() {
        // this.inputRef.current.focus();
        if (this.cBRef) {
            this.cBRef.focus();
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setcBRef} />
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default RefsDemo

// Access the DOM elements.
// Two methods. 