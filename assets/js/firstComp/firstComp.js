import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Ahmed'
    }
  }

  render () {
    
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
