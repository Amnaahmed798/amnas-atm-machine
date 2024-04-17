#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "atm",
        message: "enter your pin",
        type: "number",
    }
]);
console.log(pinAnswer);
if (pinAnswer.atm === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("your remaining balance is" + myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is" + myBalance);
    }
}
else {
    console.log("incorrect pin code");
}
