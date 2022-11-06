let web3 = require('../utils/initWeb3')
let abi = [
    {
      constant: true,
      inputs: [],
      name: 'getBalance',
      outputs: [ [Object] ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'round',
      outputs: [ [Object] ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'manager',
      outputs: [ [Object] ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'drawPrize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'refund',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'getPlayers',
      outputs: [ [Object] ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'play',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'winner',
      outputs: [ [Object] ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [ [Object] ],
      name: 'players',
      outputs: [ [Object] ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    }
  ]

let address = '0xF6C89219cCD6973e5CC6C272907C27C0afB3B5Ec'

let contractInstance = new web3.eth.Contract(abi,address)

console.log(contractInstance.options.address)

module.exports = contractInstance