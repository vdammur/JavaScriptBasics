let person = {
  name:"Sam", age:12, address: {city:"Bangalore"}
}

//old style
let a = person.name;
console.log(a);

//Destructuring
var {name, age} = person
console.log(name, age);

function printLocation({name, address:{city}}){
console.log(name, city);
}

printLocation(person)
