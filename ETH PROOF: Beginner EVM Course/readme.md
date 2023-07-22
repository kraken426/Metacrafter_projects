# Project: Create a Token
This program written in Solidity is my final project for module ETH PROOF: Beginner EVM Course.
This program is a contract that creats a token and send it to addresses and users.

## Description
1. This contract will have public variables that store the details about a coin (Token Name, Token Abbrv., Total Supply)

2. This contract will have a mapping of addresses to balances (address => uint)
   
3. In this code we will have a mint function that takes two parameters: an address and a value. The function then increases the
total supply by that number and increases the balance of the address by that amount.

4. This contract will have a burn function, which works the opposite of the mint function, as it will destroy tokens. It will take an address
and value just like the mint functions. It will then deduct the value from the total supply and from the balance of the address.

5. Lastly, we will have burn function which will have conditionals to make sure the balance of account is greater than or equal to
the amount that is supposed to be burned.

## Getting Started

### Executing program

[to be completed]

## Authors

Ayush Srivastav  

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
