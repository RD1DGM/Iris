pragma solidity >=0.4.21 <0.6.0;

import './SafeMath.sol';
import './Omen.sol';
import './Owner.sol';

contract Iris is Omen, Owner {
    using SafeMath for uint256;
    
    constructor() public {  
        balances[address(this)] += initialSupply;
    }
    
    mapping (address => uint256) balances;
    
    event CoinsBurned (address indexed burner, uint256 value);
    event CoinsBought (address indexed buyer, uint256 value);
    event TippedAmount (address indexed sender, address indexed tipper, uint256 value);

    modifier hasOmen() {
       require(balances[msg.sender] > 0, 'You don not have enough Omen.');
       _;
    }
    
     function balanceOf(address _who) public view returns (uint256) {
         return balances[_who];
     }
     
     function checkBalance(address _who) public view returns (uint256) {
         return address(_who).balance;
     }
    
    
    function buyOmen(address _receiver) public payable {
        require(owner != msg.sender, 'Contract creator can not call this function.');

        owner.transfer(msg.value);
        uint256 omens = (msg.value).div((855));

        require(omens < balances[address(this)], 'Can not exceed the limit.');

        balances[address(this)] = balances[address(this)].sub(omens);
        balances[_receiver] = balances[_receiver].add(omens);
        emit CoinsBought (_receiver,  omens);
    }
    
    function tipOmen(address _receiver, uint256 _value) public hasOmen {
        require(balances[_receiver] > 0, 'Can not transfer to users who has no Omen.');
        
        balances[msg.sender] = balances[msg.sender].sub(_value, 'Tip can not exceed balance.');
        balances[_receiver] = balances[_receiver].add(_value);
        emit TippedAmount (msg.sender, _receiver, _value);
    }
    
    function tipWei(address payable _receiver) public payable {
        require(_receiver != address(0), 'Can not send to the 0 address.');
        
        _receiver.transfer(msg.value);
        emit TippedAmount (msg.sender, _receiver, msg.value);
    }
    
    function boost(uint256 _value) public hasOmen {
        balances[msg.sender] = balances[msg.sender].sub(_value);
        emit CoinsBurned (msg.sender, _value);
    }

}
