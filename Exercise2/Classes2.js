class Book{
  constructor(name, price){
    this.title=name;
    this.price=price;
  }
  buy(store){
    console.log(`Buying ${this.title} from ${store}`);
  }
  read(){
    console.log(`Reading ${this.title}`);
  }
}

var b1 = new Book("Groovy", 2000)
b1.buy("Amazon")
b1.read()
console.log(typeof Book);
