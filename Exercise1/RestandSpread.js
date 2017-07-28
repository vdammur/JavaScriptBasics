function test(a,b,...args){
console.log(a,b);
console.log(args);
}
test(1,2,3,4,5,6,7)

function test2(test11){
  console.log(arguments);
}

test2(1,2,3,4,5,6,7)

// spread operator

var numbers= [1,2,3]

function print(a,b,c){
  console.log(a,b,c);
  console.log(c,b,a);
}
print(...numbers)

var str = "SAP"
print(...str)
