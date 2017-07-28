var num1 =10
var num2 =20

var a = num1, b = num2
console.log(a,b);

//Destructuring

var[x,y] = [num1, num2]
console.log(x, y);

//Swapping

var[y, x] = [x, y]
console.log(x, y);

var [var1, var2] = [num1, num2]
console.log(var1, var2);


function dosomthing(){
  return [1,2,3]
}
var arr = dosomthing()
console.log(arr);

var [p,q,r] = dosomthing()
console.log(p,q,r);
