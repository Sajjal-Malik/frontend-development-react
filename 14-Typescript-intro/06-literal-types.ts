// Broad type vs Literal type
let anyString: string = "hello";
let exactString: "hello" = "hello";

anyString = "world";
// exactString = "world"; // Error


type AllNavigation = "North" | "South" | "East" | "West";

function shift(dir: AllNavigation) {
    console.log(`Moving ${dir}`);
}

shift("North");
// shift("Up");    // Error


let statusLet = "pending";
const statusConst = "pending";

// can change value of literal defined using 'let'
statusLet = "complete";


const config = {
    endpoint: "https://example.com",
    retries: 3
} as const;

// config.endpoint is now typed strictly as "https://example.com"
// config.retries is now typed strictly as 3


type Position = "top" | "bottom";
type Alignment = "left" | "right";

// Generates: "top-left" | "top-right" | "bottom-left" | "bottom-right"
type UIPlacement = `${Position}-${Alignment}`; 
