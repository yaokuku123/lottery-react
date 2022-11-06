import React, { Component } from 'react'
let contractInstance = require('./eth/lotteryInstance')

class App extends Component {
  constructor() {
    super()
    this.state = {
      manager:'',
      winner:''
    }
  }

  async componentWillMount() {
    let manager = await contractInstance.methods.manager().call() 
    console.log(manager)
    this.setState({
      manager:manager
    })
  }

  render(){
      return (
        <div>
          <h2>App</h2>
          <p>manager: {this.state.manager}</p>
        </div>
      )
  }
}

export default App;
