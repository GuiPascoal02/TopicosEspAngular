import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRecursoRoutingModule } from './perfil-recurso-routing.module';
import { PerfilRecursoListaComponent } from './perfil-recurso-lista/perfil-recurso-lista.component';


@NgModule({
  declarations: [PerfilRecursoListaComponent],
  imports: [
    CommonModule,
    PerfilRecursoRoutingModule
  ]
})
export class PerfilRecursoModule { }
