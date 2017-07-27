//Functional Style
let compute = function(operation){
	let a=4,b=2;
	console.log(operation(a,b));
}

let add = function(num1,num2){ return num1+num2;}
let subtract = function(num1,num2){ return num1-num2;}

compute(add)
compute(subtract)
compute(function(n1,n2){return n1*n2});

//Imperative style
/*
function add(a,b){
	console.log(a+b);
}
function subtract(a,b){
	console.log(a-b);
}
*/
