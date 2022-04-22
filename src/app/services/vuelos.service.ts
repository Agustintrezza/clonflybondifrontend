import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vuelos } from '../models/vuelos';
import { map } from 'rxjs/operators';
import { ConfigProvider } from '../config'




@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor(private http : HttpClient, private config : ConfigProvider) { 
   
   }

  buscarVuelos(price: number): Observable<Vuelos[]> {
    
    let url = this.config.baseApiUrl + `/vuelos/precio/${price}`;
    return this.http
    .get(url)
    .pipe(
      map((data: any = []) => data.map((item: any) => new Vuelos(item)))
  
    )}

    obtenerPorPrecioOrigenDestinoPasajerosFecha(price: number, origen: string, destino: string, pasajeros: number, data: string): Observable<Vuelos[]> {
      let url = this.config.baseApiUrl + `/vuelos/precio/${price}/origen/${origen}/destino/${destino}/pasajeros/${pasajeros}/data/${data}`;
      return this.http
      .get(url)
      .pipe(
        map((data: any = []) => data.map((item: any) => new Vuelos(item)))
    
      )}
    }

