var arr = [1,2,3,4,5,6,30,56,84,23,100];

//Print all the numbers
arr.forEach(item => console.log(item))
console.log();

//Print the sum of all numbers
var total = arr.reduce((sum=0,item)=> sum + item,0)
console.log(`Total: ${total}`);
console.log();

//Print the first odd number
var firstOdd = arr.find(item => item % 2 != 0)
console.log(`First odd: ${firstOdd}`);

//Generate an list of squares of all numbers
var listOfSquares = arr.map(item => item * item)
console.log(listOfSquares);
console.log();

//Generate a list of numbers divisible by 5.
var listOfNumbersDivBy5 = arr.filter(item => item % 5 == 0)
console.log(listOfNumbersDivBy5);
console.log();

//Print all the even numbers
arr.filter(item => item % 2 == 0).forEach(item => console.log(item))
