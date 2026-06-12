//In Memory DB
//save ('user-1', {fname, lname,})

//HashMap(key, value)
//        type? type?


type UserID = number //custom types

interface User {
    id: number
    fname: string
    lname?: string //optional
    email: string
    contact: {
        mobile: string
    }
    address: {
        street: number
        pin: number
        country: string
    }
}

class InMemoryDB {
    private _db: Map<User['id'], User>
    constructor() {


    }
    public insertUser(data: User): UserID {
        if (this._db.has(data.id)) {
            throw new Error(`User with ID ${data.id} already exists`);

        }
        this._db.set(data.id, data)
        return data.id
    }

    public updateUser(id: UserID, updateData: Omit<User, 'id'>): boolean {
        if (!this._db.has(id)) throw new Error(`User with ID ${id} does not exist`)
        this._db.set(id, { ...updateData, id })
        return true

    }

    public getUserById(id: UserID): User {
        if (!this._db.has(id)) throw new Error("User with ID ${id} does not exist");
        return this._db.get(id)!
    }
}

const myDb = new InMemoryDB()
myDb.insertUser({
    id: 1,
    fname: 'siddhartha',
    email: 'sidd@gmail.com',
    contact: {
        mobile: '78665'
    },
    address: {
        country: 'in',
        pin: 1234,
        street: 1
    }
})