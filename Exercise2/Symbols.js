// Symbol - new data type
// used to iterate collections

var jan = Symbol("January")
var feb = Symbol("February")

var blank = Symbol()

console.log(jan.toString());
console.log(jan === "January"); // === mathches data types
console.log(jan === feb); // each sympbol is uniquiqe and have unique references
console.log(jan === jan);
