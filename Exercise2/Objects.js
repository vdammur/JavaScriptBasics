var obj1 = new Object()
var car = new Object()
car.model = "BMW"
car.yearOfMake = 2017
car.drive = (miles) => console.log(`Driving at a speed of ${miles} per hour`);
car.drive(30)

// Another style writing same:

var myCar = {
  model : "Santro",
  year : 2010,
  drive: function () {
    console.log("Driving");
  }
}

console.log(myCar);

//

var person = {
  name: "RAM",
  age: 12,
  eat(){

  },
  sleep(){

  },
  work(){

  }
}

console.log(person.name);
