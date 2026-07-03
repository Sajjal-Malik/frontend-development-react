class User {
    // 1. Properties (Fields)
    username: string;
    age: number;

    // 2. Constructor
    constructor(username: string, age: number) {
        this.username = username;
        this.age = age;
    }

    // 3. Methods
    sayHello(): string {
        return `Hello, my name is ${this.username}.`;
    }
}

// Instantiation
const account = new User("Alice", 28);
console.log(account.sayHello());


class Account {
    public name: string;
    private balance: number;
    protected routingNumber: number;

    constructor(name: string, balance: number, routing: number) {
        this.name = name;
        this.balance = balance;
        this.routingNumber = routing;
    }
}

const myAcc = new Account("Bob", 5000, 12345);
console.log(myAcc.name);          // Allowed
// console.log(myAcc.balance);    // Error
// console.log(myAcc.routingNumber); // Error
