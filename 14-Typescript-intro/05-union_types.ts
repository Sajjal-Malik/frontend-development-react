let id: string | number;

id = 123;
id = "abc";
// id = true; // Error

function formatId(id: string | number) {
    if (typeof id === "string") {
        return id.toUpperCase();
    } else {
        return id.toFixed(0);
    }
}




type AllDirections = "North" | "South" | "East" | "West";

let move: AllDirections = "North"; // Okay
// let wrongMove: Direction = "Up"; // Error




type data = [
    {
        id: number,
        name: string,
        city: string
    }
];

type SuccessState = {
    status: "success";
    data: data[];
}

type ErrorState = {
    status: "error";
    message: string;
}

type ResponseState = SuccessState | ErrorState;

function handleResponse(response: ResponseState) {
    if (response.status === "success") {
        console.log(response.data);
    } else {
        console.log(response.message);
    }
}

