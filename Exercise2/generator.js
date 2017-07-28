let sample = function*(){
	console.log("#1");
	yield;
	console.log("#2");
	yield;
	console.log("#3");
}
let gen = sample()
gen.next();
gen.next();
gen.next();
