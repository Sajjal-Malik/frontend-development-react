// 1. Define the interface contract
interface NewUser {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
    getGreeting(): string;
}

// 2. Create an object that adheres to the interface structure
const adminUser: NewUser = {
    id: 101,
    username: "Dev",
    email: "dev@example.com",
    isActive: true,
    getGreeting() {
        return `Hello, my username is ${this.username}`;
    }
};

console.log(adminUser.getGreeting());




interface Product {
    name: string;
    price: number;
    description?: string;
}

const laptop: Product = { name: "MacBook", price: 1200 };




interface Point {
    readonly x: number;
    readonly y: number;
}

const coordinate: Point = { x: 10, y: 20 };
// coordinate.x = 5; // Error





interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
    bark(): void;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever",
    bark() { console.log("Woof!"); }
};



interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number
}

interface MovieGenre extends MovieDetails {
    genre: string
}

const movie1: MovieGenre = {
    name: "John Wick 4",
    ratings: 8.5,
    genre: "Action Thriller",
    printMovieInfo(name: string, price: number, ratings: number): string | number {
        return `Movie name ${name}, Online Price ${price} with Updated ratings: ${this.ratings}.`;
    }
}

const movieDetail = movie1.printMovieInfo('John Wick 3', 99.99, 7.5);
console.log(movieDetail);






interface Vehicle {
    speed: number;
    startEngine(): void;
}

class Car implements Vehicle {
    speed: number = 0;

    startEngine() {
        console.log("Engine started.....Vroom!");
    }

    stopEngine() {
        console.log("Engine stopping......!");
    }
}

const carObj = new Car();
carObj.startEngine();
carObj.stopEngine();