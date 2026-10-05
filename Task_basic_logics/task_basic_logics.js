let firstName = "Innomatics";
let middleName = "Research";
let lastName = "Labs";

console.log("My first name is " + firstName + ", middle name is " + middleName + ", last name is " + lastName);
console.log(`My full name is ${firstName} ${middleName} ${lastName}`);

let numberValue = "10";
if (numberValue == 10) {
    console.log("numberValue is 10");
}

if (true) {
    console.log("Condition is True");
} else {
    console.log("Condition is False");
}

let sampleNumber = 5;
if (sampleNumber == 10) {
    console.log("sampleNumber is 10");
} else {
    console.log("sampleNumber is 5");
}

let checkNumber = 12;
if (checkNumber % 5 == 0) {
    console.log("checkNumber is divisible by 5");
} else {
    console.log("checkNumber is not divisible by 5");
}

let firstNumber = 10;
let secondNumber = 20;
if (firstNumber == 10 && secondNumber == 10) {
    console.log("Both numbers are equal to 10");
} else {
    console.log("Both numbers are not equal to 10");
}

if (NaN) {
    console.log("If block will be executed");
} else {
    console.log("Else block will be executed");
}

if (false) {
    console.log("First condition is true: If block");
} else if (false) {
    console.log("First condition is false: Second condition is true");
} else if (false) {
    console.log("Third condition is true");
}

if (true) {
    console.log("First if block");
}
if (true) {
    console.log("Second if block");
}
if (true) {
    console.log("Third if block");
}

if (true) {
    console.log("Outer condition is true - outer if is executed");
    if (true) {
        console.log("Inner condition is true - inner if executes");
    } else {
        console.log("Inner condition is false - inner else executes");
    }
} else {
    console.log("Outer condition is false - outer else is executed");
}

let positiveNumber = 5;
if (positiveNumber > 0) {
    console.log(`${positiveNumber} is a positive number`);
    if (positiveNumber % 2 == 0) {
        console.log(`${positiveNumber} is even`);
    } else {
        console.log(`${positiveNumber} is not even`);
    }
} else {
    console.log(`${positiveNumber} is a negative number`);
}

let switchNumber = 2;
switch (switchNumber) {
    case 1:
        console.log("Case 1 executed");
        break;
    case 2:
        console.log("Case 2 executed");
        break;
    case 3:
        console.log("Case 3 executed");
        break;
    default:
        console.log("Default block executed");
}

let switchValue = "12";
switch (switchValue) {
    case 12:
        console.log("Case 12 executed");
        break;
    case "12":
        console.log("Case '12' executed");
        break;
    case -12:
        console.log("Case -12 executed");
        break;
    default:
        console.log("Default block executed");
}

let operator = "*";
let operandOne = 10;
let operandTwo = 5;

switch (operator) {
    case "*":
        console.log(`Multiply = ${operandOne * operandTwo}`);
        break;
    case "+":
        console.log(`Add = ${operandOne + operandTwo}`);
        break;
    case "-":
        console.log(`Subtract = ${operandOne - operandTwo}`);
        break;
    default:
        console.log("Enter a valid operator");
}

let switchCaseValue = 10;
switch (switchCaseValue) {
    case 1:
        console.log("Case 1 is executed");
    case 2:
        console.log("Case 2 is executed");
    case 3:
        console.log("Case 3 is executed");
    default:
        console.log("Default case is executed");
}