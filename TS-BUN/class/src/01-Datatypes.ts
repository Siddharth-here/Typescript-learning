
//any type "noImplicitAny" : true
let name: any;

//unknown
//typesafe version of any
function render(document: unknown) {
    if (typeof document === "string") {
        console.log(document);
    }
    if (typeof document === "string" && document.endsWith(".jpg")) {
    }
}

//never type
//Represents value that never occur.

// function propose(message: string): never {
//    // throw new Error("user not found");

// }

//propose("----")

//Enums
const enum teamStrength { weak = 1, good, strong }

let yellow = teamStrength.weak
console.log(yellow);

//Array
let numbers: number[] = [1, 2, 3, 4, 5]

//Tuple - is a fixed length array where each element has specific type
let album: [string, number, string] = ["hii", 2025, "siddd"]
console.log(album);

//Object
let mentor: {
    id: number,
    name: string,
    teaches: (sub: string[]) => void,
    addres?: {
        street: string,
        pin: number,
    }

} = {
    id: 4,
    name: "sidd",
    teaches: (sub: string[]) => {
        console.log(`${mentor.name} teaches: ${sub.join(",")}`);
    }
}

//Functions
function calculatePrice(team: string): number {

    if (team.toLowerCase() === "rr") {
        return 15000
    }

    return NaN;

}
calculatePrice("rr")

//type inferance


