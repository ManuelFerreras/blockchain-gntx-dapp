// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Genetix is ERC20 {

    string private _name = "GENETIX";
    string private _symbol = "GNTX";

    uint256 private _totalSupply = 1978651800 * 10 ** 18;

    constructor() ERC20(_name, _symbol) {

        _mint(msg.sender, _totalSupply);

    }

    function burn(uint256 _amount) public {
        require(balanceOf(msg.sender) >= _amount, "Not Enough Tokens To Burn.");

        _burn(msg.sender, _amount);
    }

}