
export class Cartclass {
    constructor(
        public id: number,
        public UserId: number,
        public name: string,
        public email: string,
        public street: string,
        public city: string,
        public state: string,
        public country: string,
        public pin: number,
        public address_id: number,
        public payment_method: string,
        public terms_cond: boolean
    ) { }
}

