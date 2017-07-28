class Square{
  constructor(side){
    this.side=side;
  }
  calcArea(){
    return this.side*this.side;
  }
  get area(){
    return this.side*this.side;
  }
  set area(value){
    this.side=value;
  }
}

let sq1 = new Square(10)
console.log(`Area : ${sq1.calcArea()}`);
console.log(`Area: ${sq1.area}`);
sq1.area = 20;
console.log(`Area: ${sq1.calcArea()}`);
