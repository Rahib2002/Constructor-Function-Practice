function CreateAccount(ac_no, name, type, balance){
    this.ac_no = ac_no;
    this.name = name;
    this.type = type;
    this.balance = balance;

    this.deposit = function(amt){
        this.balance += amt;
    }

    this.withdraw = function(amt){
        if(amt <= this.balance){
            this.balance -= amt;
        }
    }

    this.checkBalance = function(){
        console.log('The total Account Balance is: ', this.balance);
    }

    this.Active = true;
}


let acc1 = new CreateAccount(12345, "Rahib", "saving", 500000)

acc1.deposit(100000)

console.log(acc1);

acc1.winthdraw(300000)

console.log(acc1)

acc1.checkBalance()

acc1.Active()




