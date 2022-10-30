let {interface, bytecode} = require('./01-compile')
let Web3 = require('web3')

// 创建 web3 对象
let web3 = new Web3('http://localhost:8545')
console.log('version: ',web3.version)
// 创建合约对象
let contract = new web3.eth.Contract(JSON.parse(interface))
// 部署合约
let deploy = async () => {
    // 获取全部账号
    let accounts = await web3.eth.getAccounts()
    console.log(accounts)
    // 部署合约，传入 bin 和 初始化参数(arguments)。填写发送人和gas后发送部署至链
    let instance = await contract.deploy({
        data: bytecode
    }).send({
        from: accounts[0],
        gas: '3000000'
    })
    console.log('instance address: ',instance.options.address)
}
deploy()