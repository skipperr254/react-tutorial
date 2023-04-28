import React from 'react'
import { UserConsumer } from './userContext'

function ComponentF() {
  return (
    <div>
      <UserConsumer>
        {(username) => <h1>Hello {username} from Component F</h1>}
      </UserConsumer>
    </div>
  )
}

export default ComponentF
