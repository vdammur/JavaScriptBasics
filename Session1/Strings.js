// String Interpolation
let str1 = "hello"
let name = "sam"

let str2 = `${str1} ${name}`
console.log(str2);
console.log(typeof str2);

console.log(str1.length);
console.log(str1.toUpperCase());

let str3 = str1 + " " + name
console.log(str3);

let multilinestr = `Hi there !
How are you?
I'm doing fine
`
console.log(multilinestr);

let trymulti = "Hi"+
"Hello" +
"Yay"
console.log(trymulti);

let price = 25
console.log(`Price is Rs.${price}`);
price=26
