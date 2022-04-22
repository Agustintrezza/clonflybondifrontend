import {Injectable} from '@angular/core';

@Injectable()
export class ConfigProvider {

    //  TEST
    // public baseApiUrl = 'http://localhost:8080';

  // PRODUCCION  Acá va la url que entrega HEROKU. Backend.
    public baseApiUrl = 'https://flybondi.herokuapp.com'; 

}