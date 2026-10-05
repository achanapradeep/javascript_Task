function average(){
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
    let n3=parseInt(document.getElementById("num3").value);
    let sum=n1+n2+n3 ;
    let Avg=sum/3 ;
    document.getElementById("res").value=Avg;
}