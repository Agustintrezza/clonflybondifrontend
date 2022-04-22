import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Vuelos } from 'src/app/models/vuelos';
import { VuelosService } from 'src/app/services/vuelos.service';
import { Aeropuertos } from 'src/app/models/aeropuertos';
import { AeropuertosService } from 'src/app/services/aeropuertos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  price: number = 0;
  vuelos: Vuelos[] = [];
  price2: number = 0;
  vuelo: boolean = false;
  precios: any[] = [];
  precioss: number[] = [];
  descuentos: any[] = [];
  precio: number = 0;
  aeropuertos: Aeropuertos[] = [];
  codigo: string = '';
  origen: string = '';
  destino: string = '';
  origin: string = '';
  destination: string = '';
  pasajeros: number = 0;
  data: any;
  busco: boolean = false;


  // preciosDescuento: any[] = [];

  // miFormulario: FormGroup = this.fb.group({
  //   price: [, [Validators.required, Validators.min(1)]],
  //   origin: [, Validators.required],
  //   destination: [, Validators.required],
  //   data: [, Validators.required],
  //   pasajeros: [, [Validators.required, Validators.min(1)]],
  // });

  miFormulario: FormGroup = this.fb.group({
    price: [],
    origin: [],
    destination: [],
    data: [],
    pasajeros: [],
  });


  constructor(
    private vuelosService: VuelosService,
    private aeropuertosService: AeropuertosService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  
  }

  campoEsValido(campo: string) {
    return true;
    // return (
    //   this.miFormulario.controls[campo].errors &&
    //   this.miFormulario.controls[campo].touched
    // );
  }

  guardar() {
    console.log(this.miFormulario.value)
    console.log(this.miFormulario.value.price)
  
    this.price = this.miFormulario.value.price;
    this.origin = this.miFormulario.value.origin;
    this.destination = this.miFormulario.value.destination;
    this.pasajeros = this.miFormulario.value.pasajeros;
    this.data = this.miFormulario.value.data;
    console.log(this.price);

    console.log(this.busco);

    //Obtener Aeropuertos Investigar funcion FIND
    // Dentro del subscribe de aeropuertos pegar el codigo de vuelo service
    // En el HTML por cada vuelo, llamar a una funcion pasando por parámetro el origen y el destino y buscar con ese código en el array de aeropuertos, devolver la descripcion del aeropuerto.

    this.vuelosService
      .obtenerPorPrecioOrigenDestinoPasajerosFecha(this.price, this.origin, this.destination, this.pasajeros, this.data? this.data : null)
      .subscribe((vuelos: Vuelos[]) => {
        this.vuelos = vuelos;
        console.log(this.vuelos);
        this.vuelo = true;
        this.busco = true;

        console.log(this.origin);

        this.aeropuertosService
          .buscarAeropuertos(this.origin, this.destination)
          .subscribe((aeropuertos: Aeropuertos[]) => {
            this.aeropuertos = aeropuertos;
            console.log(this.aeropuertos);

          });  
      });

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    // this.miFormulario.reset()};

  }

  calcularPrecioConDescuento(precio: number) {
    return (precio * 0.75).toFixed(2);
  }

  calcularPresupuestoTotal() {
    return (
      this.miFormulario.value.pasajeros * this.miFormulario.value.price
    ).toFixed(2);
  }

  obtenerDescripcionOrigen(origin: string) {
    return this.aeropuertos.find((x) => x.code == origin)?.description;
  }

  obtenerDescripcionDestino(destination: string) {
    return this.aeropuertos.find((x) => x.code == destination)?.description;
  }
}
