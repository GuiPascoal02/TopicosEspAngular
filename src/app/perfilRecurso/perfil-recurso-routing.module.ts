import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilRecursoListaComponent } from './perfil-recurso-lista/perfil-recurso-lista.component';


const routes: Routes = [
  {
    path: '',
    component: PerfilRecursoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRecursoRoutingModule { }
