export class User {

    constructor(
        public _id?: string,
        public fullname: string = '',
        public imgUrl: string = '',
        public username: string = '',
        public password: string = '',
        public balance: number = 100,
        public transactions:string[] =[]
        ) {
    }

    setId?(id: string = 'u101') {
        // Implement your own set Id
        this._id = id
    }
}

