//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions{
    uint256 transactionCount;
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct{
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    TransferStruct [] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        // reciever is the first parameter passed
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[]memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
         return transactionCount;
        
    }
}
// first word is going to be the type, seocnd word is going to be a variable nam in the event transfer e 

// can use let for the variable, Solitidy uses OOP, 

// need to delcare functions if they are public

// msg.sender is an object already built in solidity

// needs ; at the end of each line of code just like JS

// this is the ethereum solidity smart contract, it is used to transfer the amount and to store all of the  transactions that come through it 