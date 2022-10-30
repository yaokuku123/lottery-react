let Web3 = require('web3')
console.log(window.ethereum)

let web3 = new Web3()
web3.setProvider(window.ethereum)
console.log(web3.version)

module.exports = web3