// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SmartContract {
    uint256 public balance;
    constructor() {
        balance = 600;
    }
    function deposit(uint256 amount) external {
        require(amount > 0, "INVALID! Amount is less than zero");
        balance += amount;
    }
    function withdraw(uint256 amount) external {
        assert(amount <= balance);
        balance -= amount;
        if (amount > 100) {
            revert("Withdrawal amount shoudnt be more than 100. You could be getting scammed!");
        }
    }
}

