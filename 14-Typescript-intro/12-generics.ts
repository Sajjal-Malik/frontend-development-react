
function holdingCell<T>(input: T): T {
    return input;
}

const standardString = holdingCell("hello");
const standardNumber = holdingCell(123);
const standardBoolean = holdingCell(true);


function arrayHoldingCell<T>(inputArray: T[]): T[] {
    return inputArray;
}

const standardStringArray = arrayHoldingCell(["apple", "banana"]);
const standardNumberArray = arrayHoldingCell([1, 2, 3]);
const standardBooleanArray = arrayHoldingCell([true, false]);



interface Box<T> {
    label: string;
    content: T;
}


const textBox: Box<string> = {
    label: "Journal Entry",
    content: "Today I learned TypeScript Generics!"
};

const scoreBox: Box<number> = {
    label: "High Score",
    content: 9500
};


function getFirstItem<T>(arr: T[]): T {
    return arr[0];
}

const names = ["Alice", "Bob", "Charlie"];
const primeNumbers = [1, 3, 5, 7, 9];

const firstName = getFirstItem(names);
const firstPrime = getFirstItem(primeNumbers);



function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string, value: T } {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)]
    return { key: randKey, value: obj[randKey] };
}

const fruitsObj = { a: "apple", b: "banana", c: "cherry" };
// const randomFruitsPair = getRandomKeyValuePair<number>(fruitsObj);
// console.log(randomFruitsPair);

const numericObj = { one: 1, two: 2, three: 3 };
const randomNumbersPair = getRandomKeyValuePair<number>(numericObj);
console.log(randomNumbersPair)




function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
    return arr.filter(arg => condition(arg));
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = filterArray(numbersArray, (num) => num % 2 === 0);
console.log(filteredArray);


interface Fruit {
    name: string;
    color: string;
}


const fruitsArray: Fruit[] = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Orange", color: "Orange" },
    { name: "Cherry", color: "Red" }
]
const filteredFruits = filterArray<Fruit>(fruitsArray, (fruit) => fruit.color === "Red");
console.log(filteredFruits);


function reversePair<T, U>(pair: [T, U]): [U, T] {
    return [pair[1], pair[0]];
}


const myPair: [string, number] = ["Apple", 1];
const reversed = reversePair(myPair);




interface NamedObject {
    name: string;
}

function logAndMerge<T extends NamedObject, U>(obj: T, extraInfo: U) {
    console.log(`Processing item: ${obj.name}`);

    return {
        ...obj,
        metadata: extraInfo,
        processedAt: new Date()
    };
}

const userAccount = { name: "John Doe", role: "Admin", email: "john@test.com" };
const technicalDetails = { IP: "192.168.1.1", active: true };

const systemLog = logAndMerge(userAccount, technicalDetails);


console.log(systemLog.name);
console.log(systemLog.role);
console.log(systemLog.metadata.IP);
console.log(systemLog.processedAt);


function runTests() {
    console.log("--- Box Output ---");
    console.log(`${textBox.label}: ${textBox.content}`);
    console.log(`${scoreBox.label}: ${scoreBox.content}`);

    console.log("\n--- Array Output ---");
    console.log(`First Name: ${firstName.toUpperCase()}`);
    // console.log(`First Prime: ${firstPrime.toFixed(2)}`);

    console.log("\n--- Merge Output ---");
    console.log(`Merged Result:`, systemLog);
}

runTests();





class Container<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}


const stringContainer = new Container<string>("Hello World");
const text = stringContainer.getContent();

const numberContainer = new Container(42);
const num = numberContainer.getContent();





interface HasId {
    id: number;
}

class Repository<T extends HasId> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    findItem(id: number): T | undefined {
        return this.data.find(item => item.id === id);
    }
}

const userRepo = new Repository<{ id: number; name: string }>();
// const errorRepo = new Repository<string>(); 
