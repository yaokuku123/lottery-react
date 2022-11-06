let Web3 = require('web3')
console.log(window.ethereum)
// 获取metaMask的provider
let web3Provider = window.ethereum;
// 将用户的provider注入web3
let web3 = new Web3(web3Provider);
console.log(web3.version)

module.exports = web3