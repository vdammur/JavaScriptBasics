function add(num){
var sum = 0;
for (var i = 0; i<arguments.length;  i++){
if(typeof arguments[i] == "number")
  sum  = sum + arguments[i];
}
console.log(" SUM is " + sum);
}

add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);


greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);

function greatest(nums){
let max =0;

  for (var i = 1; i<arguments.length;  i++){
    if(typeof arguments[i] == "number"){
      if (arguments[i]>= max){
        max= arguments[i]
      }
    }
}
//console.log("Greatest num is " + max);
console.log(`Max is ${max}`);
}
