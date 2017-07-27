//Define a function with same name any number of args
// Invoke a function by pasing any number of args
// Function with no args gets executed
//

function work(hours){
  console.log(`Works for ${hours} everyday`);
}

function work(hours, days, months) {
  console.log(`Works for ${hours}, ${days} and ${months} everyday`);
}

function work(){
  //console.log("I Hate working");
  //console.log(arguments);
  for(var i=0; i<arguments.length;i++){
    console.log(arguments[i]);
  }

}

work()
work(12)
work(12,5,12)
