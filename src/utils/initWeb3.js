let Web3 = require('web3')

if (window.ethereum) {
    var web3Provider = window.ethereum;
    try {
      // 请求账号授权
      window.ethereum.enable()
    } catch (error) {
      // User denied account access...
      console.error("User denied account access")
    }
}


console.log(web3Provider);
// 获取metaMask的provider
// let web3Provider = window.ethereum;
// 将用户的provider注入web3
let web3 = new Web3(web3Provider);

module.exports = web3