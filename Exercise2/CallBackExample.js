function dosomthing(){
console.log("#1");
let num = 222;
setTimeout(function(){
  print(num)
},6000)
console.log("End of dosomthing");
}

function print(num){
  console.log(`Printing ${num}`);
}
dosomthing()
