let firstNumber = "10"
let secondNumber = 4
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);

let numberString = "10"
console.log("Data type of n", typeof numberString);
let parsedNumber = parseInt(numberString)
console.log("Data type of n", typeof parsedNumber);

let decimalString = "99.89";
console.log(parseInt(decimalString));
console.log(parseFloat(decimalString));
console.log(Number(decimalString));
let invalidDecimalString = "99.89xyz";
console.log(parseInt(invalidDecimalString));
console.log(parseFloat(invalidDecimalString));
console.log(Number(invalidDecimalString));//NAN
