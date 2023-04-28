import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserConsumer } from './userContext'

export default class ComponentE extends Component {
    static contextType = UserConsumer;
  render() {
    return (
      <div>
        <ComponentF />
        <h2>Hello {this.context} from Component E</h2>
      </div>
    )
  }
}