let solc = require('solc')
let fs = require('fs')

// 读取 solidity 合约文件
let sourceCode = fs.readFileSync('./contracts/Lottery.sol', 'utf-8')
// 使用 solc 编译合约
let output = solc.compile(sourceCode, 1)
// console.log('output: ', output)

// 导出编译后的合约
module.exports = output['contracts'][':Lottery']
