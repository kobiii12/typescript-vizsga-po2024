export interface Event {
    id: string;
    name: string;
    location: string;
    date: Date;
    participants: string[];
    category: string;
}

export class EventEntity implements Event {
    constructor(
        public id: string,
        public name: string,
        public location: string,
        public date: Date,
        public participants: string[],
        public category: string
    ) {}
}