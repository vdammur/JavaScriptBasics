String.prototype.u = function(){
  return this.toUpperCase()
}

String.prototype.l = function(){
  return this.toLowerCase()
}

var str = "hello"
console.log(str.u());
console.log((str.l()));

//

Array.prototype.pl = function() {
 this.forEach(it => console.log(it))
}

Array.prototype.s = function(){
  return this.length
}

var arr = [1,3,4,2,5];
arr.pl();
console.log(arr.s());
