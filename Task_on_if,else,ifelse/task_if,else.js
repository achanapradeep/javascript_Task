// if conditional statements 
// 1)Take a number as input. If it is positive, print "Positive".
let n=1 
if(n>0){
    console.log("N is a Positive Numbers")
}

// 2)If age is 18 or more, print "Eligible to vote".
let age=23
if(age>=18){
    console.log("Eligible to vote")
}

// 3)If N is divisible by both 3 and 5, print "FizzBuzz".
let Num=15
if(Num%3==0 && Num%5==0){
    console.log("FizzBuzz")
}
// 4)If year is a leap year, print "Leap year".
let year=1900
if(year%4==0){
    console.log("leap year")
}

// 5)triangle
var s1=80
var s2=60
var s3=40
if(s1+s2>s3 || s2+s3>s1 || s1+s3>s2){
    console.log("Forms a valid Triangle")
}

// 6)Take a 3-digit number . If it is an Armstrong number, print "Armstrong number".
var number=153
if(1**3+5**3+3**3==153){
    console.log("This is a Amstrom number")
}

// If else statements
// 7)Take a number . Print "Even" or "Odd".
let a=24
if(24%2==0){
    console.log("This is even number")
}
else{
    console.log("This is odd number")
}

// 8)Take two numbers . Print the larger one.
let b=12
let c=78
if(b>c){
    console.log("B is greate than number")
}
else{
    console.log("c is greate than number")
}

// 9)Take a character . Print whether it is a vowel or a consonant.
var w="P"
if(w=="a" || w=="e" || w=="i" || w=="o" || w=="u"  || w=="A" || w=="E" || w=="I" || w=="O" || w=="U"){
    console.log("w is a Vowel")
}
else{
    console.log("w is a Consonent")
}

// 10)Take a password . Print "Strong" if its length is at least 8 and it contains a digit, otherwise "Weak".
var password="pradeep1"
if( password>=8){
    console.log("password is stronger")
}
else{
    console.log("password is weaker")
}

// 11)Take a year . Print "Leap year" or "Not a leap year" using the full rule (divisible by 4, except centuries unless divisible by 400).
var y=1900
if(year%4==0 && year%100!=0 || year%400==0){
    console.log("leap year")
}
else{
    console.log(" Not a leap year")
}

// 12)Take a number. Print "Palindrome" or "Not a palindrome" without converting it to a string.
var n1=1231
var n2=1321
if(n1==n2){
    console.log("Number is a palindrome")
}
else{
     console.log("Number is  not a  palindrome")
}

// if else if statements 
// 13)Take a number . Print "Positive", "Negative", or "Zero".
var d=-12
if(d<0){
    console.log("Negative Number")
}
else if (d>0){
    console.log(" positive Number")
}
else{
    console.log(" Zero")
}

// 14)Take a number from 1 to 7. Print the day of the week, or "Invalid" if out of range.
 let d = Number(prompt("Enter 1-7"));
  if (d === 1) console.log("Monday");
  else if (d === 2) console.log("Tuesday");
  else if (d === 3) console.log("Wednesday");
  else if (d === 4) console.log("Thursday");
  else if (d === 5) console.log("Friday");
  else if (d === 6) console.log("Saturday");
  else if (d === 7) console.log("Sunday");
  else console.log("Invalid");


//   15)Take marks (0-100) as input. Print the grade: A (90+), B (75-89), C (50-74), D (35-49), F (below 35).
let m = Number(prompt("Enter marks (0-100)"));
  if (m >= 90) console.log("A");
  else if (m >= 75) console.log("B");
  else if (m >= 50) console.log("C");
  else if (m >= 35) console.log("D");
  else console.log("F");

//   16)Take three numbers as input. Print the largest, without using
let a1 = Number(prompt("First number"));
let b1= Number(prompt("Second number"));
let c1 = Number(prompt("Third number"));
if (a1 >= b1 && a1 >= c1) {
console.log(a1);
} else if (b1 >= a1 && b1 >= c1) {
console.log(b1);
} else {
console.log(c1);
}


// 17)Take units of electricity consumed as input. Calculate the bill: first 100 units at ₹5, next 100 at ₹7, next 100 at ₹10, above 300 at ₹15.
let u = Number(prompt("Enter units consumed"));
  let bill;
  if (u <= 100) {
    bill = u * 5;
  } else if (u <= 200) {
    bill = 100 * 5 + (u - 100) * 7;
  } else if (u <= 300) {
    bill = 100 * 5 + 100 * 7 + (u - 200) * 10;
  } else {
    bill = 100 * 5 + 100 * 7 + 100 * 10 + (u - 300) * 15;
  }
  console.log("Bill: ₹" + bill);

//   18)Take the coefficients a, b, c of a quadratic equation as input.
//  Print whether the roots are "Real and distinct", "Real and equal", or "Complex", and print the roots.

  let a = Number(prompt("a"));
  let b = Number(prompt("b"));
  let c = Number(prompt("c"));
  let d = b * b - 4 * a * c;
  if (d > 0) {
    console.log("Real and distinct");
    console.log((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
  } else if (d === 0) {
    console.log("Real and equal");
    console.log(-b / (2 * a));
  } else {
    console.log("Complex");
    let re = -b / (2 * a);
    let im = Math.sqrt(-d) / (2 * a);
    console.log(re + " + " + im + "i", re + " - " + im + "i");
  }