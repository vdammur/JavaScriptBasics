class Employee{
  constructor(name,salary){
    this.name=name;
    this.salary=salary;
  }
  work(){
    console.log(`Employee ${this.name} is working`);
  }
}

class Manager extends Employee{
  work(){
    super.work()
    console.log(`Manager ${this.name} is in meeting`);
  }
}

let m1 = new Manager("John", 10000)
m1.work()
