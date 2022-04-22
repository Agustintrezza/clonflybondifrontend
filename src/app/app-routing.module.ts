import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './contenidos/pages/principal/principal.component';
import { Contenido2Component } from './contenidos/pages/contenido2/contenido2.component';
import { Contenido3Component } from './contenidos/pages/contenido3/contenido3.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: HeaderComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'principal',
    component: PrincipalComponent,
    pathMatch: 'full'
  },
  {
    path: 'contenido2',
    component: Contenido2Component,
  },
  {
    path: 'contenido3',
    component: Contenido3Component,
  },
  {
    path: '**',
    redirectTo: 'mis-proyectos'   // Acá tmb se puede armar un componente tipo page de Error.
},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
