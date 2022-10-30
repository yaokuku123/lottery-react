pragma solidity ^0.4.25;

contract Lottery {
    address public manager;
    address[] public players;
    uint256 public round;
    address public winner;

    constructor() public {
        manager = msg.sender;
    }

    modifier onlyManager() {
        require(msg.sender == manager);
        _;
    }

    function play() public payable {
        require(msg.value == 1 ether);
        players.push(msg.sender);
    }

    function drawPrize() public onlyManager {
        bytes memory input = abi.encodePacked(
            block.timestamp,
            block.difficulty,
            players.length
        );
        bytes32 hash = keccak256(input);
        uint256 randomNum = uint256(hash);
        uint256 index = randomNum % players.length;
        winner = players[index];
        uint256 money = (address(this).balance * 90) / 100;
        uint256 reMoney = address(this).balance - money;
        winner.transfer(money);
        manager.transfer(reMoney);
        round++;
        delete players;
    }

    function refund() public onlyManager {
        for (uint256 i = 0; i < players.length; i++) {
            players[i].transfer(1 ether);
        }
        round++;
        delete players;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
}