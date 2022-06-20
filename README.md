# bank-tech-test

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


Input will be two arguements.

function    (money,  date    )
depositMoney(1000, 10-01-2023)
withdrawMoney(500, 14-01-2023)

Output will be a structured table with data.

| date       |     | credit  |     | debit  |     | balance |
| :--------- | --- | ------- | --- | ------ | --- | ------- |
| 14/01/2023 |     |         |     | 500.00 |     | 2500.00 |
| 13/01/2023 |     | 2000.00 |     |        |     | 3000.00 |
| 10/01/2023 |     | 1000.00 |     |        |     | 1000.00 |


Display the statement no arguments.

printStatement()

--------

Things I'll need.

balance
min balance
transaction history
deposit function
withdraw function
check balance function
print statement function

----------

Classes

BankAccount

Transaction

----------

User Stories 

----------

BankAccount

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

```
As a Bank Manager,
So we can look after a customers money,
I would like the Bank Account to have a min account balance of 0
```

Edge Cases

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

Depositing

```
As a customer,
So I can save money,
I would like to be able to deposit money into my Bank Account
```

Withdrawing

```
As a customer,
So I can use my money,
I would like to be able to withdraw money from my Bank Account
```

Account Statement

```
As a customer,
So I can keep track of money,
I would like a statement to show my deposit and withdraw transactions and current balance
```
----------

Testing

deposit

that money gets deposisted

withdraw

that money gets withdrawn

check balance

shows correct balance after an interaction

print statement

shows a statement with correct date, either deposit or withdraw and current balance

=======

edge case testing

withdraw amount can't go below min balance

display messages for insufficient funds (can't go below min balance)

if balance is 0

display message if current balance is 0 and you try to withdraw money

deposit/withdraw argument not an integer

only positive numbers

display message for wrong input


=======

---------

Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00