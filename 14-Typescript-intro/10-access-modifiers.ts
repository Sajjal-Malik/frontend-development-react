class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const dog = new Animal("Buddy");
console.log(dog.name); // Allowed


class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
}

class SavingsAccount extends BankAccount {
    check() {
        // console.log(this.balance); // Error
    }
}

const bankAccount = new BankAccount(100);
// console.log(account.balance); // Error


class Employee {
    protected salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }
}

class Manager extends Employee {
    getBonus() {
        return this.salary * 0.2; // Allowed
    }
}

const emp = new Employee(5000);
// console.log(emp.salary); // Error
