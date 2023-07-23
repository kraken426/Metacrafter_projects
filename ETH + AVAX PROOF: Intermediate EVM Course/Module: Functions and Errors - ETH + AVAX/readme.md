# Implementation of the require(), assert() and revert() statements

This Solidity program implements the require(), assert() and revert() statements as error handling techniques in Solidity.

## Description

This program is a smart contract written in Solidity(.sol)
The contract has 2 functions: deposit and withdraw which use require, revert, and assert statements respectively to handle errors.
I pre-assigned the balance to 600 to make things simple

![image](https://github.com/kraken426/Metacrafter_projects/assets/67184260/d462b38f-5ea4-44ec-a593-3b87633ecc38)

If amount being deposited is less than 0 (which shoudnt be possible), we get "INVALID! Amount is less than zero"
I implemented "require()" here.
** also im using external so that deposit and withdraw can only be accessed from external account. also less gas fees compared to public.

![image](https://github.com/kraken426/Metacrafter_projects/assets/67184260/f6e4ca96-5c91-43ed-af84-8d2d61874a07)

Then while withdrawing if withdrawal amount is less than balance which is ideal then withdrawl amount is deducted from balance but **if its more than balance then revert happens which is basically that it will allow us to return a value and it will refund any remaining gas to the caller.**
This is done by implementing "assert()"

![image](https://github.com/kraken426/Metacrafter_projects/assets/67184260/e4963b43-5bfd-42ea-a24b-2cb1942456d6)

Now in withdraw again if amount is more than 100 then it will revert with a message "Withdrawal amount shoudnt be more than 100. You could be getting scammed!"

![image](https://github.com/kraken426/Metacrafter_projects/assets/67184260/0803520e-b6d6-4252-b8ea-4e6f98f362ea)

My thought behind this is that you would'nt be requiring such a last amount on withdraw so if large amount of trasaction is happening better it be in small denominations so that if you have large sum, some theif wont be able to steal all of it without a hassle. (did it make sense?) 

## Getting Started

### Executing program

To run this program, you can use Remix. Go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension like error_handling.sol. Copy and paste the following code into the file:

![image](https://github.com/kraken426/Metacrafter_projects/assets/67184260/531f1b87-29b2-4464-bbec-d3734cc55be3)

To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.18" (since we are using pragma solidity ^0.8.18; in our code i.e version 0.8.18 and upper), and then click on the "Compile error_handling.sol" button.

Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "error_handling" contract from the dropdown menu, and then click on the "Deploy" button.

Once the contract is deployed, you can interact with it by calling the available functions. Click on the "error_handling" contract in the left-hand sidebar, and then click on the deposit function to test the require statement. Execute different functions and try out the contract.

![image](https://github.com/kraken426/Metacrafter_projects/assets/67184260/852241a4-ee9d-41e4-ace8-8b288e185cf9)

## Authors

Ayush Srivastav 

## License

This project is licensed under the MIT License - see the LICENSE.md file for details







