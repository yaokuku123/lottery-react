import React, { Component } from 'react'
import CardExampleCard from './display/ui'
import web3 from './utils/initWeb3'
let contractInstance = require('./eth/lotteryInstance')

class App extends Component {
  constructor() {
    super()
    this.state = {
      manager: '',
      winner: '',
      round: 0,
      players: [],
      balance: 0,
      playerCounts: 0,
      currentAccount: '',
      isWork: false
    }
  }

  async componentWillMount() {
    let manager = await contractInstance.methods.manager().call()
    let winner = await contractInstance.methods.winner().call()
    let round = await contractInstance.methods.round().call()
    let players = await contractInstance.methods.getPlayers().call()
    let playerCounts = players.length
    let balanceWei = await contractInstance.methods.getBalance().call()
    let balance = await web3.utils.fromWei(balanceWei, 'ether')
    let accounts = await web3.eth.getAccounts()
    console.log(accounts[0]);
    this.setState({
      manager,
      winner,
      round,
      players,
      balance,
      playerCounts,
      currentAccount: accounts[0],
      isWork: false,
      isShowBtn: accounts[0] == manager ? 'inline' : 'none'
    })
  }

  play = async () => {
    console.log('play...');
    this.setState({ isWork: true })
    let accounts = await web3.eth.getAccounts()
    try {
      await contractInstance.methods.play().send({
        from: accounts[0],
        value: web3.utils.toWei('1', 'ether'),
        gas: '3000000'
      })
      alert('投注成功')
      this.setState({ isWork: false })
      window.location.reload()
    } catch (e) {
      console.log(e);
      alert('投注失败')
      this.setState({ isWork: false })
    }
  }

  drawPrize = async () => {
    console.log('drawPrize...');
    this.setState({ isWork: true })
    let accounts = await web3.eth.getAccounts()
    try {
      await contractInstance.methods.drawPrize().send({
        from: accounts[0],
        gas: '3000000'
      })
      alert('开奖成功')
      this.setState({ isWork: false })
      window.location.reload()
    } catch (e) {
      console.log(e);
      alert('开奖失败')
      this.setState({ isWork: false })
    }
  }

  refund = async () => {
    console.log('refund...');
    this.setState({ isWork: true })
    let accounts = await web3.eth.getAccounts()
    try {
      await contractInstance.methods.refund().send({
        from: accounts[0],
        gas: '3000000'
      })
      alert('退奖成功')
      this.setState({ isWork: false })
      window.location.reload()
    } catch (e) {
      console.log(e);
      alert('退奖失败')
      this.setState({ isWork: false })
    }
  }

  render() {
    return (
      <body>
        <div>
          <CardExampleCard
            manager={this.state.manager}
            winner={this.state.winner}
            round={this.state.round}
            players={this.state.players}
            playerCounts={this.state.playerCounts}
            balance={this.state.balance}
            currentAccount={this.state.currentAccount}
            play={this.play}
            drawPrize={this.drawPrize}
            refund={this.refund}
            isWork={this.state.isWork}
            isShowBtn={this.state.isShowBtn}
          />
        </div>
      </body>

    )
  }
}

export default App;
