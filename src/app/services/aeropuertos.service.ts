import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aeropuertos } from '../models/aeropuertos';
import { map } from 'rxjs/operators';
import { ConfigProvider } from '../config'





@Injectable({
  providedIn: 'root'
})
export class AeropuertosService {

  constructor(private http : HttpClient, private config : ConfigProvider) { }

  buscarAeropuertos(origin: string, destination: string): Observable<Aeropuertos[]> {
    
    let url = this.config.baseApiUrl + `/aeropuertos/${origin}&${destination}`;
    return this.http
    .get(url)
    .pipe(
      map((data: any = []) => data.map((item: any) => new Aeropuertos(item)))
  
    )}
}
