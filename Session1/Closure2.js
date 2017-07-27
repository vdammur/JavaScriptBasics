var nums = [1,2,3,4]

let operate = function (operation){
  operation(nums);
}


let add = function(nums){
  let sum = 0;
  for (var i=0; i<nums.length; i++){
      sum+=nums[i]
    }
    console.log("Sum of nums " + sum);
}

let printeven = function(nums){
  for (var i=0; i<nums.length; i++){
      if (nums[i]%2 == 0)
      console.log("Even of Nums are " +nums[i]);
    }
}

let printsmall = function(nums){
  var min = Infinity
  for (var i = 1; i<nums.length;  i++){
  if(typeof nums[i] == "number"){
    if (nums[i] <= min)
      min= nums[i]
  }
}
console.log("Smallest of Nums is " + min);
}

let printallnums = function(nums){
  console.log("Print all nums ");
  console.log(...nums);
}

let printfirstodd = function(nums){
  for(var i=0; i<nums.length; i++){
    if (nums[i]%2 != 0)
    console.log("First Odd num is " + nums[i]);
  }
}

operate(add)
operate(printeven)
operate(printsmall)
operate(printallnums)
operate(printfirstodd)

// Using for each

var numbers = [1,2,3,4,5,6,30,56,84,23,100];
numbers.forEach(function(num){
	console.log(num);
});

console.log("Even nunms are ");
numbers.forEach(function(num){
  if(num%2 == 0)
  console.log(num);
})

//Prnint Sum


var total = numbers.reduce(function(sum=0, item){
return sum+item
})

console.log(`Total is ${total}`);
