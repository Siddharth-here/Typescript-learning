// Type Aliases

type Team = {
    name: string,
    getSquad: () => string[],
    readonly price: number,
    isBanned: boolean

}

let csk: Team = {
    name: "wizards",
    getSquad() {
        return ["Thala"]
    },
    price: 500_000,
    isBanned: true
}

//Unions



//Intersection Types
type Male = {
    speak: () => void
}

type Lion = {
    roar: () => void
}

type combined = Male & Lion

let lordNarsimha: combined = {
    speak() {
        console.log("tathastu");

    },
    roar() {
        console.log("rawrrrrr");

    },
}
lordNarsimha.speak();


//Nullable 
function greet(name: string | null | undefined) {
    if (name) {
        console.log(`hello${name}`);

    }
    console.log("hello");

}
greet(null)

//Optional chaining ?
type Customer = {
    birthday?: Date;
}


function getCustomer(id: number ): Customer| null | undefined{
    return id === 0 ? null: id <= -1? undefined: {birthday: new Date()}
}

//Nullish Coalescing Operator ??
//we can fallback to a default value when dealing with null/undefine objects.
let speed: number | null = null

let ride = {
    speed: speed ?? 49,

}
console.log(ride.speed);

// Type Assertions
