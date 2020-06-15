import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaGrupoListaComponent } from './pessoa-grupo-lista/pessoa-grupo-lista.component';


const routes: Routes = [
  {
    path: '',
    component: PessoaGrupoListaComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaGrupoRoutingModule { }
