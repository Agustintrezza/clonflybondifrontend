import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { PrincipalComponent } from './pages/principal/principal.component';
import { Contenido2Component } from './pages/contenido2/contenido2.component';
import { Contenido3Component } from './pages/contenido3/contenido3.component';
import { VolaATuMedidaComponent } from './componentes/vola-a-tu-medida/vola-a-tu-medida.component';
import { BtnflotanteComponent } from './componentes/btnflotante/btnflotante.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    Contenido2Component,
    Contenido3Component,
    VolaATuMedidaComponent,
    BtnflotanteComponent
  ],
  exports: [
   PrincipalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContenidosModule { }
