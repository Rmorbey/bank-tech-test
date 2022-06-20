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