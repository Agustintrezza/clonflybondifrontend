export class Vuelos {

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

    id : string = "";
    data: string = "";
    origin: string = "";
    destination: string = "";
    price: number = 0;
    availability: number = 0; 

}