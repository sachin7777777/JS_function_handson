// Q1 =
const Q1 = function (){
    let x ='Answer to Q1'
    console.log(x)
}()

//Q2 =
const addition = function (a,b){
    return a+b
}
console.log(5+7)

//Q3 =
const Multiply = (a,b) => a*b;
const result = Multiply(12,5);
console.log(result);

//Q4 = 
var x = 21;
var female = function () {
    console.log(x);
    var x = 20;
};
female ();
 
//Q5 =
var x = 21;
female ();
console.log(x)
function female() {
    console.log(x);
    var x = 20;
};



//Q6 = 
var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
 };
 console.log(x);


//Q7 = 
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
    let num = 6;
  console.log(factorial(num))


  
//day 2 qus = 

//q1 =
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));



q2 =
Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}



//q3 =
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();


//q4 =
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")