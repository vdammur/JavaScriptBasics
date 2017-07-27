// "var" is function scoped
// "let" is block scoped
// "const" is like final variable, Read only and block scoped

const debug_flag="DEBUG"
// debug_flag="INFO" -> ERROR
console.log(debug_flag);

function hi(){ 
  var i=100
  if(i % 2 == 0){
    let avar = 1000;
    console.log(avar)
  }
  else{
    console.log(avar); //ERROR
  }
}
hi()
//...............................................................//

function hi2(){
var i =10;
  console.log(i);
}
//console.log(i); ERROR as var is block scoped

hi2()
//...............................................................//

{
  var k =222
  let j = 333
  console.log(k);
  console.log(debug_flag);
}
console.log(k);
//console.log(j); ERROR as j is of type let and it is block scoped
//...............................................................//
