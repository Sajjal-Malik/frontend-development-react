type Person = { firstName: string, lastName: string, age: number };

const person: Person = {
    firstName: "Chris",
    lastName: "Hemsworth",
    age: 31,
}

console.log(person);
console.log(typeof person);

type NewPerson = { name: string, age: number, location: string };

function printPerson(): NewPerson {
    return {
        name: "Ben Afleck",
        age: 32,
        location: "USA"
    };
}

console.log(printPerson());
console.log(typeof printPerson());


type UserInfo = {
    first: string,
    last: string,
    age: number
};

type AccountDetails = {
    email?: string,
    password?: string
};

type NewEmployee = UserInfo & AccountDetails;

const emp1: NewEmployee = {
    first: "Employee",
    last: "One",
    age: 20,
}

console.log(emp1.first, emp1.last, emp1.age);