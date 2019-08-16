pragma solidity >=0.4.21 <0.6.0;


contract Omen {
    string public constant name = "Omen";
    string public constant symbol = "OMN";
    uint public constant decimals = 18;
    uint256 internal initialSupply = 100000000000000000000 * (100 ** uint256(decimals));
}
