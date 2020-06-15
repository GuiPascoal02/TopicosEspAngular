import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'pessoas',
    loadChildren: () => import('./pessoa/pessoa.module').then(p=>p.PessoaModule)
  },
  {
    path:'anotacao',
    loadChildren: () => import('./anotacao/anotacao.module').then(p=>p.AnotacaoModule)
  },
  {
    path:'grupo',
    loadChildren: () => import('./grupo/grupo.module').then(p=>p.GrupoModule)
  },
  {
    path:'login',
    loadChildren: () => import('./login/login.module').then(p=>p.LoginModule)
  },
  {
    path:'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(p=>p.PerfilModule)
  },
  {
    path:'perfilRecurso',
    loadChildren: () => import('./perfilRecurso/perfil-recurso.module').then(p=>p.PerfilRecursoModule)
  },
  {
    path:'pessoaGrupo',
    loadChildren: () => import('./pessoaGrupo/pessoa-grupo.module').then(p=>p.PessoaGrupoModule)
  },
  {
    path:'recurso',
    loadChildren: () => import('./recurso/recurso.module').then(p=>p.RecursoModule)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
