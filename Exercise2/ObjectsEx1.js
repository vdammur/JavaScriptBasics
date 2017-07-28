// Book title, price buy(store)

var Book  = {
  title: "MyBook",
  price: "$10",
  buy(store){
    console.log(`Buying the ${this.title} for ${this.price} at store ${store}`);
  }
}

Book.buy("Walmarts")
Book.title = "NewBook"
Book.price = "$20"
Book.buy("Amazon")
