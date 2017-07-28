function Book(theTitle, thePrice){
  //var title = theTitle // throws error. var is function scoped. We should use this keyword which refers to function in JS
  //var price = thePrice // throws error
  this.title = theTitle
  this.price=thePrice
  this.buy = function(store){
    console.log(`Buying ${this.title} from ${store}`);
  }
  this.read = () => console.log(`Reading ${this.title}`);
}

var b1 = new Book("MyBook", 100)
console.log(b1.title, b1.price);
b1.buy("Amazon")
b1.read()
