let principalAmount = document.getElementById("amount").value;
let rateInterest = document.getElementById("rate").value;
let totalYears = document.getElementById("years").value;

let answer = principalAmount * rateInterest * totalYears / 100;

function ssubmit(){
    let ans = document.getElementById("result").innerHTML = "Interest : " + answer;
    let colors = document.querySelector("#result");
    colors.style.backgroundColor = "red",
    colors.style.color = "white",
    console.log(answer);
}

let a = document.querySelector("body")
let btn = document.querySelector("#dark")
let btn2 = document.querySelector("#light")

btn.addEventListener("click",function(){
    a.style.backgroundColor = "black"
})

btn2.addEventListener("click",function(){
    a.style.backgroundColor = "white"
})