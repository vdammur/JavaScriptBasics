/*
Create a class called Account that does the following.
1) It has an balance that needs to be initialized with a value greater than 10000
2) Methods to deposit, withdraw. If there isn't sufficient balance don't allow withdraw.
3) You can withdraw only 3 times. After that you will be charged 0.5% of the amount as Fees.
4) Method to print the statement. The statement shows the date, type of transaction(Deposit, Withdraw, Fees ...etc) and amount
5) Create an object of Account(20000) and call deposit twice and withdraw 5-6 times. Print the statement and Balance finally
*/

class Account{

  constructor(actname, initbalance){
    if (initbalance<10000)
      throw new Error ("Insufficient Balance")
    this.actname=actname;
    this.balance=initbalance;
    this.withdrawcount=0;
    this.statement = [];
  }
  deposit(amt){
    console.log(`Depositing to ${this.actname} with Balance ${amt}`);
    this.balance += amt;
    this.statement.push({
      type:"Deposit",
      date: new Date(),
      amt
    })
  }
  withdraw(actname, amt){
    console.log(`Tring withdraw from ${actname}`);
    if (this.balance>10000){
      this.balance -= amt;
      this.withdrawcount++;
      this.statement.push({
        type:"Deposit",
        date: new Date(),
        amt
      })
    }
    if (this.withdrawcount > 3){
      this.balance = this.balance*0.95
      console.log("Charging fee");
    }
    console.log(`Remaining balance is ${this.balance}`);
  }

  printStatement(){
		console.log('***STATEMENT***');
		this.statement.forEach(it => {
			console.log(`Type: ${it.type}(${it.date.toLocaleString()}), Amount: Rs.${it.amt}`);
		})
	}
}


try{
var myact = new Account("SB", 20000)

myact.deposit(30000)
console.log(myact.balance);
myact.withdraw("SB",2000)
myact.withdraw("SB",2000)
myact.withdraw("SB",2000)
myact.withdraw("SB",2000)
myact.withdraw("SB",2000)
myact.withdraw("SB",2000)
myact.printStatement()
}
catch(e){
  console.log(`Error: ${e.message}`);
}
