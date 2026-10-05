// 1.Average of 3 numbers
function Task1(){
    var n1=parseInt(document.getElementById("t1a").value);
    var n2=parseInt(document.getElementById("t1b").value);
    var n3=parseInt(document.getElementById("t1c").value);
    var avg=(n1+n2+n3)/3;
    document.getElementById("res1").innerText="Average = "+avg.toFixed(2);
}

// 2.Average of 3 numbers using DOM
function Task2(){
    let n1=parseInt(document.getElementById("t2a").value);
    let n2=parseInt(document.getElementById("t2b").value);
    let n3=parseInt(document.getElementById("t2c").value);
    let sum=n1+n2+n3;
    let Avg=sum/3;
    document.getElementById("res2").innerText="Average = "+Avg.toFixed(2);
}

// 3.Sum of first n natural numbers (Without Loop)
function Task3(){
    var n=parseInt(document.getElementById("t3n").value);
    var sum=(n*(n+1))/2;
    document.getElementById("res3").innerText="Sum = "+sum;
}

// 4.Average of first n natural numbers (Without Loop)
function Task4(){
    var n=parseInt(document.getElementById("t4n").value);
    var avg=(n+1)/2;
    document.getElementById("res4").innerText="Average = "+avg;
}

// 5.Profit percentage
function Task5(){
    let cp=parseInt(document.getElementById("t5cp").value);
    let sp=parseInt(document.getElementById("t5sp").value);
    let profit=sp-cp;
    let profit_percent=profit/cp*100;
    document.getElementById("res5").innerText="Profit % = "+profit_percent.toFixed(2);
}

// 6.Simple Interest
function Task6(){
    var P=parseInt(document.getElementById("t6p").value);
    var T=parseInt(document.getElementById("t6t").value);
    var R=parseInt(document.getElementById("t6r").value);
    var Interest=P*T*R/100;
    document.getElementById("res6").innerText="Simple Interest = "+Interest;
}

// 7.Missing angle of a triangle
function Task7(){
    var a1=parseInt(document.getElementById("t7a").value);
    var a2=parseInt(document.getElementById("t7b").value);
    var angle3=180-(a1+a2);
    document.getElementById("res7").innerText="Third angle = "+angle3;
}

// 8.Last digit of a number
function Task8(){
    let n=parseInt(document.getElementById("t8n").value);
    let ld=n%10;
    document.getElementById("res8").innerText="Last digit = "+ld;
}

// 9.Remove last digit of a number
function Task9(){
    let n=parseInt(document.getElementById("t9n").value);
    let rest=Math.floor(n/10);
    document.getElementById("res9").innerText="After removing last digit = "+rest;
}

// 10.First digit of a 3-digit number
function Task10(){
    let n=parseInt(document.getElementById("t10n").value);
    let fd=Math.floor(n/100);
    document.getElementById("res10").innerText="First digit = "+fd;
}

// 11.First digit of a 5-digit number
function Task11(){
    let n=parseInt(document.getElementById("t11n").value);
    let fd=Math.floor(n/10000);
    document.getElementById("res11").innerText="First digit = "+fd;
}

// 12.Celsius → Fahrenheit
function Task12(){
    var celsius=parseFloat(document.getElementById("t12c").value);
    var fahrenheit=(9/5*celsius)+32;
    document.getElementById("res12").innerText="Fahrenheit = "+fahrenheit.toFixed(2);
}

// 13.Fahrenheit → Celsius
function Task13(){
    var fahrenheit=parseFloat(document.getElementById("t13f").value);
    var celsius=(fahrenheit-32)*5/9;
    document.getElementById("res13").innerText="Celsius = "+celsius.toFixed(2);
}

// 14.Gross salary using Basic Salary, HRA & DA (HRA and DA in %)
function Task14(){
    var basic=parseInt(document.getElementById("t14b").value);
    var hra=parseInt(document.getElementById("t14h").value);
    var da=parseInt(document.getElementById("t14d").value);
    var gross=basic+(basic*hra/100)+(basic*da/100);
    document.getElementById("res14").innerText="Gross salary = "+gross;
}

// 15.Swap two numbers using a third variable
function Task15(){
    var a=parseInt(document.getElementById("t15a").value);
    var b=parseInt(document.getElementById("t15b").value);
    var c=a;
    a=b;
    b=c;
    document.getElementById("res15").innerText="Number1 = "+a+" , Number2 = "+b;
}

// 16.Swap two numbers without using a third variable
function Task16(){
    var a=parseInt(document.getElementById("t16a").value);
    var b=parseInt(document.getElementById("t16b").value);
    a=a+b;
    b=a-b;
    a=a-b;
    document.getElementById("res16").innerText="Number1 = "+a+" , Number2 = "+b;
}