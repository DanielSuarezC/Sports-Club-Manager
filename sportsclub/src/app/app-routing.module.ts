import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaAdministrativoComponent } from './usuarios/administrativo/lista-administrativo/lista-administrativo.component';
import { ListaDeportistaComponent } from './usuarios/deportista/lista-deportista/lista-deportista.component';
import { ListaEntrenadorComponent } from './usuarios/entrenador/lista-entrenador/lista-entrenador.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent  
  },
  {
    path: 'lista-administrativo',
    component: ListaAdministrativoComponent
  },
  {
    path: 'lista-deportista',
    component: ListaDeportistaComponent
  },
  {
    path: 'lista-entrenador',
    component: ListaEntrenadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
