# bank-tech-test

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
## Description

A simple application that allows a customer to have a bank account where they can deposit and withdraw money, as well as view their statement which contains their up to date transaction history in reverse order. The application can be run in Node REPL.

## How to install, run the program and tests.

### How to install
1. Clone this repo and `cd` in the project directory.
2. Run `npm install` to install the dependencies.

### How to run the program
1. Run `node` in your terminal
2. Type `.load ./bankAccount.js` to load up the application.
3. Type `let bank = new BankAccount();` to create a new instance of BankAccount.
4. Now run the app using `bank.depositMoney(1000);` to deposit an amount, `bank.withdrawMoney(600);` to withdraw an amount and `bank.viewStatement();` to see a statement of your transaction history.

<img width="265" alt="Screenshot 2022-06-22 at 14 43 55" src="https://user-images.githubusercontent.com/101583630/175057280-3cba1e75-26b3-4b90-b589-1f35fa8cf10e.png">

### How to run tests
1. Type `npx jest` to run all tests.
2. Type `jest --coverage` to see full coverage.

<img width="556" alt="Screenshot 2022-06-22 at 14 32 13" src="https://user-images.githubusercontent.com/101583630/175057207-bbbde1f9-a0a3-4db7-a053-b6474a83e252.png">

## My Approach

1. I first started out by reading the criteria and building an input-output table that took the clients requirements into account.
2. I then thought about all the things I'd need.
3. I designed a wireframe of two classes.
4. I then thought about User Stories.
5. I then started to write my first test.
6. I followed a structured TDD approach. Following a strict Red - Green (Pass the test in the simplest way possible, often hard coding. Then commit) - Refactor (If I needed to after my tests required more complex logic. Otherwise I moved straight onto writing the next failing Red test until I needed to refactor) - Repeat.
7. I started with the BankAccount class, I then moved onto the Transaction class. Both following the above structure.
8. At the end I thought about additional edge cases and wrot User stories for them. I didn't have the time to implement the User Stories. I also thought about potentially splitting BankAccount into a deposit class which would catch and throw back errors. A withdraw class that would also catch and throw back errors. As well as a statement class to deal with the handling of formatting the statement for the customer to view.

### Input - output table

| input              | program    | output                                |
| :----------------- | ---------- | ------------------------------------- |
| deposit            |            |                                       |
| 1000 on 10-01-2023 | does stuff | date     . credit  . debit  . balance |
|                    |            | 10/01/23 . 1000.00 .        . 1000.00 |
|                    |            |                                       |
| deposit            |            |                                       |
| 2000 on 13-01-2023 | does stuff | date     . credit  . debit  . balance |
|                    |            | 13/01/23 . 2000.00 .        . 3000.00 |
|                    |            | 10/01/23 . 1000.00 .        . 1000.00 |
|                    |            |                                       |
| withdraw           |            |                                       |
| 500 on 14-01-2023  | does stuff | date     . credit  . debit  . balance |
|                    |            | 14/01/23 .         . 500.00 . 2500.00 |
|                    |            | 13/01/23 . 2000.00 .        . 3000.00 |
|                    |            | 10/01/23 . 1000.00 .        . 1000.00 |


### Wireframe Classes

<img width="627" alt="Screenshot 2022-06-22 at 14 48 49" src="https://user-images.githubusercontent.com/101583630/175057347-a6b19a2c-db98-4a18-85f8-f662462c8188.png">

## User Stories 

### BankAccount

```
As a customer,
So I can save for my future,
I would like to open a bank account
```

```
As a Bank Manager,
So we can look after a customers money,
I would like the Bank Account to start with a balance of 0
```

### Depositing

```
As a customer,
So I can save money,
I would like to be able to deposit money into my Bank Account
```

### Withdrawing

```
As a customer,
So I can use my money,
I would like to be able to withdraw money from my Bank Account
```

### Account Statement

```
As a customer,
So I can keep track of my money,
I would like a statement to show my deposit and withdraw transactions, date of transaction and balance afterwards
```

### Transactions

```
As a Bank Manager,
So we can keep our Accounts up to date,
I would like to log each transaction with date, type of transaction, amount and balance after.
```

### Edge Cases

```
As a Bank Manager,
So we can look after a customers money,
I would like to notify them if they have insufficient funds and what their current balance is
```

```
As a Bank Manager,
So we can look after a customers money,
I would like to notify them if their account is empty
```

```
As a Bank Manager,
So we can look after a customers money,
I would like to notify them of an incorrect input amount
```

## How I structured my code

### BankAccount class

* I first structured my three money handling methods, depositing, withdrawing and checking balance.
* I had originally considered allowing the customer to input a date as a second argument as well as the amount of money, but after cosideration I thought this didn't reflect a real life scenario. I would have to find another way to implement date.
* After I had successfully introduced my methods that handled adding and minusing from the current balance I moved onto how I would collect transactions.

### Transaction class

* I first wrote the constructor to hold the different pieces of data that I'd need to know when a customer made a deposit or withdrawal. This included, the type, the amount, the balance afterwards and the date.
* Like I mentioned above I had initially chosen to allow the customer to dictate the date, but decided against it.
* I did a quick google search and found a helpful stack overflow post that suggested the two date methods to help me format the date how I wanted it, which was DD/MM/YYYY.
* This solved the problem as it would display the current date automatically in the transaction. Taking it out of the hands of the user would increase safety and any human error.

### BankAccount class

* After finishing off the Transaction class I injected it into my BankAccount Class and used it to store my single transaction into an array of transactions.
* To display these transactions that I've collected I would then need to sort through all of the users transactions.
* Following the criteria I copied the header of the statement, as well as the collumns.
* After sorting through the transactions I formatted them into their respective credit and debit collumns and added them to the statement array in reverse order and joined them so they'd start their own line.
* I then viewed the statement attaching both the header and the sorted transactions together.

## Further improvements

* I think I could have done a better job at using mocks so each class with testing solely on the content of the specific class and not dependant on other classes.
* I would have also liked to add the edge cases I identified and possibly splitting into more classes.

## Technologies used.

* JavaScript
* Node.js
* Jest
* ESLint



